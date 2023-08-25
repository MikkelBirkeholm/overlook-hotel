import React from 'react'
import styles from './roomgrid.module.scss'
import { BookingButton } from '../Reservations/BookingButton/BookingButton'

async function getRoomData(id) {
  const res = await fetch(`https://api.mediehuset.net/overlook/rooms/${id}`)
  const data = await res.json()
  return data
}

export const RoomCard = async ({ id, bookingData }) => {
  const roomData = await getRoomData(id)

  const updatedBookingData = {
    ...bookingData,
    hotel_room: roomData.item.title,
  }

  return (
    <li>
      <article className={styles.roomCard}>
        <div className={styles.mainRoomContent}>
          <img
            src={roomData.item.images[0].image}
            alt={roomData.item.title}
          />
          <hgroup>
            <h1>{roomData.item.title}</h1>
            <span>
              {roomData.item.area} m2. Plads til {roomData.item.num_persons}{' '}
              personer.
            </span>
            <p>{roomData.item.description}</p>
            <p>Fra {roomData.item.day_price_normal}</p>
          </hgroup>
        </div>
        <div className={styles.foldOut}>
          <div>
            <h3>Værelset er udstyret med</h3>
            <h4>Generelt udstyr</h4>
            <ul>
              {roomData.item.facilities.map((facility) => {
                if (facility.category === 'Generelt udstyr') {
                  return <li key={facility.id}>{facility.title}</li>
                }
              })}
            </ul>
            <h4>Senge</h4>
            <ul>
              {roomData.item.facilities.map((facility) => {
                if (facility.category === 'Senge') {
                  return <li key={facility.id}>{facility.title}</li>
                }
              })}
            </ul>
          </div>
          <div className="sidebyside">
            <BookingButton
              bookingData={updatedBookingData}
              type="normal"
              pris={roomData.item.day_price_normal}
            />
            <BookingButton
              bookingData={updatedBookingData}
              type="flex"
              pris={roomData.item.day_price_flex}
            />
          </div>
        </div>
        <label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m6 9l6 6l6-6"
            />
          </svg>
          <input
            type="checkbox"
            value="X"
          />
        </label>
      </article>
    </li>
  )
}
