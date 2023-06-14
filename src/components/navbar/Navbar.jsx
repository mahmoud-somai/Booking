import "./navbar.css"
import { Link } from "react-router-dom"
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
    <Link to="/" >
      <img src={logo} alt="" /> 
    </Link>

</div>
  )
}

export default Navbar