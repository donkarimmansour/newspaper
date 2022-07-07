import Image from "next/image"
import BottomFooter from "./BottomFooter"
import TopFooter from "./TopFooter"

const Footer = () => {
    return  <footer id="site-footer" className="site-footer full-width">
      {/* top footer */}
   <TopFooter/>


   {/* bottom footer */}
   <BottomFooter/>
    
  </footer>
  {/* .footer */}

}
  
export default Footer