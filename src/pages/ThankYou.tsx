import '../styles/ThankYou.module.css'
import phone from '../assets/illustration-thank-you.svg'

interface ThankYou {
  selectedNumber: number | null
}

const ThankYou: React.FC<ThankYou> = ({ selectedNumber }) => {
  return (
    <div className="thanks">
      <img src={phone} alt="A phone with a card" className="thanks__image" />
      <p className="thanks__rating">You selected {selectedNumber} out of 5</p>
      <h2 className="thanks__title">Thank you!</h2>
      <p className="thanks__paragraphe">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  )
}

export default ThankYou
