 
const Media = () => {

  const myData : any = [
    {
      "name": "facebook",
      "btn": "Like",
      "link": "#"
    },
    {
      "name": "youtube",
      "btn": "Subscribers",
      "link": "#"
    },
    {
      "name": "instagram",
      "btn": "Followers",
      "link": "#"
    },
    {
      "name": "twitter",
      "btn": "Followers",
      "link": "#"
    },
    {
      "name": "rss",
      "btn": "Subscribe",
      "link": "#"
    },

  ]

    return <div className="  better-studio-shortcode bsc-clearfix better-social-counter style-style-7 not-colored in-1-col">
    <p className="section-heading sh-t5 sh-s1">
      <span className="h-text">Connect Us</span>
    </p>
    <ul className="social-list bsc-clearfix">

      
             {
                myData.map((articale: any, artIndex: number) => {
                  return (
                       <li key={artIndex} className={`social-item ${articale.name}`}><a href="#" className="item-link" target="_blank" rel="noreferrer">
                         <span  className={`bf-icon bf-icon-svg item-icon bsfi bsfi-${articale.name} ${articale.name}`}>
                       
                         <svg className="bf-svg-tag">
                            <use xlinkHref={`#bsfi-${articale.name}`} />
                         </svg>
                         
                         </span><span className="item-count">{articale.name}</span><span className="item-title">{articale.btn} </span> <span className="item-join">{articale.btn} our page</span> </a>
                       </li>

                  )
                })
              }

     
     
    </ul>
  </div>
 
}
  
export default Media