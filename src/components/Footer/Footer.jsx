import React from 'react'
import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="innercontent">
        <div>
          <span>© 2021 Hotel Overlook. Alle rettigheder forbeholdt.</span>
        </div>
        <div aria-label="Hotel Overlook socials">Logo Logo</div>
        <nav>
          <ul>
            <li>Menu Item</li>
            <li>Menu Item</li>
            <li>Menu Item</li>
            <li>Menu Item</li>
            <li>Menu Item</li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
