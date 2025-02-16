import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
