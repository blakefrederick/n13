
import NavLink from './nav-link'
import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-900 text-gray-100 antialiased">
      <head>
        <title>N13</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body>
        <header className="border-b p-4">
          <nav className="space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/1999">1999</NavLink>
          </nav>    
        </header>  
        <div className="p-4">
          {children}
        </div>
      </body>
    </html>
  );
}