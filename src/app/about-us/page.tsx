import React from "react";
import AboutBanner from "../components/about/AboutBanner";
import GlobalSupplier from "../components/about/GlobalSupplier";
import AboutStats from "../components/about/AboutStats";
import AboutBrandSection from "../components/about/AboutBrandSection";
import SocialResponsibilitySection from "../components/about/SocialResponsibiltySection";
// import GetInTouch from "../components/Home/GetInTouch";
import dynamic from "next/dynamic";
import ProductServicesSection from "../components/about/ProductServicesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Comtechsol",
  description:
    "Learn more about Comtechsol, our mission, values, and commitment to providing quality server parts and IT solutions. Discover our story and how we serve our clients.",
  keywords: [
    "about Comtechsol",
    "company mission",
    "company values",
    "server parts provider",
    "Comtechsol story",
  ],
  alternates: {
    canonical: "https://comtechsol.vercel.app/about-us",
  },
  openGraph: {
    title: "About Us | Comtechsol",
    description:
      "Learn more about Comtechsol, our mission, values, and commitment to providing quality server parts and IT solutions.",
    url: "https://comtechsol.vercel.app/about-us",
    siteName: "Comtechsol",
    images: [
      {
        url: "/aboutus.png", // Replace with Comtechsol logo or About image
        width: 1200,
        height: 630,
        alt: "About Us - Comtechsol",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Comtechsol",
    description:
      "Learn more about Comtechsol, our mission, values, and commitment to providing quality server parts and IT solutions.",
    images: ["/aboutus.png"], // Replace with actual path if needed
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

const AOSWrapper = dynamic(() => import("../components/animation/AOSWrapper"));
const page = () => {
  return (
    <main className="flex flex-col gap-30" role="main">
      <div className="w-full max-w-[1170px] mx-auto lg:px-6 xl:px-0">
        <div className="py-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">


            {/* Content */}
            <div className="lg:col-span-12">
              <h2 className=""><span
                className="text-[11px] !text-[#3479e0]"
                itemProp="name"
              >
                Home
              </span> {" "} <span className="mt-2 mx-3 text-gray-400 text-[11px]" aria-hidden="true">/</span> {" "} <span
                className="!text-[#3479e0] text-[11px]"
                itemProp="name"
              >
                  About Us
                </span></h2>

              {/* Page Title */}
              <h1 className="text-4xl mb-4 text-[#4A4A4A] mt-5">
                About Us
              </h1>

              {/* Remaining Paragraphs */}
              <p className="text-[16px] leading-[23px] mt-6">
                Comtechsol is a one-stop shop for enterprise-grade server parts and components, designed to meet the demands of modern businesses. From CPUs and RAM to hard drives, RAID controllers, and beyond, we offer a comprehensive selection of products to help you build, upgrade, and maintain your server infrastructure with confidence. Our experienced team is committed to making every purchase smooth and stress-free, with knowledgeable support available to help you find the right fit for your setup. At Comtechsol, reliable hardware meets reliable service.
              </p>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
