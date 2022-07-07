import Image from "next/image"
import Logo from "./Logo"
import Menu from "./Menu"
import TopBar from "./TopBar"

const Header = () => {
    return   <header id="header" className="site-header header-style-1 boxed" itemScope itemType="https://schema.org/WPHeader">
  
  
  
     {/* top bar */}
     <TopBar/>

     {/* logo */}
     <Logo/>

     {/* menu */}
     <Menu/>
  

    </header>
  
  {/* .header */}
}
  
export default Header