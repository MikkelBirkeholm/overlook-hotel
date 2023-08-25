import { FoldOutCard } from './FoldOutCard'
import styles from './locations.module.scss'

export const CardGrid = ({ heading, data, type }) => {
  return (
    <div className={styles.cardGridWrapper}>
      <h2>{heading}</h2>
      <ul className={styles.cardGrid}>
        {data.map((card) => {
          return (
            <FoldOutCard
              title={card.title}
              text={card.text}
              image={card.image}
              slug={card.slug}
              type={type}
              key={card.id}
            />
          )
        })}
      </ul>
    </div>
  )
}
