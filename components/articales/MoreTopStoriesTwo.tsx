import Link from "next/link"
import LatestVideos from "./LatestVideos"

 
const MoreTopStoriesTwo = () => {

  const myData : any = [
    {
      "title": "Walking ability before heart surgery tied to brain function…",
      "tag": "Health",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-2-1-357x210.jpg"
    },
    {
      "title": "Ex-Vatican diplomat admits guilt at trial for child…",
      "tag": "Travel",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-3-6-357x210.jpg"
    },
    {
      "title": "Taliban kill 16 Afghan soldiers, kidnap engineers after…",
      "tag": "World",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-6-7-357x210.jpg"
    },
    {
      "title": "Russia’s Kadyrov honors Egypt’s Salah at gala…",
      "tag": "Sports",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-9-3-357x210.jpg"
    },
    {
      "title": "Ericsson needs industries to embrace 5G to underpin its…",
      "tag": "Tech",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-7-5-357x210.jpg"
    },
    {
      "title": "London court chides FCA as it rejects former UBS…",
      "tag": "Business",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-10-357x210.jpg"
    }
  ]



    return   <div className=" bs-listing bs-listing-modern-grid-listing-3 bs-listing-single-tab">

    <p className="section-heading sh-t5 sh-s1 main-term-none">
      <span className="h-text main-term-none main-link">
        More Top Stories </span>
    </p>

    <div className="listing listing-modern-grid listing-modern-grid-3  slider-overlay-simple-gr bs-columns-3">


    

      {
          myData.map((articale: any, artIndex: number) => {

            return (


              <div key={artIndex} className="post-397 type-post format-standard has-post-thumbnail  listing-item-1 listing-item listing-mg-item listing-mg-3-item main-term-9 bsw-300">
               
                <div className="item-content">

                <Link href="/articale">
                   <div title="Taliban kill 16 Afghan soldiers, kidnap engineers after ceasefire ends"  className="img-cont b-loaded"  style={{ backgroundImage: `url(${articale.img})`}} ></div>
                </Link>
                  
                  <div className="content-container">

                    <div className="term-badges floated"><span className="term-badge term-9"><Link href="/category">{articale.tag}</Link></span></div>

                    <p className="title"> <Link href="/articale" className="post-title post-url">{articale.title}</Link></p>

                    <div className="post-meta">
                       
                      <Link href="/articale" title="Browse Author Articles" className="post-author-a">
                        <i className="post-author author">{articale.name}</i>
                      </Link>

                      <span className="time"><time className="post-published updated" dateTime="2020-10-22T06:33:47+00:00">{articale.desk}</time></span>
                     
                     
                      {/* <Link href="/articale" title="Leave a comment on: “Taliban kill 16 Afghan soldiers, kidnap engineers after ceasefire ends”" className="comments"><span className="bf-icon bf-icon-svg  fa fa-comments-o"><svg className="bf-svg-tag">
                        <use xlinkHref="#fa-comments-o" />
                      </svg><svg width={0} height={0} className="hidden">
                          <symbol viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" id="fa-comments-o">
                            <path d="M704 384q-153 0-286 52t-211.5 141-78.5 191q0 82 53 158t149 132l97 56-35 84q34-20 62-39l44-31 53 10q78 14 153 14 153 0 286-52t211.5-141 78.5-191-78.5-191-211.5-141-286-52zm0-128q191 0 353.5 68.5t256.5 186.5 94 257-94 257-256.5 186.5-353.5 68.5q-86 0-176-16-124 88-278 128-36 9-86 16h-3q-11 0-20.5-8t-11.5-21q-1-3-1-6.5t.5-6.5 2-6l2.5-5 3.5-5.5 4-5 4.5-5 4-4.5q5-6 23-25t26-29.5 22.5-29 25-38.5 20.5-44q-124-72-195-177t-71-224q0-139 94-257t256.5-186.5 353.5-68.5zm822 1169q10 24 20.5 44t25 38.5 22.5 29 26 29.5 23 25q1 1 4 4.5t4.5 5 4 5 3.5 5.5l2.5 5 2 6 .5 6.5-1 6.5q-3 14-13 22t-22 7q-50-7-86-16-154-40-278-128-90 16-176 16-271 0-472-132 58 4 88 4 161 0 309-45t264-129q125-92 192-212t67-254q0-77-23-152 129 71 204 178t75 230q0 120-71 224.5t-195 176.5z">
                            </path>
                          </symbol>
                        </svg></span>0</Link> */}


                    </div>
                  </div>
                </div>
              </div>


            )
          })
        }

    </div>
  </div>

}
  
export default MoreTopStoriesTwo