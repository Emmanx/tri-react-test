import { debounce, orderBy } from 'lodash'
import { sampleAPIRes } from './data'
import { Track } from './types'

type Props = {
  items: Partial<Track>[]
  setItems: (items: Partial<Track>[]) => void
}

const Search = ({ items, setItems }: Props) => {
  // This debounce function is used to avoid the the API search function to be called too often when the input changes.
  const debouncedSearch = debounce(async (e) => {
    // PS using the sample api data to mimic the functionality because the API is blocked by CORS

    // const response = await fetch(
    //   `https://itunes.apple.com/search?term=${e.target.value}`
    // )
    // const data = await response.json()

    const sortedByCollectionName = orderBy(sampleAPIRes.results, [
      'collectionName',
    ])
      .slice(0, 5)
      .map((item) => ({ ...item, isFromAPI: true }))

    setItems([
      ...items.filter((item: any) => item.isDefaultData),
      ...sortedByCollectionName,
    ])
  }, 2000)

  return (
    <input
      className="searchbar"
      placeholder="Search band"
      onChange={debouncedSearch}
    />
  )
}

export default Search
