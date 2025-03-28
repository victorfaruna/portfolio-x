import type { Metadata } from "next";
import { Open_Sans, Fira_Code, Poppins } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Professional Portfolio -- Victor Faruna",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="">
      <head></head>
      <body
        className={`${openSans.variable} ${firaCode.variable} ${poppins.variable}  w-screen antialiased bg-main font-poppins text-[0.75rem] text-color-1 elative`}
      >
        {children}
      </body>
    </html>
  );
}
