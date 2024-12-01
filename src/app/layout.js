import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nipun Pramodya Jayasinghe",
  description: "This is the portfolio of Nipun Pramodya Jayasinghe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" /> {/* Update to the correct path */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
