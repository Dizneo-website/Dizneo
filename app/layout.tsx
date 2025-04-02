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
    images: [
      {
        url: "https://dizneo.com/your-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dizneo Digital Marketing",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dizneo Digital Marketing" />
        <meta property="og:image" content="https://dizneo.com/your-image.jpg" />
        <link rel="canonical" href="https://dizneo.com" />
      </head>
      <body className="font-bricolage">{children}</body>
    </html>
  );
}
