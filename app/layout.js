import "./globals.css";

export const metadata = {
  title: "Happy 5th Anniversary",
  description: "Happy 5th Anniversary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
