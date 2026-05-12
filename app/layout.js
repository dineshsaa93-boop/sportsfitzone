import "./globals.css";

export const metadata = {
  title: "Sports Fit Zone",
  description: "Premium Sports Training App",
manifest:"/manifest.json"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
