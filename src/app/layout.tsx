import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarfieldWrapper from "@/components/StarfieldWrapper";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Legendary Portfolio",
  description: "A legendary portfolio built with Next.js 15, TypeScript & DaisyUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <Script
          id="extension-protection"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Eklenti hatalarını filtrele
                var originalError = window.onerror;
                window.onerror = function(message, source, lineno, colno, error) {
                  if (source && (source.includes('chrome-extension://') || 
                      source.includes('moz-extension://') || 
                      source.includes('content_script.js') || 
                      source.includes('vendor.js'))) {
                    return true; // Eklenti hatalarını sessizce geç
                  }
                  if (originalError) {
                    return originalError.call(this, message, source, lineno, colno, error);
                  }
                  return false;
                };
                
                // Unhandled promise rejection'ları filtrele
                window.addEventListener('unhandledrejection', function(event) {
                  if (event.reason && event.reason.stack && 
                      (event.reason.stack.includes('chrome-extension://') || 
                       event.reason.stack.includes('content_script.js'))) {
                    event.preventDefault();
                  }
                });
              })();
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Global fixed starfield background */}
        <StarfieldWrapper />
        {children}
      </body>
    </html>
  );
}
