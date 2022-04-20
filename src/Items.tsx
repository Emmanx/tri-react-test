import { Track } from './types'

type Props = {
  items: Partial<Track>[]
}

const Items = ({ items }: Props) => {
  return (
    <>
      {items.slice(0, 5).map((item, index) => (
        <div className="card" key={index}>
          {item.collectionName}
        </div>
      ))}
    </>
  )
}

export default Items
