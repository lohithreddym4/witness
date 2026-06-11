import "./globals.css";

import AppNavigation from "@/components/layouts/AppNavigation";
import AudioProvider from "@/components/ui/AudioProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className="bg-black text-white">

        <AppNavigation />

        {children}
        <AudioProvider/>

      </body>

    </html>
  );
}