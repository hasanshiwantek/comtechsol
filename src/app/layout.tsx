import type { Metadata } from "next";
import LayoutWrapper from "./components/layout/LayoutWrapper";
import { Inter, Jost, Roboto, Roboto_Condensed } from "next/font/google";
import localFont from "next/font/local";
import ScriptInjector from "@/components/ScriptInjector";
import "../styles/blog/api-content.css";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-roboto",
  adjustFontFallback: false,

});
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto-condensed",
});
// // ✅ Recoleta (400–700) - Loading multiple weights
// const gilroy = localFont({
//   src: [
//     {
//       // 🚨 Ensure file name matches exactly (with space)
//       path: "./fonts/Gilroy-Regular.ttf",
//       weight: "400", // Regular
//       style: "normal",
//     },
//     {
//       // 🚨 Ensure file name matches exactly (with space)
//       path: "./fonts/Gilroy-Medium.ttf",
//       weight: "500", // Medium
//       style: "normal",
//     },
//     {
//       // 🚨 Ensure file name matches exactly (with space)
//       path: "./fonts/Gilroy-SemiBold.ttf",
//       weight: "600", // SemiBold
//       style: "normal",
//     },
//     {
//       // 🚨 Ensure file name matches exactly (with space)
//       path: "./fonts/Gilroy-Bold.ttf",
//       weight: "700", // Bold
//       style: "normal",
//     },
//   ],
//   variable: "--font-recoleta",
//   display: "swap",
//   preload: true,
// });

export const metadata: Metadata = {
  metadataBase: new URL("https://comtechsol.vercel.app"),
  title: {
    // default: "Comtechsol",
    // template: "%s | Comtechsol",
    default: "Comtechsol ",
    template: "%s | Comtechsol ",
  },
  description:
    "Buy servers, networking equipment, and IT solutions online at Comtechsol. Quality products at affordable prices with fast shipping.",
  keywords: [
    "Comtechsol",
    "servers",
    "networking equipment",
    "IT solutions",
    "buy online",
    "IT hardware",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://comtechsol.vercel.app",
    siteName: "Comtechsol",
    title: "Comtechsol – Quality Servers & IT Solutions",
    description:
      "Discover premium servers, networking gear, storage devices, and IT solutions at Comtechsol.",
    images: [
      {
        url: "/serverblink-logo.png", // Replace with your logo
        width: 1200,
        height: 630,
        alt: "Comtechsol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comtechsol – Quality Servers & IT Solutions",
    description:
      "Shop premium servers, networking equipment, and IT solutions at Comtechsol.",
    images: ["/serverblink-logo.png"], // Replace with actual logo path
  },
  icons: {
    icon: "",
    shortcut: "",
    apple: "",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} `}>
      <body className={`${roboto.className} antialiased`} suppressHydrationWarning>
        <LayoutWrapper>
          <ScriptInjector />
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
