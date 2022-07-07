import Link from "next/link"

 
const MoreTopStoriesOne = () => {
  const myData : any = [
    {

      "title": "Major League Baseball notebook: MLB suspends Osuna 75 games",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-6-3-357x210.jpg",
      "date": "Oct 31, 2020",
      "name": "James Whitfield",
      "desk": "Two weeks ago, Steven Mnuchin, the Treasury secretary, declared that the trade war with China was “on hold” and that the United States would temporarily holster its tariffs. The reassuring comments calmed markets and raised hopes ..."
    },
    {
     
      "title": "Saudi-led coalition faces tough battle for Yemen’s Hodeidah port",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-11-7-357x210.jpg",
      "date": "Nov 6, 2020",
      "name": "Angelina Kenney",
      "desk": "Two weeks ago, Steven Mnuchin, the Treasury secretary, declared that the trade war with China was “on hold” and that the United States would temporarily holster its tariffs. The reassuring comments calmed markets and raised hopes ..."
    },
    {
     
      "title": "Equity Office embraces flexible workspace, adopts EQ Office name",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-6-357x210.jpg",
      "date": "Oct 28, 2020",
      "name": "Robert Holmes",
      "desk": "Two weeks ago, Steven Mnuchin, the Treasury secretary, declared that the trade war with China was “on hold” and that the United States would temporarily holster its tariffs. The reassuring comments calmed markets and raised hopes ..."
    },
    {
    
      "title": "Israel’s DreaMed gets FDA ok for diabetes management software",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-12-4-357x210.jpg",
      "date": "Nov 3, 2020",
      "name": "Charles Kessler",
      "desk": "Two weeks ago, Steven Mnuchin, the Treasury secretary, declared that the trade war with China was “on hold” and that the United States would temporarily holster its tariffs. The reassuring comments calmed markets and raised hopes ..."
    },
    {
    
      "title": "White House proposes merging Labor, Education departments",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/img-10-2-357x210.jpg",
      "date": "Oct 25, 2020",
      "name": "Justin Campbell",
      "desk": "Two weeks ago, Steven Mnuchin, the Treasury secretary, declared that the trade war with China was “on hold” and that the United States would temporarily holster its tariffs. The reassuring comments calmed markets and raised hopes ..."
    }
  ]



    return <div className="vc_custom_1529741933580 bs-listing bs-listing-listing-blog-1 bs-listing-single-tab">


    <p className="section-heading sh-t5 sh-s1 main-term-none">
      <span className="h-text main-term-none main-link">
        More Top Stories </span>
    </p>


    <div className="listing listing-blog listing-blog-5 bs-columns-1">


        {
          myData.map((articale: any, artIndex: number) => {

            return (


              <div key={artIndex} className="post-402 type-post format-standard has-post-thumbnail   listing-item listing-item-blog  listing-item-blog-5 main-term-9 bsw-9 ">
                <div className="item-inner clearfix">

                  <div className="featured clearfix">

                    <Link href="/articale">
                      <div title="Saudi-led coalition faces tough battle for Yemen’s Hodeidah port" className="img-holder b-loaded" style={{ backgroundImage: `url(${articale.img})` }} ></div>
                    </Link>
                    
                  </div>

                  <p className="title"> <Link href="/articale" className="post-title post-url">{articale.title}</Link></p>


                  <div className="post-meta">

                    <Link href="/articale" title="Browse Author Articles" className="post-author-a">
                      <i className="post-author author">{articale.name}</i>
                    </Link>

                    <span className="time"><time className="post-published updated" dateTime="2020-11-06T06:33:47+00:00">{articale.date}</time></span>
                  </div>

                  <div className="post-summary">{articale.desk}</div>
                </div>
              </div>


            )
          })
        }
  
     
     </div>
  </div>
}
  
export default MoreTopStoriesOne