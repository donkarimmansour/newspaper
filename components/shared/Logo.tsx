const Logo = () => {
    return  <div className="header-inner">
    <div className="content-wrap">
      <div className="container">
        <div id="site-branding" className="site-branding">
          <h1 id="site-title" className="logo h1 img-logo">
            <a href="https://demo.betterstudio.com/publisher/newspaper-daily/" itemProp="url" rel="home">
              <img id="site-logo" src="/assets/imgs/header-logo.png"  layout='fill' alt="Publisher" data-bsrjs="https://cdn.betterstudio.com/publisher/sites/105/2018/06/header-logo-x2.png" />
              <span className="site-title">Publisher - The best magazine theme ever was built for
                WordPress.</span>
            </a>
          </h1>
        </div>{/* .site-branding */}
      </div>
    </div>
  </div>   
}
  
export default Logo