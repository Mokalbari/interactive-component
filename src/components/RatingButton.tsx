import '../styles/RatingButton.modules.css'

interface RatingButtonProps {
  number: number
  selectedNumber: number | null
  setSelectedNumber: (number: number | null) => void
}

const RatingButton: React.FC<RatingButtonProps> = ({
  number,
  selectedNumber,
  setSelectedNumber,
}) => {
  const isSelected = number === selectedNumber
  const handleClick = () => {
    setSelectedNumber(isSelected ? null : number)
  }

  return (
    <button
      type="button"
      className={`rating__button ${isSelected && 'active'}`}
      onClick={handleClick}
    >
      {number}
    </button>
  )
}

export default RatingButton
