# Flable AI Server

Backend server for Flable AI with MongoDB, Google Sheets integration, and email notifications.

## Setup Instructions

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Environment Variables
Create a `.env` file in the server directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/flable-ai

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=info@flable.ai

# Google Sheets Configuration
GOOGLE_SHEET_ID=your-google-sheet-id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
```

### 3. Google Sheets Setup
1. Create a new Google Sheet
2. Go to Google Cloud Console
3. Create a new project or select existing
4. Enable Google Sheets API
5. Create a Service Account
6. Download the JSON key file
7. Add the service account email to your Google Sheet with edit permissions
8. Copy the Sheet ID from the URL
9. Add the service account email and private key to your .env file

### 4. Gmail Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Use the App Password in EMAIL_PASS (not your regular password)

### 5. MongoDB Setup
- Local: Install MongoDB locally
- Cloud: Use MongoDB Atlas and update MONGODB_URI

### 6. Run the Server
```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### Booking
- `POST /api/booking` - Submit booking form
- `GET /api/booking` - Get all bookings (admin)

### Blog
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:id` - Get single blog post
- `POST /api/blog` - Create blog post (admin)
- `PUT /api/blog/:id` - Update blog post (admin)
- `DELETE /api/blog/:id` - Delete blog post (admin)

### Contact
- `POST /api/contact` - Submit contact form

### Newsletter
- `POST /api/newsletter` - Subscribe to newsletter

### Testimonials
- `GET /api/testimonial` - Get all testimonials
- `POST /api/testimonial` - Create testimonial (admin)

## Features

- ✅ MongoDB integration
- ✅ Google Sheets integration for booking data
- ✅ Email notifications
- ✅ CORS enabled
- ✅ Security headers with Helmet
- ✅ Error handling
- ✅ Environment-based configuration
