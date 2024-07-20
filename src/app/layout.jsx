// app/layout.tsx
import Navbar from "@/Components/navbar";
import { Providers } from "./providers";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="main">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
