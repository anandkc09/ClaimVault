require("dotenv").config();

const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const {
  S3Client,
  PutObjectCommand,
  ListObjectsV2Command,
  GetObjectCommand,
  DeleteObjectCommand
} = require("@aws-sdk/client-s3");

const app = express();
const PORT = 3000;

// =========================
// Middleware
// =========================

app.use(express.json());

// CORS - Frontend connection
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// =========================
// Multer
// =========================

const upload = multer({
  storage: multer.memoryStorage()
});

// =========================
// AWS S3 Configuration
// =========================

const s3 = new S3Client({
  region: process.env.AWS_REGION
});

// =========================
// CLAIMS STORAGE
// =========================

const claimsFile = path.join(__dirname, "claims.json");

if (!fs.existsSync(claimsFile)) {
  fs.writeFileSync(claimsFile, "[]");
}

function getClaims() {
  try {
    return JSON.parse(
      fs.readFileSync(claimsFile, "utf8")
    );
  } catch (error) {
    return [];
  }
}

function saveClaims(claims) {
  fs.writeFileSync(
    claimsFile,
    JSON.stringify(claims, null, 2)
  );
}

// =========================
// PRODUCTS STORAGE
// =========================

const productsFile = path.join(__dirname, "products.json");

if (!fs.existsSync(productsFile)) {
  fs.writeFileSync(productsFile, "[]");
}

function getProducts() {
  try {
    return JSON.parse(
      fs.readFileSync(productsFile, "utf8")
    );
  } catch (error) {
    return [];
  }
}

function saveProducts(products) {
  fs.writeFileSync(
    productsFile,
    JSON.stringify(products, null, 2)
  );
}

// =========================
// HOME
// =========================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "ClaimVault Backend is running",
    port: PORT
  });
});

// =========================
// HEALTH CHECK
// =========================

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "ClaimVault Backend is running"
  });
});

// =====================================================
//                     CLAIMS
// =====================================================

// =========================
// CREATE CLAIM
// =========================

app.post("/api/claims", (req, res) => {
  try {
    const {
      claimType,
      amount,
      dateOfIncident,
      description
    } = req.body;

    if (!claimType) {
      return res.status(400).json({
        success: false,
        message: "Claim type is required"
      });
    }

    if (!amount) {
      return res.status(400).json({
        success: false,
        message: "Claim amount is required"
      });
    }

    if (!dateOfIncident) {
      return res.status(400).json({
        success: false,
        message: "Date of incident is required"
      });
    }

    const claims = getClaims();

    const year = new Date().getFullYear();

    const claimNumber = String(
      claims.length + 1
    ).padStart(3, "0");

    const claimId = `CLM-${year}-${claimNumber}`;

    const newClaim = {
      claimId,
      claimType,
      amount: Number(amount),
      dateOfIncident,
      description: description || "",
      status: "Pending",
      createdAt: new Date().toISOString()
    };

    claims.push(newClaim);

    saveClaims(claims);

    res.status(201).json({
      success: true,
      message: "Claim created successfully",
      claim: newClaim
    });

  } catch (error) {
    console.error(
      "Create Claim Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to create claim",
      error: error.message
    });
  }
});

// =========================
// GET ALL CLAIMS
// =========================

app.get("/api/claims", (req, res) => {
  try {
    const claims = getClaims();

    res.json({
      success: true,
      count: claims.length,
      claims
    });

  } catch (error) {
    console.error(
      "Get Claims Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch claims",
      error: error.message
    });
  }
});

// =========================
// GET SINGLE CLAIM
// =========================

app.get("/api/claims/:claimId", (req, res) => {
  try {
    const claims = getClaims();

    const claim = claims.find(
      item => item.claimId === req.params.claimId
    );

    if (!claim) {
      return res.status(404).json({
        success: false,
        message: "Claim not found"
      });
    }

    res.json({
      success: true,
      claim
    });

  } catch (error) {
    console.error(
      "Get Claim Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch claim",
      error: error.message
    });
  }
});

// =====================================================
//                     PRODUCTS
// =====================================================

// =========================
// CREATE PRODUCT
// =========================

