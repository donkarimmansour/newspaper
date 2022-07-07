import moment from "moment"

const TopBar = () => {
    return    <section className="topbar topbar-style-1 hidden-xs hidden-xs use-pretty-tabs">
    <div className="content-wrap">
      <div className="container">
        <div className="topbar-inner clearfix">
          <div className="section-links">


            <div className="  better-studio-shortcode bsc-clearfix better-social-counter style-button not-colored in-4-col">
              <ul className="social-list bsc-clearfix">
                <li className="social-item instagram"><a href="#" target="_blank" rel="noreferrer"> <span className="bf-icon bf-icon-svg item-icon bsfi bsfi-instagram"><svg className="bf-svg-tag">
                        <use xlinkHref="#bsfi-instagram" />
                      </svg></span><span className="item-title"> Followers </span> </a> </li>
                <li className="social-item facebook"><a href="#" target="_blank" rel="noreferrer"> <span className="bf-icon bf-icon-svg item-icon bsfi bsfi-facebook"><svg className="bf-svg-tag">
                        <use xlinkHref="#bsfi-facebook" />
                      </svg></span><span className="item-title"> Likes </span> </a> </li>
                <li className="social-item twitter"><a href="#" target="_blank" rel="noreferrer"> <span className="bf-icon bf-icon-svg item-icon bsfi bsfi-twitter"><svg className="bf-svg-tag">
                        <use xlinkHref="#bsfi-twitter" />
                      </svg></span><span className="item-title"> Followers </span> </a> </li>
                <li className="social-item youtube"><a href="#" target="_blank" rel="noreferrer"> <span className="bf-icon bf-icon-svg item-icon bsfi bsfi-youtube"><svg className="bf-svg-tag">
                        <use xlinkHref="#bsfi-youtube" />
                      </svg></span><span className="item-title"> Subscribers </span> </a>
                </li>
                <li className="social-item rss"><a href="#" target="_blank" rel="noreferrer"> <span className="bf-icon bf-icon-svg item-icon bsfi bsfi-rss"><svg className="bf-svg-tag">
                        <use xlinkHref="#bsfi-rss" />
                      </svg></span><span className="item-title"> Subscribe </span> </a> </li>
              </ul>

            </div>


            {/* <a className="topbar-sign-in behind-social" data-toggle="modal" data-target="#bsLoginModal">
              <span className="bf-icon bf-icon-svg  fa fa-user-circle"><svg className="bf-svg-tag">
                  <use xlinkHref="#fa-user-circle" />
                </svg><svg width={0} height={0} className="hidden">
                  <symbol viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" id="fa-user-circle">
                    <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                    </path>
                  </symbol>
                </svg></span>Sign in </a> */}

{/* 
              <div className="modal sign-in-modal fade" id="bsLoginModal" tabIndex={-1} role="dialog" style={{ display: 'none' }}>
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <span className="close-modal" data-dismiss="modal" aria-label="Close"><span className="bf-icon bf-icon-svg  bsfi bsfi-close"><svg className="bf-svg-tag">
                      <use xlinkHref="#bsfi-close" />
                    </svg><svg width={0} height={0} className="hidden">
                        <symbol xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" id="bsfi-close">
                          <defs>
                            <clipPath id="b">
                              <rect width={30} height={30} />
                            </clipPath>
                          </defs>
                          <g id="a" clipPath="url(#b)">
                            <g transform="translate(33.913 17.851)">
                              <path d="M16.63,45.221a2.4,2.4,0,0,0,1.668.7,2.29,2.29,0,0,0,1.668-.7l10.977-11,10.977,11a2.4,2.4,0,0,0,1.668.7,2.29,2.29,0,0,0,1.668-.7,2.314,2.314,0,0,0,0-3.3l-10.977-11,10.977-11a2.331,2.331,0,1,0-3.293-3.3l-10.977,11-10.977-11a2.331,2.331,0,1,0-3.293,3.3l10.977,11-10.977,11A2.243,2.243,0,0,0,16.63,45.221Z" transform="translate(-49.862 -33.776)" />
                            </g>
                          </g>
                        </symbol>
                      </svg></span></span>
                    <div className="modal-body">
                      <div id="form_67276_" className="bs-shortcode bs-login-shortcode ">
                        <div className="bs-login bs-type-login" style={{ display: 'block', visibility: 'visible' }}>
                          <div className="bs-login-panel bs-login-sign-panel bs-current-login-panel">
                            <form name="loginform" action="https://demo.betterstudio.com/publisher/newspaper-daily/wp-login.php" method="post">
                              <div className="login-header">
                                <span className="bf-icon bf-icon-svg login-icon main-color fa fa-user-circle"><svg className="bf-svg-tag">
                                  <use xlinkHref="#fa-user-circle" />
                                </svg></span>
                                <p>Welcome, Login to your account.</p>
                              </div>
                              <div className="login-field login-username">
                                <input type="text" name="log" id="form_67276_user_login" className="input" size={20} placeholder="Username or Email..." required />
                              </div>
                              <div className="login-field login-password">
                                <input type="password" name="pwd" id="form_67276_user_pass" className="input" size={20} placeholder="Password..." required />
                              </div>
                              <div className="login-field">
                                <a href="https://demo.betterstudio.com/publisher/publisher/newspaper-daily/wp-login.php?action=lostpassword&redirect_to=https%3A%2F%2Fdemo.betterstudio.com%2Fpublisher%2Fnewspaper-daily%2F" className="go-reset-panel">Forget password?</a>
                                <span className="login-remember">
                                  <input className="remember-checkbox" name="rememberme" type="checkbox" id="form_67276_rememberme" defaultValue="forever" />
                                  <label className="remember-label">Remember
                                    me</label>
                                </span>
                              </div>
                              <div className="login-field login-submit">
                                <input type="submit" name="wp-submit" className="button-primary login-btn" defaultValue="Log In" />
                                <input type="hidden" name="redirect_to" defaultValue="https://demo.betterstudio.com/publisher/newspaper-daily/" />
                              </div>
                            </form>
                          </div>
                          <div className="bs-login-panel bs-login-reset-panel">
                            <span className="go-login-panel">Sign in</span>
                            <div className="bs-login-reset-panel-inner">
                              <div className="login-header">
                                <span className="bf-icon bf-icon-svg login-icon fa fa-support"><svg className="bf-svg-tag">
                                  <use xlinkHref="#fa-support" />
                                </svg><svg width={0} height={0} className="hidden">
                                    <symbol viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" id="fa-support">
                                      <path d="M896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zm0 128q-190 0-361 90l194 194q82-28 167-28t167 28l194-194q-171-90-361-90zm-678 1129l194-194q-28-82-28-167t28-167l-194-194q-90 171-90 361t90 361zm678 407q190 0 361-90l-194-194q-82 28-167 28t-167-28l-194 194q171 90 361 90zm0-384q159 0 271.5-112.5t112.5-271.5-112.5-271.5-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5zm484-217l194 194q90-171 90-361t-90-361l-194 194q28 82 28 167t-28 167z">
                                      </path>
                                    </symbol>
                                  </svg></span>
                                <p>Recover your password.</p>
                                <p>A password will be e-mailed to you.</p>
                              </div>
                              <form name="lostpasswordform" id="form_67276_lostpasswordform" action="https://demo.betterstudio.com/publisher/wp-login.php?action=lostpassword" method="post">
                                <div className="login-field reset-username">
                                  <input type="text" name="user_login" className="input" placeholder="Username or Email..." required />
                                </div>
                                <div className="login-field reset-submit">
                                  <input type="hidden" name="redirect_to" />
                                  <input type="submit" name="wp-submit" className="login-btn" defaultValue="Send My Password" />
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>*/}
            </div> 



          <div className="section-menu">
            <div id="menu-top" className="menu top-menu-wrapper" role="navigation" itemScope itemType="https://schema.org/SiteNavigationElement">
             
                <nav className="top-menu-container">
                  <ul id="top-navigation" className="top-menu menu clearfix bs-pretty-tabs bs-pretty-tabs-initialized bsm-initialized">
                    <li id="topbar-date" className="menu-item menu-item-date">
                      <span className="topbar-date">{moment(new Date()).format("llll")}</span>
                    </li>
                    <li id="menu-item-446" className="menu-item menu-item-type-post_type menu-item-object-page better-anim-fade menu-item-446">
                      <a href="/subscribe">Newsletter</a>
                    </li>
                    <li id="menu-item-448" className="menu-item menu-item-type-post_type menu-item-object-page better-anim-fade menu-item-448">
                      <a href="/contact">Contact</a>
                    </li>

                    {/* <li id="menu-item-165" className="menu-item menu-item-type-custom menu-item-object-custom better-anim-fade menu-item-165">
                      <a href="https://betterstudio.com/publisher-wp-theme/pricing/">Purchase
                        Theme</a></li>

                    <li className="bs-pretty-tabs-container" style={{ display: 'none' }}><a href="#" className="bs-pretty-tabs-more">More <i className="fa fa-angle-down" aria-hidden="true" /></a>
                      <ul className="bs-pretty-tabs-elements sub-menu" />
                    </li> */}

                  </ul>
                </nav>


            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

}
  
export default TopBar