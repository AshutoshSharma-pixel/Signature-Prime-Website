# 🏡 Signature Prime - Premium Student & Professional Housing

[![Live Site](https://img.shields.io/badge/Live-hostelsignautreprime.com-blue?style=for-the-badge&logo=vercel)](https://hostelsignautreprime.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

**Signature Prime** is a premium accommodation platform offering high-end living spaces for students and working professionals. Designed with a focus on comfort, luxury, and community, it provides a seamless experience for finding and booking premier hostels like **Balaji Hostel** and **Ram Niwas**.

---

## ✨ Key Features

- **🏆 Premium Listings**: Detailed views for marquee properties including Balaji Hostel and Ram Niwas.
- **📅 Easy Scheduling**: Integrated "Schedule a Visit" functionality for prospective residents.
- **🖼️ Visual Gallery**: High-quality visual representation of amenities and living spaces.
- **🔐 Secure Access**: User authentication for personalized resident experiences.
- **⚡ Modern UX**: Smooth scrolling with Lenis and cinematic animations powered by Framer Motion.
- **📱 Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.

---

## 🛠️ Tech Stack

### Frontend (Client)
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend-as-a-Service**: Firebase

### Backend (Server)
- **Runtime**: Node.js
- **Framework**: [Express.js](https://expressjs.com/) with TypeScript
- **Database**: [MongoDB](https://www.mongodb.com/) via Mongoose
- **Mailing**: [Nodemailer](https://nodemailer.com/) (Visit scheduling notifications)
- **Security**: Helmet, CORS

---

## 🏗️ Project Structure

```bash
.
├── client/          # Next.js Frontend
│   ├── app/         # App Router pages & layouts
│   ├── components/  # Reusable UI components
│   └── public/      # Static assets
├── server/          # Express.js Backend
│   ├── src/         # API logic & routes
│   └── models/      # MongoDB schemas
└── images/          # Central asset repository
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB account/URI
- Firebase Project (for client-side features)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AshutoshSharma-pixel/Signature-Prime-Website.git
   cd Signature-Prime-Website
   ```

2. **Setup Client**:
   ```bash
   cd client
   npm install
   # Create .env.local with Firebase config
   npm run dev
   ```

3. **Setup Server**:
   ```bash
   cd ../server
   npm install
   # Create .env with MONGODB_URI and JWT_SECRET
   npm run dev
   ```

---

## 🌐 Deployment

The project is optimized for deployment on **Vercel**. 
- The `client` is deployed as a Next.js application.
- The `server` is deployed as a serverless Node.js function.

Live URL: [https://hostelsignautreprime.com](https://hostelsignautreprime.com)

---

## 📄 License

This project is licensed under the ISC License.

---

Developed with ❤️ by [Ashutosh Sharma](https://github.com/AshutoshSharma-pixel)
