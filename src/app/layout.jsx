// app/layout.tsx
import Navbar from "@/Components/navbar";
import { Providers } from "./providers";
import "./globals.css";
import Footer from "@/Components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="main">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
