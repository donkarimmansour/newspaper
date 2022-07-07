 const Subscribe = () => {
    return   <div className="bs-shortcode bs-subscribe-newsletter bs-feedburner-newsletter vc_custom_1529560201128">
    <p className="section-heading sh-t5 sh-s1">
      <span className="h-text">Newsletter</span>
    </p> 
    <div className="subscribe-message">
      <p>Get the best of Politics and World News delivered to your inbox daily
      </p>
    </div>
    <form method="post" action="//feedburner.google.com/fb/a/mailverify" className="bs-subscribe-feedburner clearfix" target="_blank" rel="noreferrer">
      <input type="hidden"  name="uri" />
      <input type="hidden" name="loc" defaultValue="en_US" />
      <input type="text" id="feedburner-email" name="email" className="newsletter-email" placeholder="Enter your e-mail .." />
      <button className="newsletter-subscribe" name="submit" type="submit">Subscribe</button>
    </form>
  </div>
}
  
export default Subscribe