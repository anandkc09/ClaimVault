// =============================
// CLAIMVAULT JAVASCRIPT
// =============================

console.log("ClaimVault loaded successfully");


// =============================
// PAGE ELEMENTS
// =============================

const dashboardPage = document.getElementById("dashboardPage");
const productsPage = document.getElementById("productsPage");
const warrantiesPage = document.getElementById("warrantiesPage");
const claimsPage = document.getElementById("claimsPage");
const notificationsPage = document.getElementById("notificationsPage");

const settingsPage = document.getElementById("settingsPage");
const dashboardNav = document.getElementById("dashboardNav");
const myProductsNav = document.getElementById("myProductsNav");

const topProductsNav = document.getElementById("topProductsNav");
const topDashboardNav = document.getElementById("topDashboardNav");

const warrantiesNav = document.getElementById("warrantiesNav");
const topWarrantiesNav = document.getElementById("topWarrantiesNav");

const claimsNav = document.getElementById("claimsNav");
const topClaimsNav = document.getElementById("topClaimsNav");


const notificationsNav = document.getElementById("notificationsNav");
const settingsNav = document.getElementById("settingsNav");
const helpNav = document.getElementById("helpNav");
const helpPage = document.getElementById("helpPage");
const topNotificationsNav = document.getElementById("topNotificationsNav");

// =============================
// PAGE NAVIGATION
// =============================

function showDashboard() {

    dashboardPage.style.display = "block";
    productsPage.style.display = "none";
    warrantiesPage.style.display = "none";
    claimsPage.style.display = "none";
    dashboardNav.classList.add("active");
    myProductsNav.classList.remove("active");
    warrantiesNav.classList.remove("active");
    notificationsPage.style.display = "none";

}


function showMyProducts() {

    dashboardPage.style.display = "none";
    productsPage.style.display = "block";
    warrantiesPage.style.display = "none";
    claimsPage.style.display = "none";
    dashboardNav.classList.remove("active");
    myProductsNav.classList.add("active");
    warrantiesNav.classList.remove("active");
    notificationsPage.style.display = "none";

}
function showWarranties() {

    dashboardPage.style.display = "none";
    productsPage.style.display = "none";
    warrantiesPage.style.display = "block";
    claimsPage.style.display = "none";

    dashboardNav.classList.remove("active");
    myProductsNav.classList.remove("active");
    warrantiesNav.classList.add("active");
    notificationsPage.style.display = "none";

}
function showClaims() {

    dashboardPage.style.display = "none";
    productsPage.style.display = "none";
    warrantiesPage.style.display = "none";
    claimsPage.style.display = "block";

    dashboardNav.classList.remove("active");
    myProductsNav.classList.remove("active");
    warrantiesNav.classList.remove("active");
    claimsNav.classList.add("active");
    notificationsNav.classList.remove("active");
    notificationsPage.style.display = "none";

}
function showNotifications() {

    dashboardPage.style.display = "none";
    productsPage.style.display = "none";
    warrantiesPage.style.display = "none";
    claimsPage.style.display = "none";
    notificationsPage.style.display = "block";
    settingsPage.style.display = "none";

    dashboardNav.classList.remove("active");
    myProductsNav.classList.remove("active");
    warrantiesNav.classList.remove("active");
    claimsNav.classList.remove("active");
    notificationsNav.classList.add("active");
    settingsNav.classList.remove("active");
}


function showSettings() {

    dashboardPage.style.display = "none";
    productsPage.style.display = "none";
    warrantiesPage.style.display = "none";
    claimsPage.style.display = "none";
    notificationsPage.style.display = "none";
    settingsPage.style.display = "block";

    dashboardNav.classList.remove("active");
    myProductsNav.classList.remove("active");
    warrantiesNav.classList.remove("active");
    claimsNav.classList.remove("active");
    notificationsNav.classList.remove("active");
}
function showHelp() {
    dashboardPage.style.display = "none";
    productsPage.style.display = "none";
    warrantiesPage.style.display = "none";
    claimsPage.style.display = "none";
    notificationsPage.style.display = "none";
    settingsPage.style.display = "none";
    helpPage.style.display = "block";

    dashboardNav.classList.remove("active");
    myProductsNav.classList.remove("active");
    warrantiesNav.classList.remove("active");
    claimsNav.classList.remove("active");
    notificationsNav.classList.remove("active");
    settingsNav.classList.remove("active");
    helpNav.classList.add("active");
}
helpNav.addEventListener("click", function(event) {
    event.preventDefault();
    showHelp();
});
const helpActionButtons = document.querySelectorAll(".help-action-btn");

helpActionButtons[0].addEventListener("click", function() {
    alert("FAQ section will be connected soon.");
});
helpActionButtons[1].addEventListener("click", function() {
    alert("Contact Support will be connected soon.");
});
helpActionButtons[2].addEventListener("click", function() {
    alert("Warranty Guide will be connected soon.");
});
const productDetailsModal = document.getElementById("productDetailsModal");
const closeProductDetails = document.querySelector(".close-product-details");
const closeDetailsBtn = document.querySelector(".close-details-btn");

closeProductDetails.addEventListener("click", function() {
    productDetailsModal.style.display = "none";
});

closeDetailsBtn.addEventListener("click", function() {
    productDetailsModal.style.display = "none";
});
const productViewButtons = document.querySelectorAll(".product-view-btn");

productViewButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        productDetailsModal.style.display = "flex";
    });
});

settingsNav.addEventListener("click", function(event) {
    event.preventDefault();
    showSettings();
});
const editProfileBtn = document.querySelector(".edit-profile-btn");

editProfileBtn.addEventListener("click", function() {
    alert("Profile editing will be connected soon.");
});
const changePasswordBtn = document.querySelector(".settings-action-btn");

changePasswordBtn.addEventListener("click", function() {
    alert("Change Password feature will be connected soon.");
});
const securityButtons = document.querySelectorAll(".settings-action-btn");

securityButtons[1].addEventListener("click", function() {
    alert("Two-Factor Authentication setup will be connected soon.");
});
const deleteAccountBtn = document.querySelector(".delete-account-btn");

deleteAccountBtn.addEventListener("click", function() {
    const confirmDelete = confirm(
        "Are you sure you want to delete your account?"
    );

    if (confirmDelete) {
        alert("Account deletion will be connected to the backend.");
    }
});

// Top Warranties button
topWarrantiesNav.addEventListener("click", function(event) {

    event.preventDefault();

    showWarranties();

    document.querySelectorAll(".top-nav-item").forEach(function(item) {
        item.classList.remove("active");
    });

    topWarrantiesNav.classList.add("active");

});
// Claims button
topClaimsNav.addEventListener("click", function(event) {

    event.preventDefault();

    showClaims();

});
// Claims button
claimsNav.addEventListener("click", function(event) {

    event.preventDefault();

    showClaims();

});


// Notifications button
notificationsNav.addEventListener("click", function(event) {

    event.preventDefault();

    showNotifications();

});
// Top Notifications button
topNotificationsNav.addEventListener("click", function(event) {

    event.preventDefault();

    showNotifications();

    document.querySelectorAll(".top-nav-item").forEach(function(item) {
        item.classList.remove("active");
    });

    topNotificationsNav.classList.add("active");

});
// ================= MARK ALL AS READ =================

const markAllReadBtn = document.querySelector(".mark-all-read-btn");

markAllReadBtn.addEventListener("click", function() {

    const unreadNotifications =
        document.querySelectorAll(".notification-item.unread");

    unreadNotifications.forEach(function(notification) {

        notification.classList.remove("unread");

        const unreadDot =
            notification.querySelector(".unread-dot");

        if (unreadDot) {
            unreadDot.remove();
        }

    });

});

