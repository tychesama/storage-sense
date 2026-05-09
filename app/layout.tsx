import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Storage Sense",
    template: "%s | Storage Sense"
  },
  description:
    "Storage Sense teaches practical file organization, backup planning, storage device choices, cleanup tools, and data loss prevention.",
  metadataBase: new URL("https://storagesense.joemidpan.com"),
  openGraph: {
    title: "Storage Sense",
    description: "Practical storage management advice for safer files and cleaner drives.",
    url: "https://storagesense.joemidpan.com",
    siteName: "Storage Sense",
    images: ["/images/laptop%20visual.jpg"],
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
