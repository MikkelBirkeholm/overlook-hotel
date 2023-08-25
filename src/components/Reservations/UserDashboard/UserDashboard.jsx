import React from 'react'
import styles from './dashboard.module.scss'

export const UserDashboard = ({ bookings }) => {
  return (
    <table className={styles.dashboardTable}>
      <tr>
        <th>Hotel</th>
        <th>Værelsestype</th>
        <th>Fra</th>
        <th>Til</th>
        <th>Muligheder</th>
      </tr>

      {bookings &&
        bookings.map((booking) => {
          return (
            <tr key={booking.id}>
              <td>
                {booking.hotel} ({booking.city})
              </td>
              <td>{booking.room_type}</td>
              <td>{booking.check_in}</td>
              <td>{booking.check_out}</td>
              <td>SLET / RET</td>
            </tr>
          )
        })}
    </table>
  )
}
