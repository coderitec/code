import { Roboto } from "next/font/google";
import "./globals.css";
import { SidebarProviders } from "./providers";
import Navbar from "./components/Navbar";

const robo = Roboto({ subsets: ["latin"],weight:['400','700'] });

export const metadata = {
  title: "Franc | Frontend",
  description: "Personal portfolio of Francis Enemuo, a Frontend developer with React and React Native.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-slate-100 bg-slate-950 ${robo.className}`}>
      <SidebarProviders>
        <Navbar />
        {children}

      </SidebarProviders>
        </body>
    </html>
  );
}
