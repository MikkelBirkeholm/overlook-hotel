import React from 'react'

export const RoomSelect = ({ data, callback, initial, required }) => {
  function handleInputChange(e) {
    callback(e)
  }

  console.log('room', data)

  return (
    <select
      onChange={(e) => handleInputChange(e)}
      name="hotel_room"
      required={required}
      defaultValue={initial}
    >
      <option value="">----</option>
      {data &&
        data.map((room) => {
          return (
            <option
              value={room.room_title}
              // defaultChecked={room.room_title === initial ? true : false}
              key={room.id}
            >
              {room.room_title}
            </option>
          )
        })}
    </select>
  )
}

//  ;<div className={styles.formGroup}>
//    <label htmlFor="room">Vælg værelse</label>
//    <select
//      onChange={(e) => handleInputChange(e)}
//      name="room"
//    >
//      <option value="">--Please choose an option--</option>
//      {data.countries.items
//        .find((o) => o.name === formData.country)
//        .cities.items.find((o) => o.name === formData.city)
//        .hotels.items.find((o) => o.title === formData.hotel)
//        .rooms.items.map((room) => {
//          return (
//            <option
//              value={room.title}
//              key={room.id}
//            >
//              {room.title}
//            </option>
//          )
//        })}
//    </select>
//  </div>
