import { Aurora2 } from "@/components/index";
import { AuthContextProvider } from "./context/auth.context";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthContextProvider>
      <Aurora2>
        <div className="relative flex items-center justify-center min-h-[100vh] max-w-[500px]">
          {children}
        </div>
      </Aurora2>
    </AuthContextProvider>
  );
}
