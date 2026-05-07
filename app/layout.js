export const metadata = {
  title: "Sports Fit Zone",
  description: "Ultimate Sports App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
