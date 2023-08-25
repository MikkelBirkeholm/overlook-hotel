import Link from 'next/link'
import styles from './countrynav.module.scss'
import React from 'react'

async function getCountries() {
  const res = await fetch('https://api.mediehuset.net/overlook/countries')
  return await res.json()
}

const countries = await getCountries()

export const CountryNav = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        {countries.items?.map((land) => {
          return (
            <li key={land.id}>
              <Link
                href={`/hoteller-og-destinationer/${land.name.toLowerCase()}`}
              >
                {land.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