// Dashboard button
dashboardNav.addEventListener("click", function(event) {

    event.preventDefault();

    showDashboard();

});


// My Products button
myProductsNav.addEventListener("click", function(event) {

    event.preventDefault();

    showMyProducts();

});
// Warranties button
warrantiesNav.addEventListener("click", function(event) {

    event.preventDefault();

    showWarranties();

});
// Top Products button
topProductsNav.addEventListener("click", function(event) {

    event.preventDefault();

    showMyProducts();

    document.querySelectorAll(".top-nav-item").forEach(function(item) {
        item.classList.remove("active");
    });

    topProductsNav.classList.add("active");

});
// Top Dashboard button
topDashboardNav.addEventListener("click", function(event) {

    event.preventDefault();

    showDashboard();

    document.querySelectorAll(".top-nav-item").forEach(function(item) {
        item.classList.remove("active");
    });

    topDashboardNav.classList.add("active");

});

// =============================
// ADD PRODUCT MODAL
// =============================

const productModal =
    document.getElementById("productModal");

const addProductButtons =
    document.querySelectorAll(".add-product-btn, .table-add-btn");

const closeProductModal =
    document.getElementById("closeProductModal");

const cancelProduct =
    document.getElementById("cancelProduct");


// Open modal
addProductButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        productModal.classList.add("show");

    });

});


// Close modal
closeProductModal.addEventListener("click", function() {

    productModal.classList.remove("show");

});


// Cancel
cancelProduct.addEventListener("click", function() {

    productModal.classList.remove("show");

});


// Click outside modal
productModal.addEventListener("click", function(event) {

    if (event.target === productModal) {

        productModal.classList.remove("show");

    }

});


// =============================
// ADD PRODUCT FORM - BACKEND
// =============================

const productForm =
    document.getElementById("productForm");


productForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const productName =
        document.getElementById("productName").value.trim();

    const productBrand =
        document.getElementById("productBrand").value.trim();

    const productCategory =
        document.getElementById("productCategory").value;

    const purchaseDate =
        document.getElementById("purchaseDate").value;

    const warrantyExpiry =
        document.getElementById("warrantyExpiry").value;

    const invoiceNumber =
        document.getElementById("invoiceNumber").value.trim();


    // ==========================================
    // PRODUCT IMAGE
    // ==========================================

    const productImageInput =
        document.getElementById("productImage");

    const selectedImage =
        productImageInput &&
        productImageInput.files.length > 0
            ? productImageInput.files[0]
            : null;


    // ==========================================
    // INVOICE / WARRANTY DOCUMENT
    // ==========================================

    const invoiceDocumentInput =
        document.getElementById("invoiceDocument");

    const selectedInvoice =
        invoiceDocumentInput &&
        invoiceDocumentInput.files.length > 0
            ? invoiceDocumentInput.files[0]
            : null;


    try {

        // ==========================================
        // STEP 1: SAVE PRODUCT DETAILS
        // ==========================================

        const response =
            await fetch(
                `${API_BASE_URL}/api/products`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        productName:
                            productName,

                        category:
                            productCategory,

                        purchaseDate:
                            purchaseDate,

                        warrantyEndDate:
                            warrantyExpiry,

                        description:
                            `Brand: ${productBrand} | Invoice: ${invoiceNumber}`

                    })
                }
            );


        const data =
            await response.json();


        if (
            !response.ok ||
            !data.success
        ) {

            throw new Error(
                data.message ||
                "Failed to add product"
            );

        }


        console.log(
            "✅ Product saved to backend:",
            data
        );


        // ==========================================
        // STEP 2: UPLOAD PRODUCT IMAGE
        // ==========================================

        if (selectedImage) {

            const imageFormData =
                new FormData();


            imageFormData.append(
                "file",
                selectedImage
            );


            imageFormData.append(
                "productId",
                data.product.productId
            );


            const imageResponse =
                await fetch(
                    `${API_BASE_URL}/api/files/products`,
                    {
                        method: "POST",
                        body: imageFormData
                    }
                );


            const imageData =
                await imageResponse.json();


            if (
                !imageResponse.ok ||
                !imageData.success
            ) {

                throw new Error(
                    imageData.message ||
                    "Product image upload failed"
                );

            }


            console.log(
                "✅ Product image uploaded:",
                imageData
            );

        }


        // ==========================================
        // STEP 3: UPLOAD INVOICE / WARRANTY DOCUMENT
        // ==========================================

        if (selectedInvoice) {

            console.log(
                "📄 Uploading invoice:",
                selectedInvoice.name
            );


            const invoiceFormData =
                new FormData();


            invoiceFormData.append(
                "file",
                selectedInvoice
            );


            invoiceFormData.append(
                "productId",
                data.product.productId
            );


            const invoiceResponse =
                await fetch(
                    `${API_BASE_URL}/api/files/invoices`,
                    {
                        method: "POST",
                        body: invoiceFormData
                    }
                );


            const invoiceData =
                await invoiceResponse.json();


            if (
                !invoiceResponse.ok ||
                !invoiceData.success
            ) {

                throw new Error(
                    invoiceData.message ||
                    "Invoice upload failed"
                );

            }


            console.log(
                "✅ INVOICE UPLOADED:",
                invoiceData
            );

        }
        else {

            console.log(
                "⚠️ No invoice/document selected"
            );

        }


        // ==========================================
        // SUCCESS
        // ==========================================

        alert(
            "Product added successfully!\n\n" +
            "Product: " +
            productName +
            "\nProduct ID: " +
            data.product.productId
        );


        productForm.reset();


        productModal.classList.remove(
            "show"
        );


        // Refresh product data
        if (
            typeof loadAllProductData ===
            "function"
        ) {

            loadAllProductData();

        }


    } catch (error) {

        console.error(
            "❌ Failed to save product:",
            error
        );


        alert(
            "Unable to save product.\n\n" +
            error.message
        );

    }

});


// =============================
// MY PRODUCTS SEARCH
// =============================

const productSearch =
    document.getElementById("productSearch");

const categoryFilter =
    document.getElementById("categoryFilter");

const statusFilter =
    document.getElementById("statusFilter");


