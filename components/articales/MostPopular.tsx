import Link from "next/link"

 
const MostPopular = () => {


  const myData : any = [
    {
      "title": "Implantable defibrillators may cause dilemmas for older patients",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-11-1-86x64.jpg"
    },
    {
      "title": "Paris ends Autolib electric car sharing contract with Bollore",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-6-5-86x64.jpg"
    },
    {
      "title": "Kushner meets with Egypt, Qatar leaders about Mideast plan",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-11-2-86x64.jpg"
    },
    {
      "title": "Release of ‘Wolf Pack’ behind Spanish sex assault sparks protests",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-5-6-86x64.jpg"
    },
    {
      "title": "Saudi-led coalition faces tough battle for Yemen’s Hodeidah port",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-11-7-86x64.jpg"
    },
    {
      "title": "Major League Baseball notebook: MLB suspends Osuna 75 games",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-6-3-86x64.jpg"
    },
    {
      "title": "Ex-Airbus boss urges UK-French defense industry ties after Brexit",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-1-86x64.jpg"
    },
    {
      "title": "Israel’s DreaMed gets FDA ok for diabetes management software",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-12-4-86x64.jpg"
    }
  ]

    return <div className=" bs-listing bs-listing-listing-thumbnail-3 bs-listing-single-tab">

    <p className="section-heading sh-t5 sh-s1 main-term-none">
      <span className="h-text main-term-none main-link">
        Most Popular </span>
    </p>


    <div className="listing listing-thumbnail listing-tb-3 bs-columns-1">


      {
                myData.map((articale: any, artIndex: number) => {
                  return (
                    <div key={artIndex} className="post-253 type-post format-standard has-post-thumbnail listing-item listing-item-thumbnail listing-item-tb-3 main-term-4">
                      <div className="item-inner clearfix">
                       
                        <div className="featured featured-type-featured-image">
                          <Link href="/articale">
                            <div title="Kushner meets with Egypt, Qatar leaders about Mideast plan" className="img-holder b-loaded" style={{ backgroundImage: `url(${articale.img})` }} ></div>

                          </Link>
                        </div>

                        <p className="title"> <Link className="post-url" href="#" title="Kushner meets with Egypt, Qatar leaders about Mideast plan">
                          <span className="post-title">{articale.title}</span>
                        </Link>
                        </p>

                      </div>
                    </div>

                  )
                })
              }


  
    </div>
  </div>

}
  
export default MostPopular