import { HotelCard } from './HotelCard'
import styles from './hotelgrid.module.scss'

export const HotelGrid = ({ heading, data, type }) => {
  return (
    <div className={styles.cardGridWrapper}>
      <h2>{heading}</h2>

      <ul className={styles.cardGrid}>
        {data.map((card) => {
          return (
            <HotelCard
              title={card.title}
              city={card.city[0]}
              text={card.text}
              image={card.image}
              slug={card.slug}
              type={type}
              key={card.id}
              land={card.country.toLowerCase()}
            />
          )
        })}
      </ul>
    </div>
  )
}
