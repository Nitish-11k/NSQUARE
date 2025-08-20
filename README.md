# Premium NSQUARE Clothing Website

A luxurious, modern NSQUARE clothing platform built with React.js and Tailwind CSS, featuring premium T-shirts and jeans with special bundle pricing.

## ✨ Features

- **Luxury Design**: Sophisticated charcoal & gold color palette with premium typography
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion powered animations for enhanced user experience
- **Bundle Pricing**: Clear presentation of T-shirt and jeans bundle offers
- **Modern UI/UX**: Clean, minimalist design with generous white space
- **Interactive Elements**: Hover effects, smooth transitions, and engaging interactions
- **Multi-Page Navigation**: React Router for seamless page transitions
- **Detailed T-Shirt Collection**: Dedicated page showcasing three T-shirt categories

## 🎨 Design System

### Color Palette
- **Primary Background**: Dark charcoal (#1F2229)
- **Text**: Off-white (#F5F5F5)
- **Primary Accent**: Sophisticated gold (#D4AF37)
- **Secondary Accent**: Muted gray (#3A3D42)

### Typography
- **Headings**: Lora & Playfair Display (serif fonts)
- **Body Text**: Inter & Lato (sans-serif fonts)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nsquare-clothing-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js              # Navigation component
│   ├── Hero.js                # Hero section with main headline
│   ├── FeaturedProducts.js    # Product showcase section (4 products)
│   ├── PricingSection.js      # Bundle pricing display
│   ├── WhyChooseUs.js         # Value proposition section
│   ├── Footer.js              # Footer with company info
│   └── TshirtCollection.js    # Dedicated T-shirt collection page
├── App.js                     # Main application with routing
├── index.js                   # React entry point
└── index.css                  # Global styles and Tailwind imports
```

## 🛠️ Built With

- **React.js** - Frontend framework
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Google Fonts** - Typography

## 📱 Sections

### 1. Navigation
- Clean, transparent navbar with logo
- Navigation links for T-Shirts, Jeans, About Us, Contact
- Login/Register button with hover effects

### 2. Hero Section
- Compelling headline: "Wholesale Reimagined. Quality Redefined."
- Professional background image
- Call-to-action button
- Feature highlights

### 3. Featured Products
- **Four product cards** displayed in a grid layout:
  - Drop Shoulder T-Shirts
  - Printed T-Shirts  
  - Premium Plain T-Shirts
  - Premium Denim Jeans
- High-quality product images
- Starting prices and descriptions
- Interactive hover effects
- "View Collection" buttons that redirect to appropriate pages

### 4. Bundle Pricing
- Clear bundle pricing for T-shirts and jeans
- "Best Value" indicators
- Feature lists for each product category
- Delivery information

### 5. Why Choose Us
- Three-column layout with icons
- Quality, pricing, and reliability highlights
- Statistics section
- Call-to-action buttons

### 6. Footer
- Four-column layout
- Company information
- Quick links and legal pages
- Contact information
- Newsletter subscription

### 7. T-Shirt Collection Page
- **Dedicated page** accessible via "View Collection" buttons
- **Three detailed T-shirt categories**:
  - **Drop Shoulder T-Shirts**: Modern fashion and streetwear
  - **Printed T-Shirts**: Custom designs and branding
  - **Premium Plain T-Shirts**: Classic comfort and durability
- **Detailed information** for each category:
  - Key features
  - Available colors (12+ options)
  - Available sizes (S-XXL)
  - Bundle pricing with savings
  - High-quality product images
- **Navigation**: Back to home button
- **Responsive design** with mobile-optimized layout

## 🎯 Bundle Pricing

### T-Shirts (All Categories)
- **1 T-Shirt**: ₹450
- **3 T-Shirts**: ₹999 (Save ₹351) - **Best Value**
- **10 T-Shirts**: ₹2,999 (Save ₹1,501)

### Jeans
- **1 Pair**: ₹650
- **3 Pairs**: ₹1,499 (Save ₹451) - **Best Value**

## 🔧 Customization

### Colors
Modify the color palette in `tailwind.config.js`:

```javascript
colors: {
  charcoal: { /* ... */ },
  gold: { /* ... */ },
  muted: { /* ... */ }
}
```

### Content
Update product information, pricing, and company details in the respective component files.

### Images
Replace placeholder images with your actual product photography. Current images are sourced from Unsplash.

### T-Shirt Categories
Modify the T-shirt categories in `src/components/TshirtCollection.js`:
- Add/remove categories
- Update features, colors, and sizes
- Modify pricing structure
- Change product descriptions

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy automatically on push

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Email: Soon Disclose
- Phone: Soon Disclose

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) for placeholder images
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev) for beautiful icons
- [React Router](https://reactrouter.com/) for client-side routing
