import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { dmSans, playfairDisplay } from "@/lib/fonts";

export const metadata: Metadata = {
    title: "Gleem - Free Websites for Local Businesses",
    description: "We design and launch your one-page business website in 72 hours. You only pay $9/month for hosting and support.",
    keywords: "small business website, local business website, affordable web design, one page website",
    openGraph: {
      title: "Gleem - Free Websites for Local Businesses",
      description: "Professional website design for local businesses. Launched in 72 hours, $9/month.",
      url: "https://getgleem.vercel.app",
      siteName: "Gleem",
      type: "website",
    }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeInitScript = `
    (() => {
      try {
        const storageKey = "nextjs-ui-theme";
        const root = document.documentElement;
        const savedTheme = localStorage.getItem(storageKey) || "dark";
        let theme = savedTheme;

        if (savedTheme === "system") {
          theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }

        root.classList.remove("light", "dark");
        root.classList.add(theme);
      } catch {
        document.documentElement.classList.add("dark");
      }
    })();
  `;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${dmSans.variable} ${playfairDisplay.variable} antialiased`}
    >
      <body className={dmSans.className}>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider defaultTheme="dark" storageKey="nextjs-ui-theme">
          {children}
          <Toaster position="bottom-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
