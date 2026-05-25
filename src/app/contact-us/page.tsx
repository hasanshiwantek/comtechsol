import React from "react";
import { Metadata } from "next";
import ContactUs from "../components/ContactUs/ContactUs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Comtechsol for product inquiries, customer support, sales questions, and technical assistance. Contact us via phone, email, or visit our website.",
  keywords: [
    "contact Comtechsol",
    "customer support",
    "sales inquiries",
    "IT hardware support",
    "Comtechsol contact",
  ],
  alternates: {
    canonical: "https://server-blink.vercel.app/contact-us",
  },
  openGraph: {
    title: "Contact Us | Comtechsol",
    description:
      "Get in touch with Comtechsol for product inquiries, customer support, and sales questions.",
    url: "https://server-blink.vercel.app/contact-us",
    siteName: "Comtechsol",
    images: [
      {
        url: "/contactus.png", // Replace with Comtechsol specific image if needed
        width: 1200,
        height: 630,
        alt: "Contact Us - Comtechsol",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Comtechsol",
    description:
      "Get in touch with Comtechsol for product inquiries, customer support, and sales questions.",
    images: ["/contactus.png"], // Replace with actual image path if needed
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
    <div className="">
      <ContactUs />
    </div>
  );
};

export default page;
