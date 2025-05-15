import type { Product } from "./types"

// Mock product data
const products: Product[] = [
  {
    id: "auth-plugin",
    name: "Authentication Plugin",
    description: "A comprehensive authentication solution with social login, JWT, and role-based access control.",
    price: 5499,
    image: "/images/auth-plugin.jpeg",
    category: "Security",
    rating: 4.8,
    reviewCount: 124,
    isNew: true,
    version: "2.1.0",
    lastUpdated: "2023-11-15",
    features: [
      "Social login integration (Google, Facebook, GitHub)",
      "JWT authentication with refresh tokens",
      "Role-based access control",
      "Two-factor authentication",
      "Password reset and email verification",
      "Session management",
    ],
    requirements: ["Node.js 14+", "React 16.8+ or Vue 3+", "MongoDB or PostgreSQL"],
    reviews: [
      {
        user: "DevMaster42",
        rating: 5,
        date: "October 12, 2023",
        comment:
          "This plugin saved me weeks of development time. The documentation is excellent and it was easy to integrate with my existing project.",
      },
      {
        user: "WebWizard",
        rating: 4,
        date: "September 28, 2023",
        comment:
          "Great plugin with lots of features. The only reason I'm not giving 5 stars is because the TypeScript definitions could be improved.",
      },
    ],
  },
  {
    id: "data-visualization",
    name: "Data Visualization Toolkit",
    description: "Create beautiful, interactive charts and graphs with this easy-to-use data visualization toolkit.",
    price: 4399,
    image: "/images/data-viz.jpeg",
    category: "UI Components",
    rating: 4.5,
    reviewCount: 89,
    isNew: false,
    version: "3.2.1",
    lastUpdated: "2023-10-05",
    features: [
      "20+ chart types (bar, line, pie, scatter, etc.)",
      "Responsive and interactive visualizations",
      "Customizable themes and styles",
      "Animation support",
      "CSV and JSON data import",
      "Export to PNG, SVG, and PDF",
    ],
    requirements: ["React 16+ or Vue 2.6+", "Modern browser with ES6 support"],
    reviews: [
      {
        user: "DataNerd",
        rating: 5,
        date: "November 2, 2023",
        comment:
          "The best data visualization library I've used. The API is intuitive and the charts look professional.",
      },
      {
        user: "FrontendDev",
        rating: 4,
        date: "October 18, 2023",
        comment: "Great toolkit with lots of options. Documentation could be more detailed for advanced use cases.",
      },
    ],
  },
  {
    id: "payment-gateway",
    name: "Payment Gateway Integration",
    description: "Seamlessly integrate multiple payment processors into your application with this unified API.",
    price: 6599,
    image: "/images/payment-gateway.jpeg",
    category: "E-commerce",
    rating: 4.7,
    reviewCount: 156,
    isNew: false,
    version: "4.0.2",
    lastUpdated: "2023-09-20",
    features: [
      "Support for Stripe, PayPal, Square, and more",
      "Unified API for all payment processors",
      "Subscription billing and recurring payments",
      "Refund and dispute management",
      "Detailed transaction reporting",
      "PCI compliance helpers",
    ],
    requirements: ["Node.js 12+", "Express.js or similar framework", "SSL enabled environment"],
    reviews: [
      {
        user: "E-CommerceGuru",
        rating: 5,
        date: "October 30, 2023",
        comment:
          "This plugin has simplified our payment infrastructure tremendously. We were able to offer multiple payment options with minimal code.",
      },
      {
        user: "StartupFounder",
        rating: 5,
        date: "September 15, 2023",
        comment: "Worth every penny. The subscription billing features alone saved us months of development time.",
      },
    ],
  },
  {
    id: "image-processing",
    name: "Image Processing Library",
    description:
      "Powerful image processing capabilities for your web applications, including filters, cropping, and optimization.",
    price: 3999,
    image: "/images/image-processing.jpeg",
    category: "Media",
    rating: 4.6,
    reviewCount: 72,
    isNew: true,
    version: "1.5.0",
    lastUpdated: "2023-11-10",
    features: [
      "Image filters and effects",
      "Cropping and resizing tools",
      "Image optimization for web",
      "Face detection and smart cropping",
      "Batch processing capabilities",
      "WebAssembly acceleration",
    ],
    requirements: ["Modern browser with WebAssembly support", "JavaScript ES6+"],
    reviews: [
      {
        user: "DesignWhiz",
        rating: 5,
        date: "November 5, 2023",
        comment: "The filters are amazing and the performance is impressive even with large images.",
      },
      {
        user: "ContentCreator",
        rating: 4,
        date: "October 22, 2023",
        comment:
          "Great library for image manipulation. Would love to see more export format options in future updates.",
      },
    ],
  },
  {
    id: "seo-toolkit",
    name: "SEO Optimization Toolkit",
    description: "Boost your website's search engine rankings with this comprehensive SEO toolkit.",
    price: 3299,
    image: "/images/seo-toolkit.jpeg",
    category: "Marketing",
    rating: 4.4,
    reviewCount: 63,
    isNew: false,
    version: "2.3.1",
    lastUpdated: "2023-08-15",
    features: [
      "Automated meta tag generation",
      "Structured data implementation",
      "Keyword analysis and suggestions",
      "SEO performance monitoring",
      "Sitemap generation",
      "Mobile optimization checks",
    ],
    requirements: ["Any modern JavaScript framework", "Node.js 10+ for server components"],
    reviews: [
      {
        user: "SEOExpert",
        rating: 4,
        date: "September 10, 2023",
        comment: "Solid toolkit with useful features. The structured data implementation is particularly well done.",
      },
      {
        user: "BloggerPro",
        rating: 5,
        date: "August 28, 2023",
        comment:
          "My blog's traffic increased by 30% after implementing this toolkit. The keyword suggestions are spot on.",
      },
    ],
  },
  {
    id: "form-builder",
    name: "Dynamic Form Builder",
    description: "Create complex, validated forms with a simple drag-and-drop interface and JSON schema support.",
    price: 4999,
    image: "/images/form-builder.jpeg",
    category: "UI Components",
    rating: 4.9,
    reviewCount: 118,
    isNew: false,
    version: "3.1.0",
    lastUpdated: "2023-10-12",
    features: [
      "Drag-and-drop form builder",
      "50+ form components",
      "Advanced validation rules",
      "Conditional logic",
      "Multi-step forms",
      "Accessibility compliance",
    ],
    requirements: ["React 16.8+ or Vue 3+", "Modern browser with ES6 support"],
    reviews: [
      {
        user: "UXDesigner",
        rating: 5,
        date: "October 25, 2023",
        comment: "This is the form builder I've been looking for. The conditional logic is powerful and intuitive.",
      },
      {
        user: "EnterpriseArchitect",
        rating: 5,
        date: "September 30, 2023",
        comment:
          "We've implemented this across our enterprise applications. The consistency and quality are outstanding.",
      },
    ],
  },
]

// Categories
const categories = [
  { id: "ui-components", name: "UI Components", icon: "🧩", count: 12 },
  { id: "security", name: "Security", icon: "🔒", count: 8 },
  { id: "e-commerce", name: "E-commerce", icon: "🛒", count: 10 },
  { id: "media", name: "Media", icon: "🖼️", count: 7 },
  { id: "marketing", name: "Marketing", icon: "📈", count: 5 },
  { id: "development", name: "Development", icon: "⚙️", count: 15 },
]

// Get all products
export function getAllProducts(): Product[] {
  return products
}

// Get featured products
export function getFeaturedProducts(): Product[] {
  return products.slice(0, 3)
}

// Get product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

// Get related products
export function getRelatedProducts(category: string, currentId: string): Product[] {
  return products.filter((product) => product.category === category && product.id !== currentId).slice(0, 4)
}

// Get categories
export function getCategories() {
  return categories
}
