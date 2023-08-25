import React from 'react'

export const HotelSelect = ({
  data,
  callback,
  disabled,
  initial,
  required,
}) => {
  function handleInputChange(e) {
    callback(e)
  }

  return (
    <select
      onChange={(e) => handleInputChange(e)}
      name="hotel"
      disabled={disabled}
      required={required}
      defaultValue={initial}
    >
      <option value="">----</option>
      {data &&
        data.map((hotel) => {
          return (
            <option
              value={hotel.title}
              key={hotel.id}
            >
              {hotel.title}
            </option>
          )
        })}
    </select>
  )
}
