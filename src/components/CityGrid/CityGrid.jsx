import { CityCard } from './CityCard'
import styles from './citygrid.module.scss'

export const CityGrid = ({ data, land }) => {
  return (
    <div className={styles.cardGridWrapper}>
      <ul className={styles.cardGrid}>
        {data.map((card) => {
          return (
            <CityCard
              title={card.title}
              text={card.text}
              image={card.image}
              slug={card.city.slug}
              key={card.id}
              land={land}
            />
          )
        })}
      </ul>
    </div>
  )
}
