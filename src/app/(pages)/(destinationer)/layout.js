import { CountryNav } from '@/components/CountryNav/CountryNav'
import { TitleBanner } from '@/components/TitleBanner/TitleBanner'

export default function DestinationerLayout({ children }) {
  return (
    <>
      <TitleBanner
        heading="Hoteller Og Destinationer"
        src={10}
      />
      <CountryNav />
      {children}
    </>
  )
}
