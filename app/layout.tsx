import "./globals.css";

export const metadata = {
  title: "Dizneo Digital Marketing",
  description: "The best digital marketing agency",
  Creator: 'Created by Sagar',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-bricolage">{children}</body>
    </html>
  );
}
