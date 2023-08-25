import React from 'react'

export const CountrySelect = ({
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
      name="hotel_country"
      disabled={disabled}
      required={required}
      defaultValue={initial}
    >
      <option value="">----</option>
      {data.items.map((country) => {
        return (
          <option
            value={country.name}
            key={country.id}
          >
            {country.name}
          </option>
        )
      })}
    </select>
  )
}
