import '../styles/StarButton.modules.css'
import star from '../assets/icon-star.svg'

const StarButton = () => (
  <button type="button" className="star__button">
    <img src={star} alt="étoile" />
  </button>
)

export default StarButton
