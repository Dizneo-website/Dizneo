import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Dizneo Digital Marketing | Best Digital Marketing Agency",
  description: "Get expert SEO, PPC, and social media marketing services for your business.",
  keywords: "digital marketing, SEO, PPC, social media, branding",
  openGraph: {
    title: "Dizneo Digital Marketing",
    description: "Helping businesses grow with top digital marketing services.",
    url: "https://dizneo.com",
    site_name: "Dizneo",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-13H36PN2S4`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-13H36PN2S4');
          `}
        </Script>
      </head>
      <body className="font-bricolage">{children}</body>
    </html>
  );
}
