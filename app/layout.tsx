import type { Metadata } from 'next';
import { Playfair_Display, Libre_Franklin } from 'next/font/google';
import './globals.css';

const libreFranklin = Libre_Franklin({
  variable: '--font-libre-franklin',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thebakingsocial.com'),
  title: 'The Baking Social | Atlanta\'s Premier Baking Experience',
  description:
    'An elevated baking experience in the heart of Atlanta. The Baking Social offers intimate, hands-on classes, private events, and unforgettable culinary moments in a setting of refined elegance.',
  keywords: [
    'luxury baking classes Atlanta',
    'premium baking studio',
    'private baking events',
    'elegant culinary experience',
    'Atlanta social events',
    'artisan baking classes',
    'upscale cooking classes',
  ],
  authors: [{ name: 'The Baking Social' }],
  creator: 'The Baking Social',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thebakingsocial.com',
    siteName: 'The Baking Social',
    title: 'The Baking Social | Atlanta\'s Premier Baking Experience',
    description:
      'An elevated baking experience in the heart of Atlanta. Intimate classes, private events, and unforgettable culinary moments.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Baking Social | Atlanta\'s Premier Baking Experience',
    description:
      'An elevated baking experience in the heart of Atlanta. Intimate classes, private events, and unforgettable culinary moments.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${libreFranklin.variable} ${playfairDisplay.variable} antialiased font-sans bg-tbs-cream`}
      >
        {children}
      </body>
    </html>
  );
}
