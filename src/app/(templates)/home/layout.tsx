import Header from "../../../../Components/organisms/header"
import '@/app/globals.css';

export const metadata = {
  title: 'Home',
  description: 'Home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Header/>
        {children}
      </body>
    </html>
  )
}
