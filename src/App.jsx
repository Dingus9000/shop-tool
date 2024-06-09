import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {shops} from './Stores'

function App() {
  const [count, setCount] = useState(0)

  const bingo = (value) => {
    if ('CategoryName' in value) {
      value
      return value.items.map((cat) => (
        <>
          <p>{cat['CategoryName']}</p>
          {cat.items.map((bong) => (
            <>
              <p>{bong['CategoryName']}</p>
              
              {bingo(bong)}
            </>
          ))}
          
        </>
      ))
    } else {
      return <p>{value['Item Name']}</p>
    }
    return shops.adventuringSupplies[0].items[0].items
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        {shops.adventuringSupplies.map((bing) => (
          <>
          <p>{bing['CategoryName']}</p>
          {bing.items.map((bong) => (
            <>
              <p>{bong['CategoryName']}</p>
              
              {bingo(bong)}
            </>
          ))}
          </>
        ))}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
