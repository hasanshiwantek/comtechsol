import React from 'react'
import Cart from '../components/Cart/Cart'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Comtechsol  - Shopping Cart"
  },
  description:
    "View and manage your items in the shopping cart at Comtechsol. Add, remove, or update quantities before checkout.",
  keywords: [
    "shopping cart",
    "manage cart",
    "checkout",
    "Comtechsol cart",
  ],
  alternates: {
    canonical: "https://comtechsol.vercel.app/cart",
  },
  openGraph: {
    title: "Shopping Cart",
    description:
      "View and manage your items in the shopping cart at Comtechsol. Add, remove, or update quantities before checkout.",
    url: "https://comtechsol.vercel.app/cart",
    siteName: "Comtechsol",
    images: [
      {
        url: "/cart.png", // Replace with Comtechsol specific image if needed
        width: 1200,
        height: 630,
        alt: "Shopping Cart - Comtechsol",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopping Cart",
    description:
      "View and manage your items in the shopping cart at Comtechsol. Add, remove, or update quantities before checkout.",
    images: ["/cart.png"], // Replace with actual image path if needed
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const page = () => {
  return (
    <main>
      <Cart />
    </main>
  )
}

export default page