function filterProducts() {

    const searchValue =
        productSearch.value.toLowerCase();

    const categoryValue =
        categoryFilter.value;

    const statusValue =
        statusFilter.value;


    const productCards =
        document.querySelectorAll(".my-product-card");


    productCards.forEach(function(card) {

        const productText =
            card.innerText.toLowerCase();


        const categoryMatch =
            categoryValue === "all" ||
            productText.includes(
                categoryValue.toLowerCase()
            );


        const statusMatch =
            statusValue === "all" ||
            productText.includes(
                statusValue.toLowerCase()
            );


        const searchMatch =
            productText.includes(searchValue);


        if (
            categoryMatch &&
            statusMatch &&
            searchMatch
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// Search
productSearch.addEventListener(
    "input",
    filterProducts
);


// Category filter
categoryFilter.addEventListener(
    "change",
    filterProducts
);


// Status filter
statusFilter.addEventListener(
    "change",
    filterProducts
);


// =============================
// INITIAL PAGE
// =============================

showDashboard();
// ================= BACKEND CONNECTION =================

const API_BASE_URL = "https://opjn2tdccg.execute-api.ap-south-1.amazonaws.com";
async function testBackendConnection() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/claims`);

        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }

        const data = await response.json();

        console.log("✅ Backend connected successfully!");
        console.log("Backend response:", data);

    } catch (error) {
        console.error("❌ Backend connection failed:", error);
    }
}

testBackendConnection();
// ================= CLAIM SUBMIT =================

const startClaimBtn = document.querySelector(".start-claim-btn");

if (startClaimBtn) {
    startClaimBtn.addEventListener("click", () => {

        const modal = document.createElement("div");

        modal.innerHTML = `
            <div style="
                position:fixed;
                inset:0;
                background:rgba(0,0,0,0.6);
                display:flex;
                align-items:center;
                justify-content:center;
                z-index:9999;
            ">

                <div style="
                    background:white;
                    width:420px;
                    max-width:90%;
                    padding:25px;
                    border-radius:15px;
                ">

                    <h2 style="margin-top:0; color:#111827 !important;">Start New Claim</h2>

                    <label style="color: #111827 !important;">Claim Type</label>
                    <input id="claimTypeInput"
                        type="text"
                        placeholder="e.g. Health Insurance"
                        style="width:100%;padding:10px;margin:8px 0 15px;box-sizing:border-box;">

                    <label style="color:#111827 !important;">Claim Amount</label>
                    <input id="claimAmountInput"
                        type="number"
                        placeholder="Enter amount"
                        style="width:100%;padding:10px;margin:8px 0 15px;box-sizing:border-box;">

                    <label style="color:#111827 !important;">Date of Incident</label>
                    <input id="claimDateInput"
                        type="date"
                        style="width:100%;padding:10px;margin:8px 0 15px;box-sizing:border-box;">

                    <label style="color:#111827 !important;">Description</label>
                    <textarea id="claimDescriptionInput"
                        placeholder="Describe your claim"
                        style="width:100%;height:80px;padding:10px;margin:8px 0 15px;box-sizing:border-box;"></textarea>
                        <label style="color:#111827 !important;">Upload Document</label>

<input id="claimDocumentInput"
    type="file"
    accept=".pdf,.jpg,.jpeg,.png"
    style="width:100%;padding:10px;margin:8px 0 15px;box-sizing:border-box;">

                    <button id="submitClaimBtn"
                        style="
                            width:100%;
                            padding:12px;
                            background:#087fdb;
                            color:white;
                            border:none;
                            border-radius:8px;
                            cursor:pointer;
                        ">
                        Submit Claim
                    </button>

                    <button id="closeClaimBtn"
                        style="
                            width:100%;
                            padding:10px;
                            margin-top:8px;
                            background:#eee;
                            border:none;
                            border-radius:8px;
                            cursor:pointer;
                        ">
                        Cancel
                    </button>

                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close button
        document.getElementById("closeClaimBtn").onclick = () => {
            modal.remove();
        };

        // Submit claim
        document.getElementById("submitClaimBtn").onclick = async () => {

            const claimType =
                document.getElementById("claimTypeInput").value.trim();

            const amount =
                document.getElementById("claimAmountInput").value;

            const dateOfIncident =
                document.getElementById("claimDateInput").value;

            const description =
                document.getElementById("claimDescriptionInput").value.trim();
            const documentInput =
                document.getElementById("claimDocumentInput");

            const selectedFile =
                documentInput.files[0];

            if (!claimType || !amount || !dateOfIncident) {
                alert("Please fill Claim Type, Amount and Date.");
                return;
            }

            try {

                const response = await fetch(`${API_BASE_URL}/api/claims`, {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        claimType: claimType,
                        amount: Number(amount),
                        dateOfIncident: dateOfIncident,
                        description: description
                    })
                });

                const data = await response.json();
                if (selectedFile) {
                    const formData = new FormData();

                    formData.append("file", selectedFile);
                    formData.append("claimId", data.claim.claimId);

                    const uploadResponse = await fetch(
                    `${API_BASE_URL}/api/files/claims`,
                    {
                        method: "POST",
                        body: formData
                    }
             );

    const uploadData = await uploadResponse.json();

    if (!uploadResponse.ok) {
        throw new Error(
            uploadData.message || "Document upload failed"
        );
    }

    console.log("✅ Document uploaded:", uploadData);
}


                if (!response.ok) {
                    throw new Error(data.message || "Failed to create claim");
                }

                console.log("✅ Claim created:", data);

                alert(
                    "Claim submitted successfully!\nClaim ID: " +
                    data.claim.claimId
                );

                modal.remove();

            } catch (error) {

                console.error("❌ Claim submission failed:", error);

                alert("Claim submission failed: " + error.message);
            }
        };
    });
}
// ================= LOAD CLAIMS FROM BACKEND =================

