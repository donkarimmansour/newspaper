import Image from "next/image"

const Mobileheader = () => {
    return      <div className="rh-header clearfix light deferred-block-exclude">
    <div className="bs-pinning-wrapper" style={{ height: '55px' }}>
      <div className="rh-container clearfix bs-pinning-block smart normal unpinned-no-transition">

        <div className="menu-container close">
          <span className="menu-handler"><span className="lines" /></span>
        </div>{/* .menu-container */}


        <div className="logo-container rh-img-logo">
          <a href="https://demo.betterstudio.com/publisher/newspaper-daily/" itemProp="url" rel="home">
            <Image layout='fill' src="/assets/imgs//mobile-logo.svg" alt="Newspaper Daily" /> </a>
        </div>{/* .logo-container */}

      </div>
    </div>{/* .rh-container */}
  </div>
  {/* .rh-header */}
}
  
export default Mobileheader