app.post("/api/products", (req, res) => {
  try {
    const products = getProducts();

    const {
      productName,
      category,
      purchaseDate,
      warrantyEndDate,
      price,
      description
    } = req.body;

    if (!productName) {
      return res.status(400).json({
        success: false,
        message: "Product name is required"
      });
    }

    const year = new Date().getFullYear();

    const productNumber = String(
      products.length + 1
    ).padStart(3, "0");

    const productId =
      `PRD-${year}-${productNumber}`;

    const newProduct = {
      productId,
      productName,
      category: category || "",
      purchaseDate: purchaseDate || "",
      warrantyEndDate: warrantyEndDate || "",
      price: price ? Number(price) : 0,
      description: description || "",
      createdAt: new Date().toISOString()
    };

    products.push(newProduct);

    saveProducts(products);

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product: newProduct
    });

  } catch (error) {
    console.error(
      "Create Product Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to create product",
      error: error.message
    });
  }
});
// ======================================================
// PRODUCT IMAGE UPLOAD
// ======================================================

app.post(
  "/api/files/products",
  upload.single("file"),
  async (req, res) => {

    try {

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No image uploaded"
        });
      }

      const productId = req.body.productId;

      if (!productId) {
        return res.status(400).json({
          success: false,
          message: "Product ID is required"
        });
      }

      const safeName =
        req.file.originalname.replace(
          /[^a-zA-Z0-9._-]/g,
          "_"
        );

      const key =
        `products/${productId}/${Date.now()}-${safeName}`;

      const command =
        new PutObjectCommand({
          Bucket: process.env.S3_BUCKET_NAME,
          Key: key,
          Body: req.file.buffer,
          ContentType: req.file.mimetype
        });

      await s3.send(command);

      console.log(
        "✅ Product image uploaded:",
        key
      );

      res.json({
        success: true,
        message: "Product image uploaded successfully",
        key: key
      });

    } catch (error) {

      console.error(
        "❌ Product image upload failed:",
        error
      );

      res.status(500).json({
        success: false,
        message: "Product image upload failed",
        error: error.message
      });

    }
  }
);
// ==========================================
// INVOICE / WARRANTY DOCUMENT UPLOAD
// ==========================================

app.post(
  "/api/files/invoices",
  upload.single("file"),
  async (req, res) => {

    try {

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No invoice document uploaded"
        });
      }

      const productId =
        req.body.productId;

      if (!productId) {
        return res.status(400).json({
          success: false,
          message: "Product ID is required"
        });
      }

      const safeName =
        req.file.originalname.replace(
          /[^a-zA-Z0-9._-]/g,
          "_"
        );

      const key =
        `invoices/${productId}/${Date.now()}-${safeName}`;

      const command =
        new PutObjectCommand({
          Bucket: process.env.S3_BUCKET_NAME,
          Key: key,
          Body: req.file.buffer,
          ContentType: req.file.mimetype
        });

      await s3.send(command);

      console.log(
        "✅ Invoice uploaded:",
        key
      );

      res.json({
        success: true,
        message: "Invoice uploaded successfully",
        key: key
      });

    } catch (error) {

      console.error(
        "❌ Invoice upload failed:",
        error
      );

      res.status(500).json({
        success: false,
        message: "Invoice upload failed",
        error: error.message
      });

    }

  }
);
// ======================================================
// INVOICE / WARRANTY DOCUMENT UPLOAD
// ======================================================

app.post(
  "/api/files/invoices",
  upload.single("file"),
  async (req, res) => {

    try {

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No invoice/warranty document uploaded"
        });
      }

      const productId = req.body.productId;

      if (!productId) {
        return res.status(400).json({
          success: false,
          message: "Product ID is required"
        });
      }

      const safeName =
        req.file.originalname.replace(
          /[^a-zA-Z0-9._-]/g,
          "_"
        );

      const key =
        `invoices/${productId}/${Date.now()}-${safeName}`;

      const command =
        new PutObjectCommand({
          Bucket: process.env.S3_BUCKET_NAME,
          Key: key,
          Body: req.file.buffer,
          ContentType: req.file.mimetype
        });

      await s3.send(command);

      console.log(
        "✅ Invoice / warranty document uploaded:",
        key
      );

      res.json({
        success: true,
        message: "Invoice / warranty document uploaded successfully",
        key: key
      });

    } catch (error) {

      console.error(
        "❌ Invoice upload failed:",
        error
      );

      res.status(500).json({
        success: false,
        message: "Invoice upload failed",
        error: error.message
      });

    }
  }
);

