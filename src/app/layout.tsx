import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang="en">
      <body>
        <div
          className={`${inter.className} bg-gray-900 flex overflow-hidden h-screen w-screen`}
        >
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
