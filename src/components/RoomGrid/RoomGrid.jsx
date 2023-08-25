import React from 'react'
import styles from './roomgrid.module.scss'
import { RoomCard } from './RoomCard'

export const RoomGrid = ({ data, bookingData }) => {
  return (
    <div>
      <h2>Alle værelser</h2>
      <ul>
        {data.map((room) => {
          return (
            <RoomCard
              id={room.id}
              key={room.id}
              bookingData={bookingData}
            />
          )
        })}
      </ul>
    </div>
  )
}
