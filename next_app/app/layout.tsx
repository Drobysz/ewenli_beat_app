import "./globals.css";
import { SiteContextProvider } from "./context/site.context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black overflow-x-hidden">
        <SiteContextProvider>
          {children}
        </SiteContextProvider>
      </body>
    </html>
  );
}
