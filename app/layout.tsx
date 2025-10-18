import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jeethu LA',
  description: 'You are checking out Jeethu LA\'s portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://static.vecteezy.com/system/resources/previews/017/681/306/non_2x/letter-j-crown-logo-for-beauty-fashion-star-elegant-luxury-sign-vector.jpg" />
        <script defer src="https://cloud.umami.is/script.js" data-website-id="37b2b4f8-a209-432f-8043-4d85c3271cf3"></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}