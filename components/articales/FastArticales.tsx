import Link from "next/link"

 
const FastArticales = () => {

  const myData : any = [
    {name : "Justin Campbell" , title : "Top U.S., Russia energy officials to meet on Tuesday: source" , "image" : "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-2-2-86x64.jpg"} ,
    {name : "Angelina Kenney" , title : "Firefighters quell big blaze near London’s Euston… " , "image" : "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-9-6-86x64.jpg"} ,
    {name : "Robert Holmes" , title : "China could strike back at Dow-listed firms over trade:…" , "image" : "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-3-86x64.jpg"}
  ]


    return  <div className="bs-injection bs-injection-after_header bs-injection-1-col bs-vc-content">
      <div className="row vc_row wpb_row vc_row-fluid">
        <div className="bs-vc-wrapper">
          <div className="wpb_column bs-vc-column vc_column_container vc_col-sm-12">
            <div className="bs-vc-wrapper wpb_wrapper">
              <div className="vc_custom_1529742798152 have_bg bs-listing bs-listing-listing-thumbnail-1 bs-listing-single-tab">




                <div className="listing listing-thumbnail listing-tb-1 bs-columns-3">
                  
                  {
                    myData.map((articale : any , artIndex : number) => {
                      return (
                        <div key={artIndex} className="post-244 type-post format-standard has-post-thumbnail   listing-item listing-item-thumbnail listing-item-tb-1 main-term-4">
                        <div className="item-inner clearfix">
                            <div className="featured featured-type-featured-image">
                              <Link href="/articale">
                                <div title="Top U.S., Russia energy officials to meet on Tuesday: source" className="img-holder b-loaded" style={{ backgroundImage: `url(${articale.image})` }} ></div>

                              </Link>
                            </div>
                          <p className="title">
                            <Link href="/articale" className="post-url post-title">{articale.title}</Link>
                          </p>
                          <div className="post-meta">
                            <Link href="/articale" title="Browse Author Articles" className="post-author-a">
                              <i className="post-author author"> {articale.name} </i>
                            </Link>
                          </div>
                        </div>
                      </div>
                 
                      )
                    })
                  }
               

             
              </div>


              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <style type="text/css" data-type="vc_shortcodes-custom-css" dangerouslySetInnerHTML={{__html: "\n                .vc_custom_1529742798152 {\n                    margin-bottom: 5px !important;\n                    padding-top: 20px !important;\n                    padding-right: 20px !important;\n                    padding-bottom: 20px !important;\n                    padding-left: 20px !important;\n                    background-color: #f5f5f5 !important;\n                }\n            " }} /> */}
    </div>


}
  
export default FastArticales