async function loadClaimsFromBackend() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/claims`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to load claims");
        }

        const claimsList = document.querySelector(".claim-records-list");

        if (!claimsList) return;

        claimsList.innerHTML = "";

        data.claims.forEach(claim => {

            const statusClass =
                claim.status.toLowerCase() === "pending"
                    ? "pending-claim-status"
                    : claim.status.toLowerCase() === "approved"
                    ? "approved-claim-status"
                    : "rejected-claim-status";

            const record = document.createElement("div");

            record.className = "claim-record";

            record.innerHTML = `
                <div class="claim-product-info">

                    <div class="claim-product-icon">
                        📄
                    </div>

                    <div>
                        <h3>${claim.claimType}</h3>
                        <p>
                            ${claim.description || "No description"}
                            • Claim #${claim.claimId}
                        </p>
                    </div>

                </div>

                <div class="claim-date">
                    <span>Submitted</span>
                    <strong>
                        ${new Date(claim.createdAt).toLocaleDateString()}
                    </strong>
                </div>

                <span class="claim-status ${statusClass}">
                    ${claim.status}
                </span>

                <button
                    class="view-claim-btn"
                    data-claim-id="${claim.claimId}">
                    View
                </button>
            `;

            claimsList.appendChild(record);

            const viewBtn = record.querySelector(".view-claim-btn");

            viewBtn.onclick = async () => {
                try {

                    const filesResponse = await fetch(
                        `${API_BASE_URL}/api/files`
                    );

                    const filesData = await filesResponse.json();

                    const claimFile = (filesData.files || []).find(
                        file =>
                            file.key.startsWith(
                                `claims/${claim.claimId}/`
                            )
                    );

                    if (!claimFile) {
                        alert("No document uploaded for this claim.");
                        return;
                    }

                    window.open(
                        `${API_BASE_URL}/api/files/${encodeURIComponent(
                            claimFile.key
                        )}`,
                        "_blank"
                    );

                } catch (error) {

                    console.error(
                        "❌ Failed to open document:",
                        error
                    );

                    alert("Unable to open document.");
                }
            };
        });

        console.log(
            "✅ Claims loaded from backend:",
            data.claims
        );

    } catch (error) {

        console.error(
            "❌ Failed to load claims:",
            error
        );
    }
}

loadClaimsFromBackend();
// ================= UPDATE CLAIM COUNTERS =================

// =========================
// UPDATE CLAIM COUNTERS
// =========================

async function updateClaimCounters() {
    try {
        const response = await fetch(
            `${API_BASE_URL}/api/claims`
        );

        const data = await response.json();

        if (!data.success) {
            throw new Error("Failed to fetch claims");
        }

        const claims = data.claims || [];

        const total = claims.length;

        const pending = claims.filter(
            claim =>
                String(claim.status).toLowerCase() === "pending"
        ).length;

        const approved = claims.filter(
            claim =>
                String(claim.status).toLowerCase() === "approved"
        ).length;

        const rejected = claims.filter(
            claim =>
                String(claim.status).toLowerCase() === "rejected"
        ).length;


        // =========================
        // CLAIMS PAGE COUNTERS
        // =========================

        const counters = document.querySelectorAll(
            ".claims-summary .claim-card strong"
        );

        if (counters.length >= 4) {
            counters[0].textContent = total;
            counters[1].textContent = pending;
            counters[2].textContent = approved;
            counters[3].textContent = rejected;
        }


        // =========================
        // DASHBOARD TOTAL CLAIMS
        // =========================

        const dashboardCards = document.querySelectorAll(
            ".stats-grid .stat-card"
        );

        if (dashboardCards.length >= 4) {

            const dashboardClaimCard =
                dashboardCards[3];

            const dashboardValue =
                dashboardClaimCard.querySelector(
                    ".stat-value"
                );

            const dashboardResolved =
                dashboardClaimCard.querySelector(
                    ".stat-change.claim"
                );

            const dashboardPending =
                dashboardClaimCard.querySelector(
                    ".stat-footer span:last-child"
                );


            if (dashboardValue) {
                dashboardValue.textContent = total;
            }

            if (dashboardResolved) {
                dashboardResolved.textContent =
                    `${approved} resolved`;
            }

            if (dashboardPending) {
                dashboardPending.textContent =
                    `${pending} pending`;
            }
        }


        console.log(
            "✅ Claim counters updated:",
            {
                total,
                pending,
                approved,
                rejected
            }
        );

    } catch (error) {

        console.error(
            "❌ Failed to update claim counters:",
            error
        );
    }
}


// Run automatically when page loads
updateClaimCounters();
// =============================
// LOAD DASHBOARD PRODUCTS
// =============================

// ======================================================
// CLAIMVAULT - MASTER PRODUCT DATA SYNC
// Dashboard + Warranty + Category + My Products
// ======================================================

async function loadAllProductData() {

    try {

        // -----------------------------------------------
        // 1. GET PRODUCTS FROM BACKEND
        // -----------------------------------------------

        const response = await fetch(
            `${API_BASE_URL}/api/products`
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
            throw new Error("Failed to load products");
        }

        const products = data.products || [];

        // -----------------------------------------------
        // 2. DATE CALCULATION
        // -----------------------------------------------

        const today = new Date();

        today.setHours(0, 0, 0, 0);


        function getDaysLeft(product) {

            const expiry = new Date(
                product.warrantyEndDate
            );

            expiry.setHours(0, 0, 0, 0);

            return Math.ceil(
                (expiry - today) /
                (1000 * 60 * 60 * 24)
            );
        }


        function getStatus(product) {

            const daysLeft = getDaysLeft(product);

            if (daysLeft < 0) {
                return "Expired";
            }

            if (daysLeft <= 7) {
                return "Near Expiry";
            }

            if (daysLeft <= 30) {
                return "Expiring Soon";
            }

            return "Active";
        }


        function formatDate(dateString) {

            if (!dateString) {
                return "-";
            }

            const date = new Date(dateString);

            return date.toLocaleDateString(
                "en-GB",
                {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                }
            );
        }


        function getProductIcon(category) {

            const value =
                String(category || "")
                    .toLowerCase();

            if (value.includes("audio")) {
                return "🎧";
            }

            if (
                value.includes("laptop") ||
                value.includes("computer")
            ) {
                return "💻";
            }

            if (
                value.includes("phone") ||
                value.includes("smartphone")
            ) {
                return "📱";
            }

            return "📦";
        }


        // -----------------------------------------------
        // 3. STATUS COUNTS
        // -----------------------------------------------

        const totalProducts =
            products.length;

        const activeProducts =
            products.filter(
                p => getStatus(p) === "Active"
            );

        const expiringProducts =
            products.filter(
                p => getStatus(p) === "Expiring Soon"
            );

        const nearExpiryProducts =
            products.filter(
                p => getStatus(p) === "Near Expiry"
            );

        const expiredProducts =
            products.filter(
                p => getStatus(p) === "Expired"
            );


        // -----------------------------------------------
        // 4. DASHBOARD STAT CARDS
        // -----------------------------------------------

        const dashboardCards =
            document.querySelectorAll(
                ".stats-grid .stat-card"
            );


        // Total Products
        if (dashboardCards[0]) {

            const value =
                dashboardCards[0]
                    .querySelector(".stat-value");

            if (value) {
                value.textContent =
                    totalProducts;
            }
        }


        // Active Warranties
        if (dashboardCards[1]) {

            const value =
                dashboardCards[1]
                    .querySelector(".stat-value");

            const change =
                dashboardCards[1]
                    .querySelector(".stat-change");

            if (value) {
                value.textContent =
                    activeProducts.length;
            }

            if (change) {

                const percentage =
                    totalProducts > 0
                        ? Math.round(
                            (
                                activeProducts.length /
                                totalProducts
                            ) * 100
                        )
                        : 0;

                change.textContent =
                    `${percentage}%`;
            }
        }


        // Expiring Soon
        if (dashboardCards[2]) {

            const value =
                dashboardCards[2]
                    .querySelector(".stat-value");

            if (value) {
                value.textContent =
                    expiringProducts.length +
                    nearExpiryProducts.length;
            }
        }


        // -----------------------------------------------
// 5. WARRANTY STATUS
// -----------------------------------------------

const warrantyCard =
    document.querySelector(
        "#warrantiesPage .warranty-status-card"
    );

if (warrantyCard) {

    const rows = warrantyCard.querySelectorAll(
        ".warranty-row"
    );

    // TOTAL PRODUCTS
    const total = products.length;

    // -----------------------------
    // ACTIVE
    // -----------------------------

    if (rows[0]) {

        const number = rows[0].querySelector(
            ".warranty-row-top strong"
        );

        const progress = rows[0].querySelector(
            ".progress-fill"
        );

        if (number) {
            number.textContent =
                activeProducts.length;
        }

        if (progress) {

            const percent =
                total > 0
                    ? (activeProducts.length / total) * 100
                    : 0;

            progress.style.width =
                `${percent}%`;
        }
    }


    // -----------------------------
    // EXPIRING SOON
    // -----------------------------

    if (rows[1]) {

        const number = rows[1].querySelector(
            ".warranty-row-top strong"
        );

        const progress = rows[1].querySelector(
            ".progress-fill"
        );

        if (number) {
            number.textContent =
                expiringProducts.length;
        }

        if (progress) {

            const percent =
                total > 0
                    ? (expiringProducts.length / total) * 100
                    : 0;

            progress.style.width =
                `${percent}%`;
        }
    }


    // -----------------------------
    // NEAR EXPIRY
    // -----------------------------

    if (rows[2]) {

        const number = rows[2].querySelector(
            ".warranty-row-top strong"
        );

        const progress = rows[2].querySelector(
            ".progress-fill"
        );

        if (number) {
            number.textContent =
                nearExpiryProducts.length;
        }

        if (progress) {

            const percent =
                total > 0
                    ? (nearExpiryProducts.length / total) * 100
                    : 0;

            progress.style.width =
                `${percent}%`;
        }
    }

    console.log("✅ Warranty Status updated:", {
        total: total,
        active: activeProducts.length,
        expiringSoon: expiringProducts.length,
        nearExpiry: nearExpiryProducts.length,
        expired: expiredProducts.length
    });
}

        // -----------------------------------------------
        // 6. OLDEST / CLOSEST TO EXPIRY PRODUCT
        // -----------------------------------------------

        const oldestCard =
            document.querySelector(
                ".oldest-product-card"
            );


        if (oldestCard && products.length > 0) {

            const closestProduct =
                [...products]
                    .sort(
                        (a, b) =>
                            new Date(a.warrantyEndDate) -
                            new Date(b.warrantyEndDate)
                    )[0];


            const daysLeft =
                getDaysLeft(
                    closestProduct
                );


            const badge =
                oldestCard.querySelector(
                    ".oldest-badge"
                );

            const image =
                oldestCard.querySelector(
                    ".oldest-image"
                );

            const name =
                oldestCard.querySelector(
                    ".oldest-info h3"
                );

            const category =
                oldestCard.querySelector(
                    ".oldest-info > span"
                );

            const meta =
                oldestCard.querySelectorAll(
                    ".oldest-meta strong"
                );


            if (badge) {

                badge.textContent =
                    daysLeft >= 0
                        ? `${daysLeft} days left`
                        : "Expired";
            }


            if (image) {

                image.textContent =
                    getProductIcon(
                        closestProduct.category
                    );
            }


            if (name) {

                name.textContent =
                    closestProduct.productName;
            }


            if (category) {

                category.textContent =
                    closestProduct.category ||
                    "Other";
            }


            if (meta[0]) {

                meta[0].textContent =
                    formatDate(
                        closestProduct.purchaseDate
                    );
            }


            if (meta[1]) {

                meta[1].textContent =
                    formatDate(
                        closestProduct.warrantyEndDate
                    );
            }

        }


        // -----------------------------------------------
        // 7. PRODUCTS BY CATEGORY
        // -----------------------------------------------

        const categoryCard =
            document.querySelector(
                ".category-card"
            );


        if (categoryCard) {

            const categoryCounts = {};


            products.forEach(product => {

                const category =
                    product.category ||
                    "Others";

                categoryCounts[category] =
                    (categoryCounts[category] || 0) + 1;

            });


            // Total in donut center
            const donutTotal =
                categoryCard.querySelector(
                    ".donut-center strong"
                );

            if (donutTotal) {

                donutTotal.textContent =
                    totalProducts;
            }


            // Existing category items
            const categoryItems =
                categoryCard.querySelectorAll(
                    ".category-item"
                );


            categoryItems.forEach(item => {

                const label =
                    item.querySelector(
                        "span:not(.category-dot)"
                    );

                const number =
                    item.querySelector(
                        "strong"
                    );


                if (!label || !number) {
                    return;
                }


                const categoryName =
                    label.textContent.trim();


                let count = 0;


                if (
                    categoryName ===
                    "Others"
                ) {

                    const knownCategories = [
                        "Electronics",
                        "Smartphone",
                        "Laptop",
                        "Audio"
                    ];


                    count =
                        products.filter(product => {

                            return !knownCategories
                                .some(
                                    known =>
                                        String(
                                            product.category
                                        ).toLowerCase() ===
                                        known.toLowerCase()
                                );

                        }).length;

                }
                else {

                    count =
                        products.filter(product => {

                            return String(
                                product.category || ""
                            ).toLowerCase() ===
                            categoryName.toLowerCase();

                        }).length;
                }


                number.textContent =
                    count;
            });


            // -------------------------------------------
            // DONUT CIRCLE
            // -------------------------------------------

            const donut =
                categoryCard.querySelector(
                    ".donut-chart"
                );


            if (donut) {

                const categories = [
                    "Electronics",
                    "Smartphone",
                    "Laptop",
                    "Audio"
                ];


                const others =
                    products.filter(product => {

                        return !categories
                            .some(
                                category =>
                                    String(
                                        product.category
                                    ).toLowerCase() ===
                                    category.toLowerCase()
                            );

                    }).length;


                const counts = [
                    categoryCounts["Electronics"] || 0,
                    categoryCounts["Smartphone"] || 0,
                    categoryCounts["Laptop"] || 0,
                    categoryCounts["Audio"] || 0,
                    others
                ];


                if (totalProducts > 0) {

                    const degrees =
                        counts.map(
                            count =>
                                (
                                    count /
                                    totalProducts
                                ) * 360
                        );


                    let start = 0;


                    const segments = [];


                    degrees.forEach(
                        degree => {

                            const end =
                                start + degree;


                            segments.push(
                                `${getCategoryColor(
                                    segments.length
                                )} ${start}deg ${end}deg`
                            );


                            start = end;

                        }
                    );


                    donut.style.background =
                        `conic-gradient(${segments.join(",")})`;

                }
                else {

                    donut.style.background =
                        "conic-gradient(#e5e7eb 0deg 360deg)";
                }

            }

        }


        // -----------------------------------------------
        // 8. DASHBOARD RECENT PRODUCTS
        // -----------------------------------------------

        const productsGrid =
            document.querySelector(
                ".products-grid"
            );


        if (productsGrid) {

            productsGrid.innerHTML = "";


            const recentProducts =
                [...products]
                    .sort(
                        (a, b) =>
                            new Date(b.createdAt) -
                            new Date(a.createdAt)
                    )
                    .slice(0, 4);


            recentProducts.forEach(
                product => {

                    const card =
                        document.createElement(
                            "article"
                        );

                    card.className =
                        "product-card";


                    const status =
                        getStatus(product);

                    const daysLeft =
                        getDaysLeft(product);


                    let statusClass =
                        "active-status";


                    if (
                        status ===
                        "Expiring Soon"
                    ) {

                        statusClass =
                            "warning-status";

                    }
                    else if (
                        status ===
                        "Near Expiry"
                    ) {

                        statusClass =
                            "warning-status";

                    }
                    else if (
                        status ===
                        "Expired"
                    ) {

                        statusClass =
                            "expired-status";
                    }


                    card.innerHTML = `

                        <div class="product-image">
                            <span>
                                ${getProductIcon(
                                    product.category
                                )}
                            </span>
                        </div>

                        <div class="product-info">

                            <h3>
                                ${product.productName}
                            </h3>

                            <span>
                                ${product.category || "Other"}
                            </span>

                        </div>

                        <div class="product-bottom">

                            <span class="product-status ${statusClass}">
                                ${status}
                            </span>

                            <span class="product-days">
                                ${
                                    daysLeft >= 0
                                        ? `${daysLeft} days left`
                                        : "Expired"
                                }
                            </span>

                        </div>
                    `;


                    productsGrid.appendChild(
                        card
                    );

                }
            );

        }


        // -----------------------------------------------
        // 9. MY PRODUCTS SUMMARY
        // -----------------------------------------------

        const summaryCards =
            document.querySelectorAll(
                ".product-summary-grid .summary-card"
            );


        if (summaryCards.length >= 4) {

            summaryCards[0]
                .querySelector("strong")
                .textContent =
                totalProducts;

            summaryCards[1]
                .querySelector("strong")
                .textContent =
                activeProducts.length;

            summaryCards[2]
                .querySelector("strong")
                .textContent =
                expiringProducts.length +
                nearExpiryProducts.length;

            summaryCards[3]
                .querySelector("strong")
                .textContent =
                expiredProducts.length;
        }


        // -----------------------------------------------
        // 10. ALL PRODUCTS TABLE
        // -----------------------------------------------

        const tableBody =
            document.querySelector(
                ".products-table tbody"
            );


        if (tableBody) {

            tableBody.innerHTML = "";


            products.forEach(product => {

                const row =
                    document.createElement("tr");


                const status =
                    getStatus(product);


                let statusClass =
                    "active-status";


                if (
                    status ===
                    "Expiring Soon"
                ) {

                    statusClass =
                        "expiring-status";

                }
                else if (
                    status ===
                    "Near Expiry"
                ) {

                    statusClass =
                        "near-status";

                }
                else if (
                    status ===
                    "Expired"
                ) {

                    statusClass =
                        "expired-status";
                }


                row.innerHTML = `

                    <td>

                        <div class="table-product">

                            <div class="table-product-image">
                                ${getProductIcon(
                                    product.category
                                )}
                            </div>

                            <div>

                                <strong>
                                    ${product.productName}
                                </strong>

                                <span>
                                    ${product.description || ""}
                                </span>

                            </div>

                        </div>

                    </td>


                    <td>
                        ${product.category || "Other"}
                    </td>


                    <td>
                        ${formatDate(
                            product.purchaseDate
                        )}
                    </td>


                    <td>
                        ${formatDate(
                            product.warrantyEndDate
                        )}
                    </td>


                    <td>

                        <span class="table-status ${statusClass}">
                            ${status}
                        </span>

                    </td>


                    <td>

                        <button
                            class="action-btn"
                            type="button"
                            onclick="alert('Product ID: ${product.productId}')"
                        >
                            •••
                        </button>

                    </td>

                `;


                tableBody.appendChild(
                    row
                );

            });

        }


        // -----------------------------------------------
        // 11. MY PRODUCTS CARDS
        // -----------------------------------------------

        const myProductsGrid =
            document.querySelector(
                ".my-products-grid"
            );


        if (myProductsGrid) {

            myProductsGrid.innerHTML = "";


            products.forEach(product => {

                const card =
                    document.createElement(
                        "article"
                    );

                card.className =
                    "my-product-card";


                const status =
                    getStatus(product);


                let statusClass =
                    "active-status";


                if (
                    status ===
                    "Expiring Soon"
                ) {

                    statusClass =
                        "expiring-status";

                }
                else if (
                    status ===
                    "Near Expiry"
                ) {

                    statusClass =
                        "near-status";

                }
                else if (
                    status ===
                    "Expired"
                ) {

                    statusClass =
                        "expired-status";
                }


                card.innerHTML = `

                    <div class="my-product-image">

                        ${getProductIcon(
                            product.category
                        )}

                    </div>


                    <div class="my-product-details">

                        <h3>
                            ${product.productName}
                        </h3>


                        <span>
                            ${product.category || "Other"}
                        </span>


                        <div class="product-date">

                            Warranty until
                            ${formatDate(
                                product.warrantyEndDate
                            )}

                        </div>

                    </div>


                    <div class="my-product-footer">

                        <span class="table-status ${statusClass}">
                            ${status}
                        </span>


                        <button
                            class="product-view-btn"
                            type="button"
                            onclick="openWarrantyDetails('${product.productId}')"
                        >
                            View
                        </button>

                    </div>

                `;
                


                myProductsGrid.appendChild(
                    card
                );

            });

        }

// ======================================================
// WARRANTY PAGE - TOP CARDS + WARRANTY RECORDS
// ======================================================


// ------------------------------------------------------
// 1. TOP WARRANTY SUMMARY CARDS
// ------------------------------------------------------

const warrantySummary =
    document.querySelector(
        "#warrantiesPage .warranty-summary"
    );

if (warrantySummary) {

    const warrantyCards =
        warrantySummary.querySelectorAll(
            ".warranty-card"
        );

    // Active
    if (warrantyCards[0]) {

        const number =
            warrantyCards[0].querySelector("strong");

        if (number) {
            number.textContent =
                activeProducts.length;
        }
    }


    // Expiring Soon
    if (warrantyCards[1]) {

        const number =
            warrantyCards[1].querySelector("strong");

        if (number) {
            number.textContent =
                expiringProducts.length;
        }
    }


    // Expired
    if (warrantyCards[2]) {

        const number =
            warrantyCards[2].querySelector("strong");

        if (number) {
            number.textContent =
                expiredProducts.length;
        }
    }


    console.log(
        "✅ Warranty summary updated:",
        {
            active: activeProducts.length,
            expiringSoon: expiringProducts.length,
            expired: expiredProducts.length
        }
    );
}



// ------------------------------------------------------
// 2. WARRANTY RECORDS
// ------------------------------------------------------

const warrantyRecordsList =
    document.querySelector(
        "#warrantiesPage .warranty-records-list"
    );

if (warrantyRecordsList) {

    // Remove old hardcoded records
    warrantyRecordsList.innerHTML = "";


    // Create records from backend
    products.forEach(product => {

        const daysLeft =
            getDaysLeft(product);

        const status =
            getStatus(product);


        // Status class
        let statusClass =
            "active-status";

        if (status === "Expiring Soon") {

            statusClass =
                "expiring-status";

        } else if (status === "Near Expiry") {

            statusClass =
                "near-status";

        } else if (status === "Expired") {

            statusClass =
                "expired-status";

        }


        // Days text
        let daysText;

        if (daysLeft < 0) {

            daysText =
                `${Math.abs(daysLeft)} days ago`;

        } else if (daysLeft === 0) {

            daysText =
                "Expires today";

        } else {

            daysText =
                `${daysLeft} days left`;

        }


        // Create warranty record
        const record =
            document.createElement("div");

        record.className =
            "warranty-record";


        record.innerHTML = `

            <div class="warranty-product-info">

                <div class="warranty-product-icon">

                    ${getProductIcon(
                        product.category
                    )}

                </div>


                <div>

                    <h3>
                        ${product.productName || "Unnamed Product"}
                    </h3>

                    <p>
                        ${product.category || "Other"}
                        • Purchase:
                        ${formatDate(
                            product.purchaseDate
                        )}
                    </p>

                </div>

            </div>


            <div class="warranty-date">

                <span>
                    Warranty Expiry
                </span>

                <strong>
                    ${formatDate(
                        product.warrantyEndDate
                    )}
                </strong>

                <small>
                    ${daysText}
                </small>

            </div>


            <span class="warranty-status ${statusClass}">
                ${status}
            </span>


            <button
                class="view-warranty-btn"
                type="button"
            >
                View
            </button>

        `;


        // View button
        // View button



        warrantyRecordsList.appendChild(
            record
        );

    });


    console.log(
        "✅ Warranty records updated:",
        products.length
    );

}     
        // -----------------------------------------------
        // 12. LOG
        // -----------------------------------------------

        console.log(
            "✅ ALL PRODUCT DATA SYNCED",
            {
                total: totalProducts,
                active: activeProducts.length,
                expiring: expiringProducts.length,
                nearExpiry:
                    nearExpiryProducts.length,
                expired:
                    expiredProducts.length
            }
        );


    }
    catch (error) {

        console.error(
            "❌ Product sync failed:",
            error
        );

    }

}


// ======================================================
// CATEGORY DONUT COLORS
// ======================================================

function getCategoryColor(index) {

    const colors = [
        "#3b82f6",
        "#22c55e",
        "#f59e0b",
        "#8b5cf6",
        "#94a3b8"
    ];

    return colors[
        index % colors.length
    ];
}


// ======================================================
// RUN AUTOMATICALLY
// ======================================================

loadAllProductData();
// ======================================================
// CLAIMVAULT WARRANTY VIEW MODAL
// PRODUCT IMAGE + DETAILS + DAYS LEFT
// ======================================================

document.addEventListener(
    "click",
    async function(event) {

        const viewButton =
            event.target.closest(".view-warranty-btn");

        if (!viewButton) {
            return;
        }

        // Stop old alert / old click handler
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();


        try {

            // ------------------------------------------
            // GET PRODUCT DATA
            // ------------------------------------------

            const productsResponse =
                await fetch(
                    `${API_BASE_URL}/api/products`
                );

            const productsData =
                await productsResponse.json();

            if (
                !productsResponse.ok ||
                !productsData.success
            ) {
                throw new Error(
                    "Unable to load product details"
                );
            }


            const products =
                productsData.products || [];


            // ------------------------------------------
            // FIND CLICKED WARRANTY RECORD
            // ------------------------------------------

            const record =
                viewButton.closest(
                    ".warranty-record"
                );

            if (!record) {
                throw new Error(
                    "Warranty record not found"
                );
            }


            const nameElement =
                record.querySelector(
                    ".warranty-product-info h3"
                );

            const categoryElement =
                record.querySelector(
                    ".warranty-product-info p"
                );


            const productName =
                nameElement
                    ? nameElement.textContent.trim()
                    : "";


            const categoryText =
                categoryElement
                    ? categoryElement.textContent.trim()
                    : "";


            const product =
                products.find(
                    item => {

                        const sameName =
                            String(
                                item.productName || ""
                            ).trim().toLowerCase()
                            ===
                            productName.toLowerCase();


                        const sameCategory =
                            categoryText
                                .toLowerCase()
                                .includes(
                                    String(
                                        item.category || ""
                                    ).toLowerCase()
                                );


                        return (
                            sameName &&
                            sameCategory
                        );
                    }
                );


            if (!product) {
                throw new Error(
                    "Product details not found"
                );
            }


            // ------------------------------------------
            // DATE / STATUS
            // ------------------------------------------

            const expiry =
                new Date(
                    product.warrantyEndDate
                );

            const today =
                new Date();

            today.setHours(
                0,
                0,
                0,
                0
            );

            expiry.setHours(
                0,
                0,
                0,
                0
            );


            const daysLeft =
                Math.ceil(
                    (
                        expiry - today
                    ) /
                    (
                        1000 *
                        60 *
                        60 *
                        24
                    )
                );


            let daysText;

            if (daysLeft < 0) {

                daysText =
                    `${Math.abs(daysLeft)} days ago`;

            }
            else if (daysLeft === 0) {

                daysText =
                    "Expires today";

            }
            else {

                daysText =
                    `${daysLeft} days left`;

            }


            let status;

            if (daysLeft < 0) {

                status = "Expired";

            }
            else if (daysLeft <= 7) {

                status = "Near Expiry";

            }
            else if (daysLeft <= 30) {

                status = "Expiring Soon";

            }
            else {

                status = "Active";

            }


            // ------------------------------------------
            // FIND PRODUCT IMAGE FROM S3
            // ------------------------------------------

            let imageUrl = "";


            try {

                const filesResponse =
                    await fetch(
                        `${API_BASE_URL}/api/files`
                    );

                const filesData =
                    await filesResponse.json();


                const productFiles =
                    (
                        filesData.files || []
                    ).filter(
                        file =>
                            file.key.startsWith(
                                `products/${product.productId}/`
                            )
                    );


                if (
                    productFiles.length > 0
                ) {

                    const latestFile =
                        productFiles
                            .sort(
                                (a, b) =>
                                    new Date(
                                        b.lastModified ||
                                        b.LastModified ||
                                        0
                                    ) -
                                    new Date(
                                        a.lastModified ||
                                        a.LastModified ||
                                        0
                                    )
                            )[0];


                    imageUrl =
                        `${API_BASE_URL}/api/files/${encodeURIComponent(
                            latestFile.key
                        )}`;

                }

            }
            catch (imageError) {

                console.log(
                    "Product image not found"
                );

            }


            // ------------------------------------------
            // CREATE MODAL IF NOT EXISTS
            // ------------------------------------------

            let modal =
                document.getElementById(
                    "claimvaultWarrantyModal"
                );


            if (!modal) {

                modal =
                    document.createElement(
                        "div"
                    );

                modal.id =
                    "claimvaultWarrantyModal";


                modal.innerHTML = `

                    <div
                        style="
                            position:fixed;
                            inset:0;
                            background:rgba(0,0,0,0.65);
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            z-index:999999;
                            padding:20px;
                        "
                    >

                        <div
                            style="
                                width:100%;
                                max-width:700px;
                                background:#16232d;
                                color:white;
                                border-radius:18px;
                                padding:25px;
                                box-sizing:border-box;
                                box-shadow:0 25px 70px rgba(0,0,0,0.5);
                            "
                        >

                            <div
                                style="
                                    display:flex;
                                    justify-content:space-between;
                                    align-items:center;
                                    margin-bottom:22px;
                                "
                            >

                                <h2
                                    style="
                                        margin:0;
                                        font-size:24px;
                                    "
                                >
                                    Product Details
                                </h2>


                                <button
                                    id="claimvaultWarrantyClose"
                                    type="button"
                                    style="
                                        width:35px;
                                        height:35px;
                                        border:none;
                                        border-radius:50%;
                                        background:rgba(255,255,255,0.1);
                                        color:white;
                                        font-size:22px;
                                        cursor:pointer;
                                    "
                                >
                                    ×
                                </button>

                            </div>


                            <div
                                style="
                                    display:grid;
                                    grid-template-columns:220px 1fr;
                                    gap:25px;
                                    align-items:start;
                                "
                            >

                                <div
                                    style="
                                        width:220px;
                                        height:220px;
                                        border-radius:15px;
                                        overflow:hidden;
                                        background:rgba(255,255,255,0.08);
                                        display:flex;
                                        align-items:center;
                                        justify-content:center;
                                    "
                                >

                                    <img
                                        id="claimvaultWarrantyImage"
                                        src=""
                                        alt="Product Image"
                                        style="
                                            width:100%;
                                            height:100%;
                                            object-fit:cover;
                                            display:none;
                                        "
                                    >

                                    <div
                                        id="claimvaultWarrantyPlaceholder"
                                        style="
                                            text-align:center;
                                            color:#aaa;
                                            font-size:18px;
                                        "
                                    >
                                        📦
                                        <br>
                                        Product Image
                                    </div>

                                </div>


                                <div>

                                    <h2
                                        id="claimvaultWarrantyName"
                                        style="
                                            margin:0 0 18px;
                                        "
                                    >
                                    </h2>


                                    <p>
                                        <strong>
                                            Product ID:
                                        </strong>
                                        <span
                                            id="claimvaultWarrantyId"
                                        ></span>
                                    </p>


                                    <p>
                                        <strong>
                                            Category:
                                        </strong>
                                        <span
                                            id="claimvaultWarrantyCategory"
                                        ></span>
                                    </p>


                                    <p>
                                        <strong>
                                            Purchase:
                                        </strong>
                                        <span
                                            id="claimvaultWarrantyPurchase"
                                        ></span>
                                    </p>


                                    <p>
                                        <strong>
                                            Expiry:
                                        </strong>
                                        <span
                                            id="claimvaultWarrantyExpiry"
                                        ></span>
                                    </p>


                                    <p>
                                        <strong>
                                            Days:
                                        </strong>
                                        <span
                                            id="claimvaultWarrantyDays"
                                        ></span>
                                    </p>


                                    <p>
                                        <strong>
                                            Status:
                                        </strong>
                                        <span
                                            id="claimvaultWarrantyStatus"
                                        ></span>
                                    </p>


                                    <div
                                        style="
                                            margin-top:25px;
                                            display:flex;
                                            gap:10px;
                                        "
                                    >

                                        <button
                                            id="claimvaultWarrantyDocument"
                                            type="button"
                                            style="
                                                border:none;
                                                padding:11px 16px;
                                                border-radius:8px;
                                                background:#087fdb;
                                                color:white;
                                                cursor:pointer;
                                            "
                                        >
                                            View Warranty Document
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                `;


                document.body.appendChild(
                    modal
                );


                document
                    .getElementById(
                        "claimvaultWarrantyClose"
                    )
                    .addEventListener(
                        "click",
                        function() {

                            modal.remove();

                        }
                    );


                modal
                    .firstElementChild
                    .addEventListener(
                        "click",
                        function(event) {

                            if (
                                event.target ===
                                modal.firstElementChild
                            ) {

                                modal.remove();

                            }

                        }
                    );

            }


            // ------------------------------------------
            // FILL DETAILS
            // ------------------------------------------

            document.getElementById(
                "claimvaultWarrantyName"
            ).textContent =
                product.productName ||
                "Unnamed Product";


            document.getElementById(
                "claimvaultWarrantyId"
            ).textContent =
                product.productId ||
                "-";


            document.getElementById(
                "claimvaultWarrantyCategory"
            ).textContent =
                product.category ||
                "Other";


            document.getElementById(
                "claimvaultWarrantyPurchase"
            ).textContent =
                product.purchaseDate
                    ? new Date(
                        product.purchaseDate
                    ).toLocaleDateString(
                        "en-GB",
                        {
                            day:"2-digit",
                            month:"short",
                            year:"numeric"
                        }
                    )
                    : "-";


            document.getElementById(
                "claimvaultWarrantyExpiry"
            ).textContent =
                product.warrantyEndDate
                    ? new Date(
                        product.warrantyEndDate
                    ).toLocaleDateString(
                        "en-GB",
                        {
                            day:"2-digit",
                            month:"short",
                            year:"numeric"
                        }
                    )
                    : "-";


            document.getElementById(
                "claimvaultWarrantyDays"
            ).textContent =
                daysText;


            document.getElementById(
                "claimvaultWarrantyStatus"
            ).textContent =
                status;


            // ------------------------------------------
            // PRODUCT IMAGE
            // ------------------------------------------

            const image =
                document.getElementById(
                    "claimvaultWarrantyImage"
                );

            const placeholder =
                document.getElementById(
                    "claimvaultWarrantyPlaceholder"
                );


            if (imageUrl) {

                image.src =
                    imageUrl;

                image.onload =
                    function() {

                        image.style.display =
                            "block";

                        placeholder.style.display =
                            "none";

                    };


                image.onerror =
                    function() {

                        image.style.display =
                            "none";

                        placeholder.style.display =
                            "block";

                    };

            }
            else {

                image.style.display =
                    "none";

                placeholder.style.display =
                    "block";

            }


            // ------------------------------------------
            // WARRANTY DOCUMENT
            // ------------------------------------------

            const documentButton =
                document.getElementById(
                    "claimvaultWarrantyDocument"
                );


            documentButton.onclick =
                async function() {

                    try {

                        const filesResponse =
                            await fetch(
                                `${API_BASE_URL}/api/files`
                            );

                        const filesData =
                            await filesResponse.json();


                        const warrantyFile =
                            (
                                filesData.files || []
                            ).find(
                                file =>
                                    file.key.startsWith(
                                        `invoices/${product.productId}/`
                                ) 
                            );


                        if (!warrantyFile) {

                            alert(
                                "No warranty document uploaded for this product."
                            );

                            return;

                        }


                        window.open(
                            `${API_BASE_URL}/api/files/${encodeURIComponent(
                                warrantyFile.key
                            )}`,
                            "_blank"
                        );

                    }
                    catch (error) {

                        alert(
                            "Unable to open warranty document."
                        );

                    }

                };


            // ------------------------------------------
            // SHOW MODAL
            // ------------------------------------------

            modal.style.display =
                "block";


        }

        catch (error) {

            console.error(
                "❌ Warranty View Error:",
                error
            );

            alert(
                "Unable to open product details.\n\n" +
                error.message
            );

        }

    },
    true
);
// ======================================================
// MY PRODUCTS VIEW - SAME WARRANTY DETAILS POPUP
// ======================================================

async function openWarrantyDetails(productId) {

    try {

        const response = await fetch(
            `${API_BASE_URL}/api/products/${encodeURIComponent(productId)}`
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
            throw new Error(
                data.message || "Product not found"
            );
        }

        const product = data.product;

        // ==============================
        // GET POPUP ELEMENTS
        // ==============================

        const modal =
            document.getElementById(
                "warrantyDetailsModal"
            );

        const image =
            document.getElementById(
                "warrantyDetailsImage"
            );

        const placeholder =
            document.getElementById(
                "warrantyDetailsPlaceholder"
            );

        if (!modal) {
            throw new Error(
                "Warranty details popup not found"
            );
        }

        // ==============================
        // CALCULATE DAYS LEFT
        // ==============================

        const expiry =
            new Date(product.warrantyEndDate);

        const today =
            new Date();

        today.setHours(0, 0, 0, 0);
        expiry.setHours(0, 0, 0, 0);

        const daysLeft =
            Math.ceil(
                (expiry - today) /
                (1000 * 60 * 60 * 24)
            );

        // ==============================
        // STATUS
        // ==============================

        let status;

        if (daysLeft < 0) {

            status = "Expired";

        }
        else if (daysLeft <= 7) {

            status = "Near Expiry";

        }
        else if (daysLeft <= 30) {

            status = "Expiring Soon";

        }
        else {

            status = "Active";

        }

        // ==============================
        // DAYS TEXT
        // ==============================

        let daysText;

        if (daysLeft < 0) {

            daysText =
                `${Math.abs(daysLeft)} days ago`;

        }
        else if (daysLeft === 0) {

            daysText =
                "Expires today";

        }
        else {

            daysText =
                `${daysLeft} days left`;

        }

        // ==============================
        // SAFE TEXT FUNCTION
        // ==============================

        function setText(id, value) {

            const element =
                document.getElementById(id);

            if (element) {
                element.textContent =
                    value;
            }

        }

        // ==============================
        // PRODUCT DETAILS
        // ==============================

        setText(
            "warrantyDetailsName",
            product.productName ||
            "Unnamed Product"
        );

        setText(
            "warrantyDetailsId",
            product.productId ||
            "-"
        );

        setText(
            "warrantyDetailsCategory",
            product.category ||
            "Other"
        );

        setText(
    "warrantyDetailsPurchase",
    new Date(product.purchaseDate).toLocaleDateString(
        "en-GB",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    )
);

        setText(
    "warrantyDetailsExpiry",
    new Date(product.warrantyEndDate).toLocaleDateString(
        "en-GB",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    )
);

        setText(
            "warrantyDetailsDays",
            daysText
        );

        setText(
            "warrantyDetailsStatus",
            status
        );

        // ==============================
        // PRODUCT IMAGE
        // ==============================

        if (image) {

            image.src =
                `${API_BASE_URL}/api/files/product-image/${encodeURIComponent(
                    product.productId
                )}`;

            image.onload =
                function() {

                    image.style.display =
                        "block";

                    if (placeholder) {

                        placeholder.style.display =
                            "none";

                    }

                };

            image.onerror =
                function() {

                    image.style.display =
                        "none";

                    if (placeholder) {

                        placeholder.style.display =
                            "block";

                    }

                };

        }

        // ==============================
        // OPEN POPUP
        // ==============================

        modal.style.display =
            "flex";

    }
    catch (error) {

        console.error(
            "❌ My Product View Error:",
            error
        );

        alert(
            "Unable to open product details.\n\n" +
            error.message
        );

    }

}
