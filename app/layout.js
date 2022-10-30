import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>N13</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body>
        <nav>
          <Link href="/">Home</Link>|
          <Link href="/1999">1999</Link>
        </nav>      
        <div>Layout header</div>
        {children}
        <div>Layout footer</div>
      </body>
    </html>
  );
}