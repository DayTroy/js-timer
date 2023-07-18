import { useEffect, useRef } from "react"

const Button = ({value}) => {

  // useEffect(() => {
  //   handleChange()
  // }, [])
  const ref = useRef(null);



  const handleChange = () => {
    ref.current.style.boxShadow = "2px 2px 0 0 #000"
    setTimeout(() => {
      ref.current.style.boxShadow = "4px 4px 0 0 #000"
    }, 100)
  }
    return (
      <button ref={ref} onClick={handleChange} className="custom-button">{value}</button>
    )
  }
  
  export default Button
  