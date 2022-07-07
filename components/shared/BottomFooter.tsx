import Link from "next/link"

const BottomFooter = () => {
    return   <div className="copy-footer">
    <div className="content-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">


            <div id="menu-footer" className="menu footer-menu-wrapper" role="navigation" itemScope itemType="https://schema.org/SiteNavigationElement">
              <nav className="footer-menu-container">
                <ul id="footer-navigation" className="footer-menu menu clearfix">
                  <li id="menu-item-444" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-179 current_page_item better-anim-fade menu-item-444">
                    <Link href="/category" aria-current="page">News</Link></li>
                  <li id="menu-item-164" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-9 better-anim-fade menu-item-164">
                    <Link href="/category">World</Link>
                  </li>
                  <li id="menu-item-108" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-4 better-anim-fade menu-item-108">
                    <Link href="/category">Politics</Link>
                  </li>
                  <li id="menu-item-106" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-2 better-anim-fade menu-item-106">
                    <Link href="/category">Business</Link>
                  </li>
                  <li id="menu-item-162" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-7 better-anim-fade menu-item-162">
                    <Link href="/category">Tech</Link>
                  </li>
                  <li id="menu-item-107" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-3 better-anim-fade menu-item-107">
                    <Link href="/category">Health</Link>
                  </li>
                  <li id="menu-item-109" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-5 better-anim-fade menu-item-109">
                    <Link href="/category">Sports</Link>
                  </li>
                  <li id="menu-item-110" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-6 better-anim-fade menu-item-110">
                    <Link href="/category">Style</Link>
                  </li>
                  <li id="menu-item-163" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-8 better-anim-fade menu-item-163">
                    <Link href="/category">Travel</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>



        <div className="row footer-copy-row">
          <div className="copy-1 col-lg-6 col-md-6 col-sm-6 col-xs-12">
            © 2022 - <a href="#">Publisher Theme</a>. All
            Rights Reserved. </div>
          <div className="copy-2 col-lg-6 col-md-6 col-sm-6 col-xs-12">
            Website Design: <a href="#">km</a> </div>
        </div>
      </div>
    </div>
  </div>
 
}
  
export default BottomFooter