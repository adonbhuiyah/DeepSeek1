import { AppContextProvider } from "@/context/AppContext";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./global.css";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "DeepSeek",
  description: "Chat with DeepSeek AI.",
  keywords: ["DeepSeek", "AI chatbot", "DeepSeek AI", "AI Assistant"],
  authors: [{ name: "Adon Bhuiyah", url: "https://adonr.dev" }],
  creator: "Adon Bhuiyah",
  publisher: "Adon Bhuiyah",
  category: "technology",
  applicationName: "DeepSeek",

  metadataBase: new URL("https://tariffcoin.org"),

  // 📱 Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "DeepSeek",
    description: "Chat with DeepSeek AI.",
    url: "https://tariffcoin.org",
    siteName: "DeepSeek",

    locale: "en_US",
    type: "website",
  },

  // 🐦 Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "DeepSeek",
    description: "Chat with DeepSeek AI.",
  },

  // 📱 App Icons
  icons: {
    icon: "/favicon.svg",
  },

  // 🤖 Robots & Google Bot Control
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },

  // 🕰️ Viewport & Charset (Optional for <head> injection)
  viewport: "width=device-width, initial-scale=1, object-fit=cover",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <AppContextProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>{" "}
      </AppContextProvider>
    </ClerkProvider>
  );
}
