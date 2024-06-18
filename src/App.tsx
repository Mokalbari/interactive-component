import { useState } from 'react'

import './App.css'

import ThankYou from './pages/ThankYou'
import RatingPage from './pages/RatingPage'

const App: React.FC = () => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null)
  const [submitState, setSubmitState] = useState<boolean>(false)

  return (
    <main className="card">
      {!submitState ? (
        <RatingPage
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          submitState={submitState}
          setSubmitState={setSubmitState}
        />
      ) : (
        <ThankYou selectedNumber={selectedNumber} />
      )}
    </main>
  )
}

export default App
