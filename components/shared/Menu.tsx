import Link from "next/link"

const toggleMenu = () => {
  const body: any = document.querySelector("body")
  const overlay: any = document.querySelector(".off-canvas-overlay")
  body.classList.toggle("off-canvas-menu-open")
  body.classList.toggle("off-canvas-scroll")
  overlay.style.display = (overlay.style.display === "block") ? "none" : "block"


}

const toggleSearchBox = (e : any) => {    
    e.target.closest(".search-container").classList.toggle("open")
    e.target.closest(".search-container").classList.toggle("close")
    e.target.closest(".search-handler").querySelector("i").classList.toggle("fa-open")
    e.target.closest(".search-handler").querySelector("i").classList.toggle("fa-close")
    e.target.closest(".main-menu-container").classList.toggle("search-close")
    e.target.closest(".main-menu-container").classList.toggle("search-open")
}



const Menu = () => {
    return   <div className="bs-pinning-wrapper bspw-header-style-1" style={{height: '51px'}}>
    <div id="menu-main" className="menu main-menu-wrapper show-search-item show-off-canvas menu-actions-btn-width-2 bs-pinning-block smart normal unpinned-no-transition" role="navigation" itemScope itemType="https://schema.org/SiteNavigationElement">
      <div className="main-menu-inner">
        <div className="content-wrap">
          <div className="container">
            <nav className="main-menu-container bs-pretty-tabs bs-pretty-tabs-initialized">
              
              <ul id="main-navigation" className="main-menu menu clearfix bsm-initialized">
                <li id="menu-item-443" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-179 current_page_item better-anim-fade menu-item-443">
                  <Link href="/category" aria-current="page">News</Link></li>
                <li id="menu-item-10" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-2 better-anim-fade menu-item-10">
                  <Link href="/category">Business</Link>
                </li>
                <li id="menu-item-11" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-3 better-anim-fade menu-item-11">
                  <Link href="/category">Health</Link>
                </li>
                <li id="menu-item-12" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-4 better-anim-fade menu-item-12">
                  <Link href="/category">Politics</Link>
                </li>
                <li id="menu-item-13" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-5 better-anim-fade menu-item-13">
                  <Link href="/category">Sports</Link>
                </li>
                <li id="menu-item-14" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-6 better-anim-fade menu-item-14">
                  <Link href="/category">Style</Link>
                </li>
                <li id="menu-item-15" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-7 better-anim-fade menu-item-15">
                  <Link href="/category">Tech</Link>
                </li>
                <li id="menu-item-16" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-8 better-anim-fade menu-item-16">
                  <Link href="/category">Travel</Link>
                </li>
                <li id="menu-item-17" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-9 better-anim-fade menu-item-17">
                  <Link href="/category">World</Link>
                </li>
                {/* <li className="bs-pretty-tabs-container menu-item-has-children menu-item better-anim-fade" style={{display: 'none'}}><a href="#" className="bs-pretty-tabs-more">More</a>
                  <ul className="sub-menu bs-pretty-tabs-elements" />
                </li> */}
              </ul>{/* #main-navigation */}

                <div className="menu-action-buttons width-2">

                  <div className="off-canvas-menu-icon-container off-icon-left">
                    <div className="off-canvas-menu-icon" onClick={toggleMenu}>
                      <div className="off-canvas-menu-icon-el" />
                    </div>
                  </div>


                  <div className="search-container close">

                    <span className="search-handler" onClick={(e) => {toggleSearchBox(e)}}>
                      <span className="bf-icon the-icon icon-search" />
                      <i className="fa fa-refresh fa-spin fa-fw ajax-loading-icon fa-close" style={{ display: 'none' }} />
                    </span>
                  
                    <div className="search-box clearfix">
                      <form role="search" method="get" className="search-form clearfix" action="#">
                        <input type="search" className="search-field" placeholder="Search..." name="s" title="Search for:" autoComplete="off" />
                        <input type="submit" className="search-submit" defaultValue="Search" />
                      </form>{/* .search-form */}
                    </div>



                    {/* <div className="search-preview">
                      <div className="ajax-search-results-wrapper ajax-search-no-product ajax-search-fullwidth">
                        <div className="ajax-search-results">
                          <div className="ajax-ajax-posts-list">
                            <div className="clean-title heading-typo">
                              <span>Posts</span>
                            </div>
                            <div className="posts-lists" data-section-name="posts"> <span className="ajax-search-loading"><i className="fa fa-refresh fa-spin fa-fw ajax-loading-icon" /></span>
                            </div>
                          </div>
                          <div className="ajax-taxonomy-list">
                            <div className="ajax-categories-columns">
                              <div className="clean-title heading-typo">
                                <span>Categories</span>
                              </div>
                              <div className="posts-lists" data-section-name="categories">
                                <span className="ajax-search-loading"><i className="fa fa-refresh fa-spin fa-fw ajax-loading-icon" /></span>
                              </div>
                            </div>
                            <div className="ajax-tags-columns">
                              <div className="clean-title heading-typo">
                                <span>Tags</span>
                              </div>
                              <div className="posts-lists" data-section-name="tags"> <span className="ajax-search-loading"><i className="fa fa-refresh fa-spin fa-fw ajax-loading-icon" /></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                
                 */}
                
                  </div>
                </div>
            
            
            
            
            
            
            
            
            </nav>{/* .main-menu-container */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* .menu */}
 
}
  
export default Menu