import React from 'react'
import styles from './locations.module.scss'
import Link from 'next/link'

export const FoldOutCard = ({ title, text, slug, image, type }) => {
  return (
    <li>
      <article
        style={{ backgroundImage: `url(/images/${image})` }}
        className={styles.locationCard}
      >
        <hgroup>
          <Link href={`/${type}/${slug}`}>
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
