import Link from "next/link"
import "../Styles/navbar.css"

const Navbar = () => {
  return (
    <div className="navConatiner">
        <div className="logo">
            Logo
        </div>
        <div className="navPart2">  
            <Link href="/">
                <p>Home</p>
            </Link>
            <Link href="/cources">
                <p>Cources</p>
            </Link>
            <Link href="/about-us">
                <p>About Us</p>
            </Link> 
            <Link href="/contact-us">
                <p>Contact Us</p>
            </Link> 
        </div>
    </div>
  )
}

export default Navbar
