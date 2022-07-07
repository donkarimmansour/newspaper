import Image from "next/image"

const Navbar = () => {



   const toggleMenu = () => {
       const body: any = document.querySelector("body")
       const overlay: any = document.querySelector(".off-canvas-overlay")
       body.classList.toggle("off-canvas-menu-open")
       body.classList.toggle("off-canvas-scroll")
       overlay.style.display = (overlay.style.display === "block") ? "none" : "block"
       
   }


 

    return <>
    <a className="off-canvas-overlay" style={{display: "none"}} onClick={toggleMenu}></a>

    <div className="off-canvas-container left skin-white ">

        <div className="off-canvas-inner">

            <span className="canvas-close" onClick={toggleMenu}><i/></span>

            <div className="off-canvas-header">
                <div className="logo">
                    <a href="https://demo.betterstudio.com/publisher/newspaper-daily/">
                        <img src="/assets/imgs/off-canvas-logo.png" alt="Newspaper Daily" />
                    </a>
                </div>
                <div className="site-description">The best magazine theme ever was built for WordPress.</div>
            </div>

            <div className="off-canvas-search">
                <form role="search" method="get" action="https://demo.betterstudio.com/publisher/newspaper-daily">
                    <input type="text" name="s"  placeholder="Search..."/>
                    <span className="bf-icon bf-icon-svg  fa fa-search">
                        <svg className="bf-svg-tag">
                            <use xlinkHref="#fa-search"/>
                        </svg>
                        <svg width={0}
                            height={0}
                            className="hidden">
                            <symbol viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" id="fa-search">
                                <path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"></path>
                            </symbol>
                        </svg>
                    </span>
                </form>
            </div>
            <div className="off-canvas-menu">
                <ul className="menu clearfix bsm-initialized">
                    <li id="menu-item-443" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-179 current_page_item better-anim-fade menu-item-443">
                        <a href="https://demo.betterstudio.com/publisher/newspaper-daily/" aria-current="page">News</a>
                    </li>
                    <li id="menu-item-10" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-2 better-anim-fade menu-item-10">
                        <a href="https://demo.betterstudio.com/publisher/newspaper-daily/category/business/">Business</a>
                    </li>
                    <li id="menu-item-11" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-3 better-anim-fade menu-item-11">
                        <a href="https://demo.betterstudio.com/publisher/newspaper-daily/category/health/">Health</a>
                    </li>
                    <li id="menu-item-12" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-4 better-anim-fade menu-item-12">
                        <a href="https://demo.betterstudio.com/publisher/newspaper-daily/category/politics/">Politics</a>
                    </li>
                    <li id="menu-item-13" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-5 better-anim-fade menu-item-13">
                        <a href="https://demo.betterstudio.com/publisher/newspaper-daily/category/sports/">Sports</a>
                    </li>
                    <li id="menu-item-14" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-6 better-anim-fade menu-item-14">
                        <a href="https://demo.betterstudio.com/publisher/newspaper-daily/category/style/">Style</a>
                    </li>
                    <li id="menu-item-15" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-7 better-anim-fade menu-item-15">
                        <a href="https://demo.betterstudio.com/publisher/newspaper-daily/category/tech/">Tech</a>
                    </li>
                    <li id="menu-item-16" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-8 better-anim-fade menu-item-16">
                        <a href="https://demo.betterstudio.com/publisher/newspaper-daily/category/travel/">Travel</a>
                    </li>
                    <li id="menu-item-17" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-term-9 better-anim-fade menu-item-17">
                        <a href="https://demo.betterstudio.com/publisher/newspaper-daily/category/world/">World</a>
                    </li>
                </ul>
            </div>
            <div className="off_canvas_footer">
                <div className="off_canvas_footer-info entry-content">
                    <div className="  better-studio-shortcode bsc-clearfix better-social-counter style-button colored in-4-col">
                        <ul className="social-list bsc-clearfix">
                            <li className="social-item instagram">
                                <a rel="noreferrer" href="https://instagram.com/betterstudio" target="_blank">
                                    <span className="bf-icon bf-icon-svg item-icon bsfi bsfi-instagram">
                                        <svg className="bf-svg-tag">
                                            <use xlinkHref="#bsfi-instagram"/>
                                        </svg>
                                        <svg width={0}
                                            height={0}
                                            className="hidden">
                                            <symbol xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" id="bsfi-instagram">
                                                <defs>
                                                    <clipPath id="b">
                                                        <rect width={30}
                                                            height={30}/>
                                                    </clipPath>
                                                </defs>
                                                <g id="a" clipPath="url(#b)">
                                                    <path d="M21.035,0H8.965A8.928,8.928,0,0,0,0,8.965v12.07A8.928,8.928,0,0,0,8.965,30h12.07A8.928,8.928,0,0,0,30,21.035V8.965A8.928,8.928,0,0,0,21.035,0Zm5.918,21.035a5.9,5.9,0,0,1-5.918,5.918H8.965a5.9,5.9,0,0,1-5.918-5.918V8.965A5.9,5.9,0,0,1,8.965,3.047h12.07a5.9,5.9,0,0,1,5.918,5.918ZM15,7.266A7.734,7.734,0,1,0,22.734,15,7.727,7.727,0,0,0,15,7.266Zm0,12.48A4.746,4.746,0,1,1,19.746,15,4.726,4.726,0,0,1,15,19.746ZM24.609,7.324a1.846,1.846,0,0,1-3.691,0,1.846,1.846,0,1,1,3.691,0Z"></path>
                                                </g>
                                            </symbol>
                                        </svg>
                                    </span>
                                    <span className="item-title">
                                        Followers
                                    </span>
                                </a>
                            </li>
                            <li className="social-item facebook">
                                <a rel="noreferrer" href="https://www.facebook.com/BetterSTU" target="_blank">
                                    <span className="bf-icon bf-icon-svg item-icon bsfi bsfi-facebook">
                                        <svg className="bf-svg-tag">
                                            <use xlinkHref="#bsfi-facebook"/>
                                        </svg>
                                        <svg width={0}
                                            height={0}
                                            className="hidden">
                                            <symbol xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" id="bsfi-facebook">
                                                <defs>
                                                    <clipPath id="b">
                                                        <rect width={30}
                                                            height={30}/>
                                                    </clipPath>
                                                </defs>
                                                <g id="a" clipPath="url(#b)">
                                                    <path d="M31.273,4H6.727A2.727,2.727,0,0,0,4,6.727V31.273A2.727,2.727,0,0,0,6.727,34H20.364V21.727H16.273V17.636h4.091v-2.2c0-4.159,2.026-5.985,5.483-5.985a20.014,20.014,0,0,1,2.945.179v3.912H26.435c-1.467,0-1.98.775-1.98,2.343v1.748h4.3l-.584,4.091H24.455V34h6.818A2.727,2.727,0,0,0,34,31.273V6.727A2.727,2.727,0,0,0,31.273,4Z" transform="translate(-4 -4)"/>
                                                </g>
                                            </symbol>
                                        </svg>
                                    </span>
                                    <span className="item-title">
                                        Likes
                                    </span>
                                </a>
                            </li>
                            <li className="social-item twitter">
                                <a rel="noreferrer" href="https://twitter.com/BetterSTU" target="_blank">
                                    <span className="bf-icon bf-icon-svg item-icon bsfi bsfi-twitter">
                                        <svg className="bf-svg-tag">
                                            <use xlinkHref="#bsfi-twitter"/>
                                        </svg>
                                        <svg width={0}
                                            height={0}
                                            className="hidden">
                                            <symbol xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" id="bsfi-twitter">
                                                <defs>
                                                    <clipPath id="b">
                                                        <rect width={30}
                                                            height={30}/>
                                                    </clipPath>
                                                </defs>
                                                <g id="a" clipPath="url(#b)">
                                                    <path d="M61,75.933a13.682,13.682,0,0,1-3.067,3.133v.8A15.532,15.532,0,0,1,57.2,84.8,16.1,16.1,0,0,1,55,89.533,18.379,18.379,0,0,1,51.533,93.6,16.013,16.013,0,0,1,46.6,96.333,17.211,17.211,0,0,1,40.467,97.4,16.94,16.94,0,0,1,31,94.6a9.986,9.986,0,0,0,1.467.133,12.318,12.318,0,0,0,7.667-2.667,5.85,5.85,0,0,1-3.6-1.2,5.988,5.988,0,0,1-2.2-3.067,9.368,9.368,0,0,0,1.2.133,4.482,4.482,0,0,0,1.6-.267A6.2,6.2,0,0,1,33.6,85.6a6.049,6.049,0,0,1-1.4-3.933V81.6a5.846,5.846,0,0,0,2.8.733A5.581,5.581,0,0,1,33,80.2a5.81,5.81,0,0,1-.733-2.933,6.261,6.261,0,0,1,.8-3.133A17.676,17.676,0,0,0,45.8,80.6a6.158,6.158,0,0,1,10.467-5.667A12.231,12.231,0,0,0,60.2,73.467a6.008,6.008,0,0,1-2.733,3.4A13.87,13.87,0,0,0,61,75.933Z" transform="translate(-31 -70)"/>
                                                </g>
                                            </symbol>
                                        </svg>
                                    </span>
                                    <span className="item-title">
                                        Followers
                                    </span>
                                </a>
                            </li>
                            <li className="social-item youtube">
                                <a rel="noreferrer" href="https://youtube.com/channel/betterstu" target="_blank">
                                    <span className="bf-icon bf-icon-svg item-icon bsfi bsfi-youtube">
                                        <svg className="bf-svg-tag">
                                            <use xlinkHref="#bsfi-youtube"/>
                                        </svg>
                                        <svg width={0}
                                            height={0}
                                            className="hidden">
                                            <symbol xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" id="bsfi-youtube">
                                                <defs>
                                                    <clipPath id="b">
                                                        <rect width={30}
                                                            height={30}/>
                                                    </clipPath>
                                                </defs>
                                                <g id="a" clipPath="url(#b)">
                                                    <path d="M-411-276h-18a6.006,6.006,0,0,1-6-6v-18a6.007,6.007,0,0,1,6-6h18a6.007,6.007,0,0,1,6,6v18A6.007,6.007,0,0,1-411-276Zm-14-23.245a1,1,0,0,0-1,1v15.486a1,1,0,0,0,1,1,1,1,0,0,0,.509-.142l13.041-7.743a.992.992,0,0,0,.489-.861.991.991,0,0,0-.489-.859L-424.49-299.1A1,1,0,0,0-425-299.245Z" transform="translate(435 306)"/>
                                                </g>
                                            </symbol>
                                        </svg>
                                    </span>
                                    <span className="item-title">
                                        Subscribers
                                    </span>
                                </a>
                            </li>
                            <li className="social-item rss">
                                <a rel="noreferrer" href="https://demo.betterstudio.com/publisher/newspaper-daily/feed/rss/" target="_blank">
                                    <span className="bf-icon bf-icon-svg item-icon bsfi bsfi-rss">
                                        <svg className="bf-svg-tag">
                                            <use xlinkHref="#bsfi-rss"/>
                                        </svg>
                                        <svg width={0}
                                            height={0}
                                            className="hidden">
                                            <symbol xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" id="bsfi-rss">
                                                <defs>
                                                    <clipPath id="b">
                                                        <rect width={30}
                                                            height={30}/>
                                                    </clipPath>
                                                </defs>
                                                <g id="a" clipPath="url(#b)">
                                                    <path d="M63.2,62.879a4.252,4.252,0,0,1-1.193,2.909A3.941,3.941,0,0,1,59.1,66.981a3.827,3.827,0,0,1-2.909-1.193,4.142,4.142,0,0,1,0-5.817A3.827,3.827,0,0,1,59.1,58.777a3.941,3.941,0,0,1,2.909,1.193A4.252,4.252,0,0,1,63.2,62.879Zm10.889,2.61a1.4,1.4,0,0,1-.373,1.044,1.2,1.2,0,0,1-.97.447H69.841a1.235,1.235,0,0,1-.895-.373,1.063,1.063,0,0,1-.447-.895,13.334,13.334,0,0,0-3.953-8.353,13.07,13.07,0,0,0-8.353-3.878,1.778,1.778,0,0,1-.82-.447A1.086,1.086,0,0,1,55,52.14V49.231a1.2,1.2,0,0,1,.447-.97,1,1,0,0,1,.895-.373h.149A18.217,18.217,0,0,1,62.98,49.6,18.957,18.957,0,0,1,68.5,53.482,18.015,18.015,0,0,1,72.377,59,19.919,19.919,0,0,1,74.092,65.489Zm10.889.075a1.028,1.028,0,0,1-.373.97,1.2,1.2,0,0,1-.97.447H80.581a1.571,1.571,0,0,1-.97-.373,1.376,1.376,0,0,1-.373-.895,25.027,25.027,0,0,0-2.163-8.726A23.858,23.858,0,0,0,64.994,44.905a23.488,23.488,0,0,0-8.726-2.163,1.063,1.063,0,0,1-.895-.447A1.376,1.376,0,0,1,55,41.4V38.342a1.2,1.2,0,0,1,.447-.97A1,1,0,0,1,56.342,37h.075a27.62,27.62,0,0,1,10.665,2.536,29.2,29.2,0,0,1,9.1,6.265,31.594,31.594,0,0,1,6.265,9.024A29.775,29.775,0,0,1,84.981,65.564Z" transform="translate(-55 -37)"/>
                                                </g>
                                            </symbol>
                                        </svg>
                                    </span>
                                    <span className="item-title">
                                        Subscribe
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
}

export default Navbar
