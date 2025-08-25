# DOCQET – A Unified Doctor Appointment System

A **web-based doctor appointment system** built with the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.

DOCQET modernizes healthcare scheduling by providing secure, role-based access for patients, doctors, and administrators. It enables seamless appointment booking, payment integration, and efficient management of healthcare resources.

<a href="[https://your-link.com](https://github.com/islamanika214/docqet-a-unified-doctor-appointment-system/tree/main/Screenshots)">
  <img src="https://img.shields.io/badge/View%20Screenshots-blue?style=for-the-badge" alt="button"/>
</a>


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [System Architecture](#system-architecture)
- [Use Cases](#use-cases)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Non-Functional Requirements](#non-functional-requirements)
- [Future Enhancements](#future-enhancements)
- [Contributors](#contributors)
- [License](#license)


## Introduction

Healthcare scheduling is often inefficient when handled through manual systems.

DOCQET addresses these issues by:

- Minimizing delays and scheduling conflicts
- Offering role-based access to patients, doctors, and administrators
- Supporting secure online payments
- Ensuring transparency and efficiency in healthcare delivery


## Features

- **User Authentication**: Secure login and registration for patients, doctors, and admins
- **Patient Profile Management**: Update personal and medical details
- **Doctor Profile Management**: Manage specialization, consultation fees, and availability
- **Appointment Booking**: Patients can search by specialization/location and book slots
- **Appointment Management**: Rescheduling, cancellations, and confirmations
- **Payment Integration**: Online payment via Stripe/PayPal APIs
- **Appointment History**: View past and upcoming consultations
- **Admin Dashboard**: Add, approve, or remove doctors


## System Architecture

- **Frontend**: React.js – intuitive and mobile-responsive UI
- **Backend**: Node.js + Express.js – REST APIs for authentication, scheduling, payments
- **Database**: MongoDB – secure storage of patient, doctor, and appointment data
- **Payments**: Stripe/PayPal integration for online transactions
- **Security**: Role-based access control and data encryption


## Use Cases

- **Patients**: Register, update profile, search doctors, book appointments, pay online, manage history
- **Doctors**: Register, manage profile, view/cancel appointments, track consultation history
- **Admins**: Manage doctors, oversee operations, ensure smooth workflow


## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment APIs**: Stripe / PayPal


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/docqet.git
   cd docqet
   ```

2. Install dependencies:

   ```bash
   npm install
   cd client && npm install
   ```

3. Configure environment variables in `.env`:

   ```
   MONGO_URI=<your_mongo_db_uri>
   JWT_SECRET=<your_secret_key>
   STRIPE_KEY=<your_stripe_key>
   ```

4. Start the backend server:

   ```bash
   npm run server
   ```

5. Start the frontend:

   ```bash
   cd client
   npm start
   ```


## Usage

- Open `http://localhost:3000` in your browser
- Register as a **Patient**, **Doctor**, or **Admin**
- Use the role-specific dashboards to manage appointments and profiles


## Non-Functional Requirements

- Handles **500+ concurrent users** without performance issues
- Encrypted sensitive data (passwords, payments)
- Fully responsive and available 24/7
- Scalable, reliable, and modular codebase


## Future Enhancements

- AI-powered doctor recommendations
- Multi-language support
- Telemedicine video consultations
- Integration with hospital management systems


## Contributors

- **Anika Islam** – Independent University, Bangladesh


## License

This project is licensed under the **MIT License**.
