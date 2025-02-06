import '@/app/styles/globals.css';

export const metadata = {
  title: "Lofi-Cafe",
  description: 'A cosy, lo-fi coffee shop idle game',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
