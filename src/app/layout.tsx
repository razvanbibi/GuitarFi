import type { Metadata } from "next";
import "@fontsource/geist";        
import "@fontsource/geist-mono";   // Geist Mono
import "./globals.css";
export const metadata: Metadata = {
  title: "GuitarFi",
  description: "Daily check-ins on Celo to grow your streak and earn rewards",
  openGraph: {
    title: "GuitarFi",
    description:
      "Building a daily habit on Celo",
    images: ["/og-banner.png"],
  },
  other: {
  
    "talentapp:project_verification":
  "bc7485140d501a67192bfffd6736f5d2159395e1354b3b2cf80467fc4a6c5fcb8e6d0ffbdf4512fc67e4fb6b8b9aec6a5031138367093da1ab076a3b32d0a29d",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "Geist, sans-serif",
          background: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
