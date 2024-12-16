import "./globals.css";
import MainHeader from "./components/header";
import { Footer } from "./components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
