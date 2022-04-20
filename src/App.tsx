import { useEffect, useState } from 'react'

import { defaultData } from './data'
import Items from './Items'
import Search from './Search'
import { Track } from './types'

function App() {
  const [items, setItems] = useState<Partial<Track>[]>(defaultData)

  useEffect(() => {
    const intervalId = setInterval(() => {
      //Assign interval to a variable to clear it.
      setItems((prevItems) => [...prevItems.slice(1), prevItems[0]])
    }, 1000)

    return () => clearInterval(intervalId) //This is important to clear the interval when the component is unmounted and avoid memory leaks.
  }, [])

  return (
    <div className="App">
      <Search items={items} setItems={setItems} />
      <Items items={items} />
    </div>
  )
}

export default App
