import Link from "next/link"
import { Fragment } from "react"
// import Slider from "react-slick";

 
const LatestVideos = () => {

  const myData : any = [
    {
      "title": "Teens with eczema may not follow prescribed…",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-7-1.jpg"
    },
    {
      "title": "Seven Argentinians detained after fighting at World…",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-1-4.jpg"
    },
    {
      "title": "SEC judge appointments unconstitutional, U.S. high…",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-10-6.jpg"
    },
    {
      "title": "Britain’s May pledges 20 billion extra pounds…",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-7-2.jpg"
    } ,{
      "title": "Stigma May Keep Women From Using HIV-Prevention Drugs",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-7-4.jpg"
    },
    {
      "title": "Turkey’s Erdogan Says To Slash Number Of Ministries, Speed Up Decisions",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-8-7.jpg"
    },
    {
      "title": "Tesla Accuses Former Employee Of Hacking And Transferring Data",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-9.jpg"
    },
    {
      "title": "Major League Baseball Notebook: MLB Suspends Osuna 75 Games",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-6-3.jpg"
    },
    {
      "title": "U.S. Lawmakers Want Google To Reconsider Links To China’s Huawei",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-11-5.jpg"
    },
    {
      "title": "After Law Change, Greek Medicinal Users Hope To Enter Cannabis Business",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-6-1.jpg"
    },
    {
      "title": "U.S. Medical Device Firm ElectroCore IPO Price Set At $15 Per Share",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-2-4.jpg"
    },
    {
      "title": "Firefighters Quell Big Blaze Near London’s Euston Train Station",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-9-6.jpg"
    }
  ]


    const splitArray = (array : Array<any>) : Array<any> => {
      let chunk = []

      while (array.length > 0) {
        chunk.push(array.splice(0,4))     
      }
      console.log(chunk);
      

      return chunk
      
    }


  //   const settings = {
  //     rows: 1,
  //     dots: false,
  //     arrows: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 5000,
  //     cssEase: "linear",
  //     beforeChange: (current, next) => setCurrentSide(next)

  // };

//   const settings = {
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     dots: false,
//     arrows: true,
//     focusOnSelect: true,
//     responsive: [
//     {
//         breakpoint: 479,
//         settings: {
//             slidesToScroll: 1,
//             slidesToShow: 2,
//         }
//     }
//     ]
// };


               

    return <div className=" bs-listing bs-listing-listing-thumbnail-2 bs-listing-single-tab pagination-animate">
      
    <p className="section-heading sh-t5 sh-s1 main-term-none">
      <span className="h-text main-term-none main-link">
        Latest Videos </span>
    </p>


    <div className="bs-slider-items-container bs-slider-initialized bs-slider-slider bs-slider-dotted slick-ready" data-slider-animation-speed={750} data-slider-autoplay={1} data-slider-control-dots="style-1" data-slider-control-next-prev="off" data-autoplayspeed={12000}>
      <div aria-live="polite" className="bs-slider-list draggable">
        <div className="bs-slider-track" style={{opacity: 1, width: '1680px', transform: 'translate3d(-0px, 0px, 0px)'}} role="listbox">
        
        
          { splitArray(myData).map((articale: any, articaleIndex: number) => {

         return ( <div key={articaleIndex} className="bs-pagination-wrapper main-term-none slider bs-slider-item bs-items-3 bs-slider-slide bs-slider-cloned" data-bs-slider-index={-1} style={{ marginLeft: '25px', width: '311px' }} aria-hidden="true" tabIndex={-1}>
          <div className="listing listing-thumbnail listing-tb-2 bs-scolumns bs-columns-2 bsw-5 ">

                {   articale.map((art: any, artIndex: number) => {

                return (              
                 
                      <div key={artIndex} className="post-342 type-post format-standard has-post-thumbnail   listing-item listing-item-thumbnail listing-item-tb-2 main-term-7">
                      
                        <div className="item-inner clearfix">

                          <div className="featured featured-type-featured-image">
                            <Link href="/category">
                                <div title={art.title} className="img-holder" tabIndex={-1} style={{ backgroundImage: `url(${art.img})`}}></div>
                            </Link>
                          
                          </div>

                          <p className="title"> <Link className="post-url" href="/category" title={art.title} tabIndex={-1}><span className="post-title">{art.title}</span></Link>
                          </p>

                        </div>
                      </div> 

                   
                  
              
              )


              }) }

              
              </div>
              </div> )

          })

        }
        
        
        
           {/* <div className="post-368 type-post format-video has-post-thumbnail   listing-item listing-item-thumbnail listing-item-tb-2 main-term-8">
                        <div className="item-inner clearfix">
                          <div className="featured featured-type-featured-image">
                            <a title="Ex-Vatican diplomat admits guilt at trial for child pornography" data-src="https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-3-6-210x136.jpg" data-bs-srcset="{&quot;baseurl&quot;:&quot;https:\/\/demo.betterstudio.com\/publisher\/newspaper-daily\/wp-content\/uploads\/sites\/105\/2018\/06\/&quot;,&quot;sizes&quot;:{&quot;86&quot;:&quot;img-3-6-86x64.jpg&quot;,&quot;210&quot;:&quot;img-3-6-210x136.jpg&quot;,&quot;279&quot;:&quot;img-3-6-279x220.jpg&quot;,&quot;357&quot;:&quot;img-3-6-357x210.jpg&quot;,&quot;750&quot;:&quot;img-3-6-750x430.jpg&quot;,&quot;900&quot;:&quot;img-3-6.jpg&quot;}}" className="img-holder" href="https://demo.betterstudio.com/publisher/newspaper-daily/ex-vatican-diplomat-admits-guilt-at-trial-for-child-pornography/" tabIndex={-1} />
                            <span className="format-icon format-video"><span className="bf-icon bf-icon-svg  fa fa-play"><svg className="bf-svg-tag">
                              <use xlinkHref="#fa-play">
                              </use>
                            </svg></span></span>
                          </div>
                          <p className="title"> <a className="post-url" href="https://demo.betterstudio.com/publisher/newspaper-daily/ex-vatican-diplomat-admits-guilt-at-trial-for-child-pornography/" title="Ex-Vatican diplomat admits guilt at trial for child pornography" tabIndex={-1}>
                            <span className="post-title">
                              Ex-Vatican diplomat admits guilt at
                              trial for child… </span>
                          </a>
                          </p>
                        </div>
                      </div>  */}

        
         
         
         </div>
      </div>
      {/* <div className="bs-slider-controls main-term-none" role="toolbar">
        <ul className="bs-slider-dots bs-slider-dots-style-1" style={{}} role="tablist">
          <li  aria-hidden="true" role="presentation" aria-selected="true" aria-controls="navigation00" id="bs-slider--slide00"><span className="bts-bs-dots-btn">1</span></li>
          <li aria-hidden="true" role="presentation" aria-selected="false" aria-controls="navigation01" id="bs-slider--slide01" ><span className="bts-bs-dots-btn">2</span></li>
          <li aria-hidden="false" role="presentation" aria-selected="false" aria-controls="navigation02" id="bs-slider--slide02" className="bs-slider-active"><span className="bts-bs-dots-btn">3</span></li>
        </ul>
      </div> */}
    </div>
  </div>
 
}
  
export default LatestVideos