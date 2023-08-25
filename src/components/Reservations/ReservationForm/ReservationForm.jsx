'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CountrySelect } from './FormFields/CountrySelect'
import { CitySelect } from './FormFields/CitySelect'
import { HotelSelect } from './FormFields/HotelSelect'
import { PriceSelect } from './FormFields/PriceSelect'
import styles from './form.module.scss'
import { RoomSelect } from './FormFields/RoomSelect'
import { DateInput } from './FormFields/DateInput'

export const ReservationForm = ({ profile }) => {
  const searchParams = useSearchParams()
  const [data, setData] = useState({})
  const [formData, setFormData] = useState({
    first_name: profile[0]?.first_name || '',
    last_name: profile[0]?.last_name || '',
    email: profile[0]?.email || '',
    phone: profile[0]?.phone || '',
    terms: false,
    from: '',
    to: '',
    comments: '',
    hotel_country: '',
    hotel_city: '',
    hotel_room: '',
    hotel: '',
    type: '',
    pris: '',
  })

  useEffect(() => {
    async function getData() {
      const res = await fetch('https://api.mediehuset.net/overlook/')
      const data = await res.json()
      setData(data)
    }
    getData()
  }, [])

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  function handleDateChange(e, name, formattedDate) {
    setFormData({ ...formData, [name]: formattedDate })
  }

  useEffect(() => {
    // tjek om URL har parametre -> formater parametre til objekt
    if (searchParams.has('data')) {
      function paramsToObject(entries) {
        const result = {}
        for (const [key, value] of entries) {
          result[key] = value
        }
        return result
      }
      const params = paramsToObject(searchParams.entries())

      // opdater state med parametre
      setFormData({
        ...formData,
        hotel_country: params.hotel_country,
        hotel_city: params.hotel_city,
        hotel_room: params.hotel_room,
        hotel: params.hotel_name,
        type: params.type,
        pris: params.pris,
      })
    }
  }, [])

  if (data && data.countries) {
    return (
      <form className={styles.reservationForm}>
        <fieldset>
          <CountrySelect
            data={data.countries}
            callback={handleInputChange}
            initial={formData.hotel_country}
            disabled={formData.hotel_city !== '' ? true : false}
            required={true}
          />

          {formData.hotel_country !== '' && (
            <CitySelect
              data={data.countries.items.find(
                (o) => o.name === formData.hotel_country
              )}
              initial={formData.hotel_city}
              callback={handleInputChange}
              disabled={formData.hotel !== '' ? true : false}
              required={true}
            />
          )}

          {formData.hotel_city !== '' && (
            <HotelSelect
              data={
                data.countries.items
                  .find((o) => o.name === formData.hotel_country)
                  .cities.items?.find((o) => o.name === formData.hotel_city)
                  .hotels.items
              }
              initial={formData.hotel}
              callback={handleInputChange}
              disabled={formData.hotel_room !== '' ? true : false}
              required={true}
            />
          )}

          {formData.hotel !== '' && (
            <RoomSelect
              data={
                data.countries.items
                  .find((o) => o.name === formData.hotel_country)
                  .cities.items?.find((o) => o.name === formData.hotel_city)
                  .hotels.items?.find((o) => o.title === formData.hotel).rooms
                  .items
              }
              initial={formData.hotel_room}
              required={true}
              callback={handleInputChange}
            />
          )}
        </fieldset>
        <fieldset>
          <PriceSelect
            callback={handleInputChange}
            required={true}
            initial={formData.type}
          />
        </fieldset>
        <fieldset>
          <DateInput
            callback={handleDateChange}
            required={true}
          />
        </fieldset>
        <fieldset>
          <input
            type="text"
            name="first_name"
            placeholder="Fornavn"
            onChange={(e) => handleInputChange(e)}
            value={formData.first_name}
            required={true}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Efternavn(e)"
            onChange={(e) => handleInputChange(e)}
            value={formData.last_name}
            required={true}
          />
          <div className="sidebyside">
            <input
              type="tel"
              name="phone"
              placeholder="Telefon"
              onChange={(e) => handleInputChange(e)}
              value={formData.phone}
              required={true}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => handleInputChange(e)}
              value={formData.email}
              required={true}
            />
          </div>
          <textarea
            name="comments"
            onChange={(e) => handleInputChange(e)}
            value={formData.comments}
            cols="30"
            rows="5"
            placeholder="Kommentarer"
          ></textarea>
        </fieldset>
        <label>
          <input
            type="checkbox"
            name="terms"
            id="terms"
            checked={formData.terms}
            onChange={(e) =>
              setFormData({ ...formData, terms: e.target.checked })
            }
          />
          Jeg accepterer hermed Overlooks betingelser
        </label>
        <button
          type="submit"
          disabled={!formData.terms}
        >
          Send reservation
        </button>
      </form>
    )
  }
}
