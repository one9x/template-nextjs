import './globals.css';

export const metadata = {
  title: 'Next.js on One9x Pages',
  description: 'A static-export Next.js starter deployed to One9x Pages.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
