import React from 'react'
import styles from './titlebanner.module.scss'
import setImageURL from '@/utils/setImageUrl'
import Image from 'next/image'

export const TitleBanner = async ({ heading, src }) => {
  const imageURL = await setImageURL(src)
  return (
    <div className={styles.titleBanner}>
      <Image
        src={`/images/${imageURL}`}
        fill={true}
        alt={heading}
        priority={true}
      />
      <div className="innercontent">
        <h1>{heading}</h1>
      </div>
    </div>
  )
}
