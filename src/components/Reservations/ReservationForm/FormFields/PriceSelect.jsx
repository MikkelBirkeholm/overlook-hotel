import React from 'react'

export const PriceSelect = ({ callback, required, initial }) => {
  function handleInputChange(e) {
    callback(e)
  }

  return (
    <fieldset>
      <span>Vælg prisklasse</span>
      <label>
        <input
          type="radio"
          id="normal"
          name="type"
          value="normal"
          required={required}
          defaultChecked={initial === 'normal'}
          onChange={(e) => handleInputChange(e)}
        />
        Normal
      </label>

      <label>
        <input
          type="radio"
          id="flex"
          name="type"
          value="flex"
          required={required}
          defaultChecked={initial === 'flex'}
          onChange={(e) => handleInputChange(e)}
        />
        Flex
      </label>
    </fieldset>
  )
}
