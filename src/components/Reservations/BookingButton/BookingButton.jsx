'use client'
import React from 'react'
import styles from './bookingbutton.module.scss'
import { useRouter } from 'next/navigation'

export const BookingButton = ({ bookingData, type, pris }) => {
  const router = useRouter()

  const queryString = Object.keys(bookingData)
    .map((key) => {
      return `${key}=${bookingData[key]}`
    })
    .join('&')

  function handleDirectBooking() {
    router.push(
      `/reservation?data=true&type=${type}&pris=${pris}&${queryString}`
    )
  }
  return (
    <div>
      <button
        className={styles.bookingBtn}
        onClick={handleDirectBooking}
        data-after={type === 'flex' ? 'med flex' : 'uden flex'}
      >
        Book
      </button>
      <span>
        <b> {pris}</b> DKK/dag
      </span>
    </div>
  )
}

// hotel_country: '',
// hotel_city: '',
// hotel_room: '',
// hotel: '',
