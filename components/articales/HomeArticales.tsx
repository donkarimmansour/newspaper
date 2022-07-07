import Image from "next/image"
import Link from "next/link"

const HomeArticales = () => {

  const myData : any = [
    {title : "Kushner meets with Egypt, Qatar leaders about Mideast plan" , desk : "Two weeks ago, Steven Mnuchin, the Treasury secretary, declared that the trade war with China was “on hold” and that the United States would temporarily holster its tariffs. Thereassuring comments calmed markets and raised hopes ... " , "image" : "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-11-2.jpg"} ,
    {title : "Ex-Airbus boss urges UK-French defense industry ties after…" , desk : "  Two weeks ago, Steven Mnuchin, the Treasury secretary, declared that the trade war with China was “on hold” and…" , "image" : "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-1.jpg"} ,
    {title : "Paris ends Autolib electric car sharing contract with…" , desk : "Two weeks ago, Steven Mnuchin, the Treasury secretary, declared that the trade war with China was “on hold” and…" , "image" : "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-6-5.jpg"},
    {title : "Implantable defibrillators may cause dilemmas for older…" , desk :"Two weeks ago, Steven Mnuchin, the Treasury secretary, declared that the trade war with  China was “on hold” and…" , "image" : "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-11-1.jpg"},
    {title : "Release of ‘Wolf Pack’ behind Spanish sex…" , desk : "Two weeks ago, Steven Mnuchin, the Treasury secretary, declared that the trade war with China was “on hold” and…" , "image" : "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-5-6.jpg"}
   ]


    return   <div className="wpb_column vc_column_container vc_col-sm-9">
    <div className="bs-vc-wrapper ">


      <div className=" bs-listing bs-listing-listing-classic bs-listing-single-tab">

        {myData && myData.length > 0 && 
        
        <div className="listing listing-classic listing-classic-1 bs-columns-row-sep  bs-columns-1">

           <div className="post-253 type-post format-standard has-post-thumbnail listing-item listing-item-classic listing-item-classic-1 main-term-4 bsw-7 ">
            <div className="listing-inner item-inner">

              <div className="featured clearfix">

              <Link href="/articale">
                   <div title="Kushner meets with Egypt, Qatar leaders about Mideast plan" className="img-holder b-loaded"  style={{backgroundImage: `url(${myData[0].image})` }} ></div>
              </Link>

              </div>

              <p className="title"> <Link href="/articale" className="post-title post-url">{myData[0].title}</Link></p>

              <div className="post-summary">{myData[0].desk}</div>

            </div>
          </div> 

        </div>

        
        }


        
      </div>


      <div className=" bs-listing bs-listing-listing-grid-1 bs-listing-single-tab">
        <div className="listing listing-grid listing-grid-1 bs-columns-row-sep bs-columns-2">

            {myData && myData.length > 1 && 

              myData.slice(1).map((articale: any, artIndex: number) => {
                return (
                  <div key={artIndex} className="post-425 type-post format-standard has-post-thumbnail   listing-item listing-item-grid listing-item-grid-1 main-term-2">

                    <div className="item-inner">
                      <div className="featured clearfix">

                        <Link href="/articale">
                          <div title="Ex-Airbus boss urges UK-French defense industry ties after Brexit" className="img-holder b-loaded" style={{ backgroundImage: `url(${articale.image})` }} ></div>
                        </Link>

                      </div>

                      <p className="title"> <Link href="/articale" className="post-title post-url">{articale.title}</Link></p>

                      <div className="post-summary">{articale.desc}</div>

                    </div>

                  </div>

                )
              })
            }
 
      
       </div>
      </div>
    </div>
  </div>

}
  
export default HomeArticales