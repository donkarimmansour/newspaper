import SquareAds from "../ads/SquareAds"
import HomeArticales from "./HomeArticales"
import LatestNews from "./LatestNews"
import LatestVideos from "./LatestVideos"
import Media from "./Media"
import MoreTopStoriesOne from "./MoreTopStoriesOne"
import MoreTopStoriesTwo from "./MoreTopStoriesTwo"
import MostPopular from "./MostPopular"
import RecentPosts from "./RecentPosts"
import ShortCategories from "./ShortCategories"
import Subscribe from "./Subscribe"

const MainContainer = () => {
    return   <main id="content" className="content-container">
    <div className="layout-1-col layout-no-sidebar">
      <div className="content-column">

        <div className="single-container bs-vc-content">
          <div className="row vc_row wpb_row vc_row-fluid">

            <div className="bs-vc-wrapper">
              <div className="wpb_column bs-vc-column vc_column_container vc_col-sm-8 bf-2-main-column-size">

                <div className="bs-vc-wrapper wpb_wrapper">

                  <div className="row vc_row vc_inner vc_row-fluid">
                    <LatestNews />
                    <HomeArticales />

                  </div>

                  <MoreTopStoriesOne />
                  <MoreTopStoriesTwo />


                </div>

              </div>
              <div className="wpb_column bs-vc-column vc_column_container vc_col-sm-4 sticky-column bs-vc-sidebar-column bf-2-primary-column-size">
                <div className="bs-vc-wrapper wpb_wrapper" style={{ position: 'static', left: 'auto', width: '311px' }}>

                  <SquareAds />
                  <MostPopular />
                  <Media />
                  <LatestVideos />
                  <RecentPosts />

                  {/* <div className="bsfp-widget bsfp-widget-stock-market better-studio-shortcode bsfp-scheme-light bsfp-clearfix  ">
                    <p className="section-heading sh-t5 sh-s1">
                      <span className="h-text">Stock Market</span>
                    </p>
                    <div className="bsfp-widgets-list bsfp-widget-11 bsfp-align-columned bsfp-columns-2">
                      <div className="bsfp-list-inner bsfp-clearfix">
                        <div className="bs-fp-error bs-fp-error-data-fetch">Cannot fetch data
                          from server.</div>
                      </div>
                    </div>
                  </div>
                   */}
                  <Subscribe />



                </div>
              </div>
            </div>
          </div>

          <ShortCategories />


        </div>
      </div>{/* .content-column */}
    </div>
  </main>
  
  {/* main */}
}
  
export default MainContainer