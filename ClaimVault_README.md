# ClaimVault

## Warranty Management System

ClaimVault is a simple web-based warranty management system made to help users keep track of their products, warranty details, bills and expiry dates in one place.

The main idea is simple: instead of searching through old bills and documents when a product has a problem, the user can save the product and warranty information in ClaimVault and quickly check it when needed.

## What ClaimVault Does

- Add and manage product details
- Store warranty and claim information
- Upload product images
- Upload and manage bills/invoices
- Store files securely using AWS S3
- Show products and their warranty status
- Help users notice warranties that are close to expiry
- Connect the frontend with the backend through APIs

## Technology Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- REST APIs
- Multer

### Cloud Storage
- AWS S3

## Project Structure

```text
ClaimVault/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── backend/
    ├── server.js
    ├── routes/
    ├── controllers/
    ├── uploads/
    └── .env
```

## How It Works

1. The user adds a product and its warranty details.
2. Product information is sent from the frontend to the backend.
3. The backend handles the request using APIs.
4. Bills, invoices and images can be uploaded to AWS S3.
5. The stored information can be viewed from the ClaimVault dashboard.
6. Warranty information helps the user keep track of expiry and claims.

## Today's Project Update — 6 October 2026

Today we worked mainly on connecting and testing the ClaimVault frontend and backend.

The backend server is running successfully and the API connection has been tested. Product and claim related APIs are working, and AWS S3 integration is being used for file storage.

We also worked on connecting the frontend with the backend so that the dashboard can communicate with the APIs instead of using only static data.

The main remaining work is final testing, especially checking the invoice upload properly, handling small errors, and making sure the complete flow works smoothly from the frontend to the backend.

### Team Work

**Frontend Worker — 1st Member**
- Worked on the dashboard and user interface
- Product display and frontend interactions
- Frontend-to-backend connection

**Backend Worker — 2nd Member**
- Created and tested Node.js/Express APIs
- Product and claim CRUD operations
- AWS S3 file upload/delete handling
- Product image and invoice upload routes
- Backend testing and error checking

## Current Status

- Backend: ~95% complete
- Frontend: ~90% complete
- Frontend + Backend connection: Working
- AWS S3 integration: Working
- Final testing: In progress

## Future Improvements

In the future, ClaimVault can be improved with:

- Automatic warranty expiry notifications
- Email or mobile reminders
- OCR to read information directly from bills
- Login and user authentication
- Better claim tracking
- Mobile application support

## Conclusion

ClaimVault is designed to make warranty management easier and more organized. The project combines a simple frontend, a Node.js backend and AWS cloud storage to keep important product and warranty information in one place.
