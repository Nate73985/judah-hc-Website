import { ReactNode } from 'react'
import TopBar from './TopBar'
import Header from './Header'
import Footer from './Footer'
import MobileCallButton from './MobileCallButton'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <MobileCallButton />
    </div>
  )
}
