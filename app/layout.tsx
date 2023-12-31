import Footer from './componnets/Footer'
import Navbar from './componnets/Navbar'

import './globals.css'
export const metadata = {
  title: 'ibble',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
       <Footer/>
      </body>
    </html>
  )
}
