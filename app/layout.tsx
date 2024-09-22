import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans} from "next/font/google";
const ibmPlexSans = IBM_Plex_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Multi-Step SignUp Form",
  description: "Multi-Step SignUp Form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${ibmPlexSans.className}  
          `}
      >
        <main className="font-sans">{children}</main>
      </body>
    </html>
  );
}
