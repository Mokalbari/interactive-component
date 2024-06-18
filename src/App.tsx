import { useState } from 'react'

import './App.css'
import RatingButton from './components/RatingButton'
import StarButton from './components/StarButton'
import Content from './components/Content'
import Submit from './components/Submit'

const App: React.FC = () => {
  const ratingLadder = [1, 2, 3, 4, 5]
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null)

  return (
    <main className="card">
      <StarButton />
      <Content />
      <div className="rating">
        {ratingLadder.map(number => (
          <RatingButton
            key={number}
            number={number}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        ))}
      </div>
      <Submit />
    </main>
  )
}

export default App
