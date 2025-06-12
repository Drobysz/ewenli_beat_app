// Tailwind and custom colors import
import "./globals.css";

// Context Provider
import { AppContextProvider } from "./context/app.context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black overflow-x-hidden">
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
