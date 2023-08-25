import React from 'react'
import styles from './hotelgrid.module.scss'
import Link from 'next/link'

export const HotelCard = ({ title, text, slug, image, city, land }) => {
  return (
    <li>
      <article
        style={{ backgroundImage: `url(/images/${image})` }}
        className={styles.locationCard}
      >
        <hgroup>
          <Link
            href={`/hoteller-og-destinationer/${land}/${city.slug}/${slug}`}
          >
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
