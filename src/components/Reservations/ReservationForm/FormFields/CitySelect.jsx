import React from 'react'

export const CitySelect = ({ data, callback, disabled, initial, required }) => {
  function handleInputChange(e) {
    callback(e)
  }

  return (
    <select
      onChange={(e) => handleInputChange(e)}
      name="hotel_city"
      disabled={disabled}
      required={required}
      defaultValue={initial}
    >
      <option value="">----</option>
      {data &&
        data.cities.items?.map((city) => {
          return (
            <option
              value={city.name}
              key={city.id}
            >
              {city.name}
            </option>
          )
        })}
    </select>
  )
}
