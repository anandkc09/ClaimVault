# ClaimVault – Warranty Manager

ClaimVault is a web-based warranty management system that helps users manage their products, warranty information, invoices, and warranty claims in one place.

## Problem

People often forget warranty expiry dates or lose product bills and warranty documents. Because of this, they may miss the warranty period or face difficulty while making a claim.

## Solution

ClaimVault provides a single dashboard where users can add products, track warranty status, store product-related documents, and manage warranty claims.

## Features

- Add and manage products
- Track warranty expiry dates
- View active and expiring warranties
- Upload product images
- Upload invoices and warranty documents
- Submit warranty claims
- View claim records and status
- Dashboard with warranty and claim information
- Backend REST APIs
- Cloud file storage using Amazon S3

## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- REST API

### Cloud & Deployment
- AWS EC2 – Backend hosting
- AWS Amplify – Frontend hosting
- Amazon S3 – File storage
- AWS Elastic IP – Public backend address

## How It Works

1. User adds a product and its warranty details.
2. Product information is sent to the backend.
3. Product images and documents are stored using Amazon S3.
4. ClaimVault calculates and displays warranty information.
5. Users can submit and view warranty claims.
6. The frontend communicates with the Node.js backend through REST APIs.

## Project Architecture

User
↓
AWS Amplify
↓
ClaimVault Frontend
↓
Node.js + Express Backend
↓
Amazon S3
↓
Product Images / Invoices / Documents
<img width="1536" height="1024" alt="ClaimVault Warranty Manager Architecture (1)" src="https://github.com/user-attachments/assets/304d761a-4990-4d02-9eaf-0472de9e0d84" />

## Deployment

The ClaimVault frontend is deployed using AWS Amplify.

The Node.js backend is deployed on an AWS EC2 instance with an Elastic IP.

Amazon S3 is used for storing product images, invoices, and claim-related documents.

## Project Status

The main features of ClaimVault have been implemented and the application has been deployed on AWS.

## Team Contributions

### Frontend
- Dashboard UI
- Product interface
- Warranty status display
- Claims interface
- Frontend-backend integration

### Backend
- Node.js and Express server
- Product APIs
- Claims APIs
- File upload and delete APIs
- Amazon S3 integration
- AWS EC2 deployment

## Future Improvements

- User authentication
- Email notifications before warranty expiry
- Automatic warranty reminders
- Database integration
- Production HTTPS
- Improved document management

## Conclusion

ClaimVault makes warranty management easier by keeping product information, warranty details, invoices, and claims in one place. The application is deployed using AWS services and can be further improved for real-world use.

