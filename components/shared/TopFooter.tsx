import Image from "next/image"



const TopFooter = () => {

  const address : any = {"Email" : "info@yoursite.com" , "Phone" : "844-698-6394"}
  const myAdds = []

  for (const add in address) {
    myAdds.push(<>• {add}: {address[add]} <br /></>)
    
  }

    return   <div className="footer-widgets light-text bs-light-scheme">
    <div className="content-wrap">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">

            <aside id="sidebar-footer-1" className="sidebar" role="complementary" aria-label="Footer - Column 1 Sidebar" itemScope itemType="https://schema.org/WPSideBar">
              <div id="bs-about-1" className=" h-ni w-nt footer-widget footer-column-1 widget widget_bs-about">
                <div className="bs-shortcode bs-about ">
                  <h4 className="about-title">
                    <Image className="logo-image" layout='fill' src="/publisher/sites/105/2018/06/footer-logo.png" alt="" />
                  </h4>

                  <div className="about-text">
                    <p>{myAdds}</p>
                  </div>
 
                    <ul className="about-icons-list">
                      <li className="about-icon-item facebook"><a href="#" target="_blank" rel="noreferrer"><span className="bf-icon bf-icon-svg  bsfi bsfi-facebook"><svg className="bf-svg-tag">
                        <use xlinkHref="#bsfi-facebook" />
                      </svg></span></a></li>
                      <li className="about-icon-item twitter"><a href="#" target="_blank" rel="noreferrer"><span className="bf-icon bf-icon-svg  bsfi bsfi-twitter"><svg className="bf-svg-tag">
                        <use xlinkHref="#bsfi-twitter" />
                      </svg></span></a></li>
                      <li className="about-icon-item google-plus"><a href="#" target="_blank" rel="noreferrer"><span className="bf-icon bf-icon-svg  bsfi bsfi-google"><svg className="bf-svg-tag">
                        <use xlinkHref="#bsfi-google" />
                      </svg></span></a></li>
                      <li className="about-icon-item instagram"><a href="#" target="_blank" rel="noreferrer"><span className="bf-icon bf-icon-svg  bsfi bsfi-instagram"><svg className="bf-svg-tag">
                        <use xlinkHref="#bsfi-instagram" />
                      </svg></span></a></li>
                      <li className="about-icon-item youtube"><a href="#" target="_blank" rel="noreferrer"><span className="bf-icon bf-icon-svg  bsfi bsfi-youtube"><svg className="bf-svg-tag">
                        <use xlinkHref="#bsfi-youtube" />
                      </svg></span></a></li>
                    </ul>

                </div>
              </div>
            </aside>
          </div>

          <div className="col-sm-3">
            <aside id="sidebar-footer-2" className="sidebar" role="complementary" aria-label="Footer - Column 2 Sidebar" itemScope itemType="https://schema.org/WPSideBar">
              <div id="nav_menu-1" className=" h-ni w-t footer-widget footer-column-2 widget widget_nav_menu">
                <div className="section-heading sh-t1 sh-s1"><span className="h-text">Company</span>
                </div>
                <div className="menu-company-container">
                  <ul id="menu-company" className="menu">
                    <li id="menu-item-167" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-167">
                      <a href="#">About
                        the Publisher</a></li>
                    <li id="menu-item-447" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-447">
                      <a href="#">Contact</a>
                    </li>
                    <li id="menu-item-168" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-168">
                      <a href="#">Work
                        For Us</a></li>
                    <li id="menu-item-169" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-169">
                      <a href="#">Corrections
                        &amp; Clarifications</a></li>
                    <li id="menu-item-170" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-170">
                      <a href="#">Archive</a>
                    </li>
                    <li id="menu-item-171" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-171">
                      <a href="#">Partnership</a>
                    </li>
                    <li id="menu-item-172" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-172">
                      <a href="#">Press
                        Room</a></li>
                    <li id="menu-item-173" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-173">
                      <a href="#">Support
                        Center</a></li>
                    <li id="menu-item-174" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-174">
                      <a href="#">AMP
                        For Mobiles and Tablets</a></li>
                    <li id="menu-item-175" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-175">
                      <a href="#">Purchase
                        Publisher</a></li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>


          <div className="col-sm-3">
            <aside id="sidebar-footer-3" className="sidebar" role="complementary" aria-label="Footer - Column 3 Sidebar" itemScope itemType="https://schema.org/WPSideBar">
              <div id="nav_menu-2" className=" h-ni w-t footer-widget footer-column-3 widget widget_nav_menu">
                <div className="section-heading sh-t1 sh-s1"><span className="h-text">Ads</span></div>
                
                <div className="menu-ads-container">
                  <ul id="menu-links" className="menu">
                    <li id="menu-item-176" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-176">
                      <a href="#">Advertise</a>
                    </li>
                    <li id="menu-item-177" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-177">
                      <a href="#">Ad
                        Choices</a></li>
                    <li id="menu-item-178" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-178">
                      <a href="#">Advertise
                        Locally</a></li>
                    <li id="menu-item-180" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-180">
                      <a href="#">Place
                        a Classified Ad</a></li>
                    <li id="menu-item-181" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-181">
                      <a href="#">Customer
                        Service</a></li>
                    <li id="menu-item-182" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-182">
                      <a href="#">Sell
                        Your Business</a></li>
                    <li id="menu-item-183" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-183">
                      <a href="#">Sell
                        Your Home</a></li>
                    <li id="menu-item-184" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-184">
                      <a href="#">Commercial
                        Real Estate Ads</a></li>
                    <li id="menu-item-185" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-185">
                      <a href="#">Recruitment
                        &amp; Career Ads</a></li>
                    <li id="menu-item-186" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-186">
                      <a href="#">Manage
                        My Subscriptions</a></li>
                  </ul>

                  
                </div>
              </div>
            </aside> 
          </div>



          <div className="col-sm-3">
            <aside id="sidebar-footer-4" className="sidebar" role="complementary" aria-label="Footer - Column 4 Sidebar" itemScope itemType="https://schema.org/WPSideBar">
              <div id="nav_menu-3" className=" h-ni w-t footer-widget footer-column-4 widget widget_nav_menu">
                <div className="section-heading sh-t1 sh-s1"><span className="h-text">Links</span></div>
                <div className="menu-links-container">
                  <ul id="menu-links" className="menu">
                    <li id="menu-item-187" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-187">
                      <a href="#">Terms
                        and Conditions</a></li>
                    <li id="menu-item-188" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-188">
                      <a href="#">Privacy
                        Policy</a></li>
                    <li id="menu-item-189" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-189">
                      <a href="#">Cookie
                        Policy</a></li>
                    <li id="menu-item-190" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-190">
                      <a href="#">Copyright
                        Policy</a></li>
                    <li id="menu-item-191" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-191">
                      <a href="#">Frequently
                        Asked Questions</a></li>
                    <li id="menu-item-192" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-192">
                      <a href="#">Get
                        the e-Newspaper</a></li>
                    <li id="menu-item-193" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-193">
                      <a href="#">Help
                        Center</a></li>
                    <li id="menu-item-194" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-194">
                      <a href="#">Partnership</a>
                    </li>
                    <li id="menu-item-195" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-195">
                      <a href="#">Site
                        Map</a></li>
                    <li id="menu-item-196" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-196">
                      <a href="#">RSS
                        Feeds</a></li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>



          
        </div>
      </div>
    </div>
  </div>
 
}
  
export default TopFooter