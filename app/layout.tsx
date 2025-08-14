import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Northern Viking Woodworks — Custom CNC Woodworking & Fabrication",
  description: "Northern Viking Woodworks specializes in custom CNC woodworking and precision fabrication. From unique one-off projects to large-scale production, built to your specifications.",
  keywords: "CNC woodworking, custom wood projects, CNC fabrication, woodworking Northern Michigan, custom furniture, precision CNC cutting",
  generator: 'v0.dev',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Northern Viking Woodworks — Custom CNC Woodworking & Fabrication",
    description: "Precision CNC woodworking and fabrication. From custom one-off projects to large-scale production, made to your exact specifications.",
    type: "website",
    url: "https://northernvikingwoodworks.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Northern Viking Woodworks - Custom CNC Woodworking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northern Viking Woodworks — Custom CNC Woodworking & Fabrication",
    description: "Custom CNC woodworking and precision fabrication, made to your specifications.",
    images: ["/og-image.png"],
  },
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
