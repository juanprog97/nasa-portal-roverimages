import type { Metadata } from 'next';
import { roboto } from './font';
import './globals.scss';

export const metadata: Metadata = {
  title: 'NASA MARS ROVERS',
  description:
    "The website is a platform dedicated to viewing and exploring filtered images captured by rovers on Mars. It allows users to access high-quality, processed photos taken by NASA's Mars rovers, such as Curiosity and Perseverance. The site offers various filtering options, such as date, location, and rover camera, enabling users to browse and study detailed images of the Martian surface. It serves as an educational and research tool for space enthusiasts, scientists, and the general public who are interested in Mars exploration and the fascinating discoveries made on the Red Planet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
