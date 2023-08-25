import DatePicker, { registerLocale } from 'react-datepicker'
import da from 'date-fns/locale/da' // the locale you want
registerLocale('da', da)
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import styles from '../form.module.scss'

export const DateInput = ({ callback, required }) => {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  function handleInputChange(e, name) {
    if (e === null) {
      return
    }
    if (new Date(startDate) > new Date(endDate)) {
      alert('Startdato skal være før slutdato')
      return
    }
    if (name === 'startDate') {
      setStartDate(e)
      callback(
        e,
        'from',
        e.toLocaleDateString('da-DK', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      )
    } else {
      setEndDate(e)
      callback(
        e,
        'to',
        e.toLocaleDateString('da-DK', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      )
    }
  }

  return (
    <div className="sidebyside">
      <label>
        Check in
        <DatePicker
          title="Fra"
          name="startDate"
          required={required}
          dateFormat="dd/MM/yyyy"
          locale={'da'}
          selected={startDate}
          minDate={new Date()}
          onChange={(e) => handleInputChange(e, 'startDate')}
        />
      </label>

      <label>
        Check out
        <DatePicker
          title="Til"
          name="endDate"
          locale={'da'}
          required={required}
          dateFormat="dd/MM/yyyy"
          selected={endDate}
          minDate={startDate}
          onChange={(e) => handleInputChange(e, 'endDate')}
        />
      </label>
    </div>
  )
}
