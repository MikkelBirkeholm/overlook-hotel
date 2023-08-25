import React from 'react'
import styles from './citygrid.module.scss'
import Link from 'next/link'

export const CityCard = ({ title, text, slug, image, land }) => {
  return (
    <li>
      <article
        style={{ backgroundImage: `url(${image})` }}
        className={styles.locationCard}
      >
        <hgroup>
          <Link href={`/hoteller-og-destinationer/${land}/${slug}`}>
            <h1>{title}</h1>
            <div className={styles.foldOut}>
              <div>
                <p>{text}</p>
              </div>
            </div>
          </Link>
        </hgroup>
      </article>
    </li>
  )
}
