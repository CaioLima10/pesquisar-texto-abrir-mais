import './style.css'

const ValueInput = ({searchValue , hundleChange }) => {
  return (
    <>
        <input className='input'
        onChange={hundleChange}
        value={searchValue}
        type="search" 
        placeholder='type your search..'
        />
    </>
  )
}

export default ValueInput
