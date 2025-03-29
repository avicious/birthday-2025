import "./globals.css";

export const metadata = {
  title: "Happy Birthday",
  description: "Happy Birthday",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
