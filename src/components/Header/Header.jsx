import React from 'react'
import styles from './header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { LoginSwitcher } from './LoginSwitcher'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="innercontent">
        <Image
          src="/hotel-overlook-logo.png"
          alt="Hotel Overlook logo"
          width={250}
          height={80}
        />
        <nav>
          <ul>
            <li>
              <Link href={'/'}>FORSIDE</Link>
            </li>
            <li>
              <Link href={'/hoteller-og-destinationer'}>
                HOTELLER & DESTINATIONER
              </Link>
            </li>
            <li>
              <Link href={'/'}>VÆRELSER</Link>
            </li>
            <li>
              <Link href={'/reservation'}>RESERVATION</Link>
            </li>
            <LoginSwitcher />
          </ul>
        </nav>
      </div>
    </header>
  )
}
