import StarButton from '../components/StarButton'
import Content from '../components/Content'
import RatingButton from '../components/RatingButton'
import Submit from '../components/Submit'

interface RatingPage {
  selectedNumber: number | null
  setSelectedNumber: (number: number | null) => void
  submitState: boolean
  setSubmitState: (boolean: boolean) => void
}

const RatingPage: React.FC<RatingPage> = ({
  selectedNumber,
  setSelectedNumber,
  submitState,
  setSubmitState,
}) => {
  const ratingLadder = [1, 2, 3, 4, 5]
  return (
    <>
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
      <Submit submitState={submitState} setSubmitState={setSubmitState} />
    </>
  )
}

export default RatingPage