// =========================
// GET ALL PRODUCTS
// =========================

app.get("/api/products", (req, res) => {
  try {
    const products = getProducts();

    res.json({
      success: true,
      count: products.length,
      products
    });

  } catch (error) {
    console.error(
      "Get Products Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message
    });
  }
});

// =========================
// GET SINGLE PRODUCT
// =========================

app.get("/api/products/:productId", (req, res) => {
  try {
    const products = getProducts();

    const product = products.find(
      item =>
        item.productId === req.params.productId
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    res.json({
      success: true,
      product
    });

  } catch (error) {
    console.error(
      "Get Product Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
      error: error.message
    });
  }
});

// =========================
// DELETE PRODUCT
// =========================

app.delete("/api/products/:productId", (req, res) => {
  try {
    const products = getProducts();

    const productIndex = products.findIndex(
      item =>
        item.productId === req.params.productId
    );

    if (productIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    const deletedProduct =
      products.splice(productIndex, 1)[0];

    saveProducts(products);

    res.json({
      success: true,
      message: "Product deleted successfully",
      product: deletedProduct
    });

  } catch (error) {
    console.error(
      "Delete Product Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to delete product",
      error: error.message
    });
  }
});

// =====================================================
//                  S3 FILES
// =====================================================

// =========================
// UPLOAD CLAIM FILE TO S3
// =========================

app.post(
  "/api/files/claims",
  upload.single("file"),
  async (req, res) => {
    try {

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No file uploaded"
        });
      }

      const claimId =
        req.body.claimId || "general";

      const safeFileName =
        req.file.originalname.replace(
          /[^a-zA-Z0-9._-]/g,
          "_"
        );

      const fileKey =
        `claims/${claimId}/${Date.now()}-${safeFileName}`;

      const command = new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: fileKey,
        Body: req.file.buffer,
        ContentType: req.file.mimetype
      });

      await s3.send(command);

      res.json({
        success: true,
        message: "File uploaded to S3 successfully",
        key: fileKey,
        claimId
      });

    } catch (error) {

      console.error(
        "S3 Upload Error:",
        error.message
      );

      res.status(500).json({
        success: false,
        message: "S3 upload failed",
        error: error.message
      });
    }
  }
);

// =========================
// LIST S3 FILES
// =========================

app.get("/api/files", async (req, res) => {
  try {

    const command = new ListObjectsV2Command({
      Bucket: process.env.S3_BUCKET_NAME
    });

    const result = await s3.send(command);

    const files =
      (result.Contents || []).map(file => ({
        key: file.Key,
        size: file.Size,
        uploadedAt: file.LastModified
      }));

    res.json({
      success: true,
      files
    });

  } catch (error) {

    console.error(
      "S3 List Error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch files",
      error: error.message
    });
  }
});

// =========================
// DOWNLOAD FILE
// =========================

app.get(/^\/api\/files\/(.+)$/, async (req, res) => {
  try {

    const key = req.params[0];

    const command = new GetObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key
    });

    const result = await s3.send(command);

    const filename =
      key.split("/").pop();

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${filename}"`
    );

    result.Body.pipe(res);

  } catch (error) {

    console.error(
      "S3 Download Error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to download file",
      error: error.message
    });
  }
});

// =========================
// DELETE FILE
// =========================

app.delete(/^\/api\/files\/(.+)$/, async (req, res) => {
  try {

    const key = req.params[0];

    const command = new DeleteObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key
    });

    await s3.send(command);

    res.json({
      success: true,
      message: "File deleted successfully",
      key
    });

  } catch (error) {

    console.error(
      "S3 Delete Error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to delete file",
      error: error.message
    });
  }
});

// =========================
// START SERVER
// =========================

app.listen(PORT, () => {
  console.log(
    `ClaimVault Backend running at http://localhost:${PORT}`
  );
});