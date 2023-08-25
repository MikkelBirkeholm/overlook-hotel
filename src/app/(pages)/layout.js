import { Footer } from '@/components/Footer/Footer'
import '../../styles/globals.scss'
import { Open_Sans } from 'next/font/google'
import { Header } from '@/components/Header/Header'

const opensans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Overlook Hotel',
  description: 'Look down on the peasants',
}

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={opensans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
