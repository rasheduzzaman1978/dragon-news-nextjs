import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const monserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-monserrat",
});

export const metadata = {
  title: "Dragon news",
  description: "Best news portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <main className="grow">
          {children}
        </main>
        {/* 🔥 Toast Container */}
        <ToastContainer
          position="top-center"
          autoClose={1500}
          theme="colored"
        />
      </body>
    </html>
  );
}