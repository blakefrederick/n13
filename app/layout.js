export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>N13</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <div>Layout start</div>
      <body>{children}</body>
      <div>Layout end</div>
    </html>
  );
}