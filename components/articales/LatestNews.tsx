import Link from "next/link"

 
const LatestNews = () => {

  const myData : any = [
    {
      "title": "Israel’s DreaMed gets FDA ok for diabetes management software",
      "date": "2 years ago"
    },

    {
      "title": "White House proposes merging Labor, Education departments",
      "date": "2 years ago"
    },
    {

      "title": "Taliban kill 16 Afghan soldiers, kidnap engineers after ceasefire ends",
      "date": "2 years ago"
    }, {

      "title": "Major League Baseball notebook: MLB suspends Osuna 75 games",
      "date": "2 years ago"
    }, {

      "title": "Ex-Airbus boss urges UK-French defense industry ties after Brexit",
      "date": "2 years ago"
    }, {

      "title": "Release of ‘Wolf Pack’ behind Spanish sex assault sparks protests",
      "date": "2 years ago"
    }, {

      "title": "Russia’s Kadyrov honors Egypt’s Salah at gala dinner: press service",
      "date": "2 years ago"
    }, {

      "title": "Implantable defibrillators may cause dilemmas for older patients",
      "date": "2 years ago"
    }, {
      "title": "Equity Office embraces flexible workspace, adopts EQ Office name",
      "date": "2 years ago"
    }, {

      "title": "Paris ends Autolib electric car sharing contract with Bollore",
      "date": "2 years ago"
    },
    {

      "title": "Saudi-led coalition faces tough battle for Yemen’s Hodeidah port",
      "date": "2 years ago"
    }

  ]



    return  <div className="wpb_column vc_column_container vc_col-sm-3 vc_col-has-fill">
    <div className="bs-vc-wrapper vc_custom_1529411123463">

      <div className="vc_custom_1529407806704 bs-listing bs-listing-listing-text-3 bs-listing-single-tab pagination-animate">

        <p className="section-heading sh-t5 sh-s1 main-term-none">
          <span className="h-text main-term-none main-link">
            Latest News </span>
        </p>

        
        <div className="bs-pagination-wrapper main-term-none more_btn bs-slider-first-item">
          <div className="listing listing-text listing-text-3 bs-columns-row-sep bs-columns-1">

              {
                myData.map((articale: any, artIndex: number) => {
                  return (
                    <div key={artIndex} className="post-253 type-post format-standard has-post-thumbnail   listing-item listing-item-text listing-item-text-3 main-term-4">
                      <div className="item-inner">
                        <p className="title"> <Link href="#" className="post-title post-url">{articale.title}</Link>
                        </p>
                        <div className="post-meta">
                          <span className="time"><time className="post-published updated" dateTime="2020-11-21T06:33:47+00:00">{articale.date}</time></span>
                        </div>
                      </div>
                    </div>

                  )
                })
              }
         
              
          </div>
        </div>


          <div className="bs-pagination bs-ajax-pagination more_btn main-term-none clearfix">

            <a rel="next" className="btn-bs-pagination"  title="Load More Posts">


              {/* <span className="loading" style={{ display: 'none' }}>
                <span className="bf-icon bf-icon-svg fa-spin fa-fw fa fa-refresh"><svg className="bf-svg-tag">
                  <use xlinkHref="#fa-refresh" />
                </svg><svg width={0} height={0} className="hidden">
                    <symbol viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" id="fa-refresh">
                      <path d="M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z">
                      </path>
                    </symbol>
                  </svg></span> </span>

              <span className="loading" style={{ display: 'none' }}>
                Loading ... </span>
              */}


              <span className="loaded txt">
                Load More Posts </span>

{/*               
              <span className="loaded icon">
                <span className="bf-icon bf-icon-svg  fa fa-angle-down"><svg className="bf-svg-tag">
                  <use xlinkHref="#fa-angle-down" />
                </svg><svg width={0} height={0} className="hidden">
                    <symbol viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" id="fa-angle-down">
                      <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z">
                      </path>
                    </symbol>
                  </svg></span> </span>

              <span className="no-more" style={{ display: 'none' }}>
                No More Posts </span> */}

            </a>

          </div>

        </div>

    </div>
  </div>

}
  
export default LatestNews