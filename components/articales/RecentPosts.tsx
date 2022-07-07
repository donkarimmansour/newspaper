import Image from "next/image" 
import Link from "next/link"

const RecentPosts = () => {

  const myData : any = [
    {
      "name": "Justin Campbell",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/Charles-Kessler.jpg"
    },
    {
      "name": "Robert Holmes",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/Robert-Holmes.jpg"
    },
    {
      "name": "Angelina Kenney",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/Angelina-Kenney.jpg"
    },
    {
      "name": "James Whitfield",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/James-Whitfield.jpg"
    },
    {
      "name": "Charles Kessler",
      "img": "https://demo.betterstudio.com/publisher/newspaper-daily/wp-content/uploads/sites/105/2018/06/Justin-Campbell.jpg"
    }
  ]


    return    <div className=" bs-listing bs-listing-user-listing-1 bs-listing-single-tab">

    <p className="section-heading sh-t5 sh-s1 main-term-none">
      <span className="h-text main-term-none main-link">
        Recent Posts </span>
    </p>

    <div className="listing listing-user type-1 style-1 bs-columns-row-sep bs-columns-1">

    {
          myData.map((articale: any, artIndex: number) => {

            return (


              <div key={artIndex}   className="listing-item listing-item-user type-1 style-1 clearfix">
              <div className="bs-user-item clearfix">
                
                <div className="user-avatar">
                  <a href="/articale" >
                    <img alt="" className="avatar avatar-60 photo avatar-default b-loaded" height={60} width={60}  src={articale.img} />
                  </a>
                </div>

                <div className="user-meta">
                  <h5 className="user-display-name"><Link href="/articale">{articale.name}</Link></h5> 
                  
                  <Link href="/articale" ><a className="btn btn-light">View all posts</a></Link>

                  <ul className="user-social-icons"></ul>
                </div>

              </div>
            </div>
           

            )
          })
        }
     
      </div>
  </div>

  
 
}
  
export default RecentPosts