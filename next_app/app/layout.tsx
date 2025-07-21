// Tailwind and custom colors import
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
