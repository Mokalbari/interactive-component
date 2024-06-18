import '../styles/Submit.modules.css'

interface Submit {
  submitState: boolean
  setSubmitState: (boolean: boolean) => void
}

const Submit: React.FC<Submit> = ({ submitState, setSubmitState }) => {
  const handleClick = () => (submitState ? null : setSubmitState(true))

  return (
    <button type="button" className="submit__button" onClick={handleClick}>
      Submit
    </button>
  )
}

export default Submit
