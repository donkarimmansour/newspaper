import Link from "next/link"

 
const ShortCategories = () => {



  const myData : any = [
    {
      "tag": "Business",
      "values": [

        {
          "title": "Iran Rules Out OPEC Deal As Russia, Saudi Push For Oil Output Hike",
          "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-7.jpg",
        },
        {
          "title": "U.S. court revives Dr Pepper challenge to Coca-Cola ‘zero’…",
        },
        {
          "title": "Tesla accuses former employee of hacking and transferring data"
        },
        {
          "title": "Chinese media denounces Trump trade moves as Beijing touts sincerity"
        },
        {
          "title": "Hyundai teams up with Volkswagen’s Audi to boost hydrogen cars"
        }
      ]
    },

    {
      "tag": "World",
      "values": [

        {
          "title": "Philippines Plans To Take Drug War To Schools With Searches, Testing",
          "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-10-7.jpg",
        },
        {
          "title": "British milestones in Holy Land set traditional foundation for royal…"
        },
       
        {
          "title": "We want to say yes – UK unveils Brexit residency rules for EU…",
        },
        {
          "title": "Turkey’s Erdogan says to slash number of ministries, speed up…",
        },
        {
          "title": "Hundreds block Pittsburgh interstate in police shooting protest",
        },
      ]
    },

    {
      "tag": "Sports",
      "values": [

        {
          "title": "Chicago Cubs Owners Interested In Controlling Stake In AC Milan",
          "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-11-3.jpg",
        },
        {
          "title": "Do you speak Belgium? English bonds Martinez’s…",
        },
        {
          "title": "Argentina asks Russia to deport fans filmed fighting at World Cup",
        },
        {
          "title": "Mexico keeping a level head for match against ‘robust’…",
        },
        {
          "title": "Technology, homework narrow talent gap, says Belgium’s Martinez",
        }
      ]
    },


    {
      "tag": "Politics",
      "values": [

        {
          "title": "Tent City For Migrant Children Puts Texas Border Town In Limelight",
          "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-10-7.jpg",
        },
        {
          "title": "U.S. House Republicans delay immigration vote until next week",
        },
        {
          "title": "House conservatives: unlikely any immigration bill will pass",
        },
        {
          "title": "SEC judge appointments unconstitutional, U.S. high court says",
        },
        {
          "title": "Trump to meet Jordan’s King Abdullah at White House June 25",
        },
      ]
    },

    
  ]

  console.log(myData);
  

    return    <div className="row vc_row wpb_row vc_row-fluid vc_custom_1529559638986">
    <div className="bs-vc-wrapper">



      
    {
          myData.map((articale: any, artIndex: number) => {

            return (


              <div key={artIndex} className="wpb_column bs-vc-column vc_column_container vc_col-sm-3">

              <div className="bs-vc-wrapper wpb_wrapper">
                <div className=" bs-listing bs-listing-listing-mix-3-3 bs-listing-single-tab">
      
                  <p className="section-heading sh-t2 sh-s1 main-term-9">
                    
                    <Link href="/category" className="main-link"><span className="h-text main-term-9">{articale.tag}</span></Link>
      
                  </p>

                  <div className="listing listing-mix-3-3 clearfix l-1-col">
                    <div className="item-inner">
                      <div className="row-1">
                        <div className="listing listing-grid-1 bs-columns-1">


                            {articale && articale.values && articale.values.length > 0 &&
                              <div className="post-403 type-post format-standard has-post-thumbnail   listing-item listing-item-grid listing-item-grid-1 main-term-9">
                                <div className="item-inner">
                                  <div className="featured clearfix">

                                  <Link href="/articale" >
                                    <div title="Philippines plans to take drug war to schools with searches, testing" className="img-holder b-loaded" style={{ backgroundImage: `url(${articale.values[0].img})` }} ></div>
                                  </Link>

                                  </div>
                                  <p className="title"> <Link href="/articale" className="post-title post-url">{articale.values[0].title}</Link>
                                  </p>
                                </div>
                              </div>

                            }


                        
                        </div>
                      </div>

                      <div className="row-2">
                        <div className="listing listing-text listing-text-2 bs-columns-1">


                            {articale && articale.values && articale.values.length > 0 &&

                             articale.values.slice(1).map((carticale: any, artIndex: number) => {
                                return (
                                  <div key={artIndex} className="post-404 type-post format-video has-post-thumbnail   listing-item listing-item-text listing-item-text-2 main-term-9">
                                    <div className="item-inner">
                                      <p className="title"> <Link href="/category" className="post-title post-url">{carticale.title}</Link>
                                      </p>
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
            </div>
           
           
           

            )
          })
        }










  
     
      </div>
  </div>

}
  
export default ShortCategories