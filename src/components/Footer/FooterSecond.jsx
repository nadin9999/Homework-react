import "./FooterSecond.css"
import ImageLocation from "../../image/location.png"
import ImageIcon from "../../image/facebook instagram twitter linkedin.png"

function FooterSecond() {
  return (
    <div >
      <div className="FooterSecond">
        <div className="FooterSecond__child">
          <p className="Paragraph3">YOUR LOGO</p>
          <p className="Paragraph4">We earned a reputation of being good at what we do.<br />
            Let us take your online shop to new dimension in<br />
            success!</p>
          <div className="Location"><img src={ImageLocation} /><p>Comilla, Bangladesh 3500</p></div>
          <p>kawsarahmed0210@gmail.com</p>
          <hr />
          <p>01647470457</p>
          <img src={ImageIcon} id="ImageIcon" />
        </div>

        <div className="FooterSecond__childSecond">
          <p className="Paragraph3">RECIVE EMAIL UPDATES</p>
          <input type="text" name="" id="Input2" placeholder="Your Email Adress" />
          <div className="List">
            <div className="List__child">
              <p className="List__childH1">SHOP</p>
              <p>Shop</p>
              <p>Collection</p>
              <p>Outlet</p>
              <p>Lookbook</p>
            </div>
            <div className="List__child">
              <p className="List__childH1">HELP</p>
              <p>FAQ</p>
              <p>Privecy Policy</p>
              <p>Tearms and conditions</p>
              <p>Return and Exchanges</p>
            </div>
            <div className="List__child">
              <p className="List__childH1">ABOUT</p>
              <p>Journal</p>
              <p>Our Story</p>
              <p>Contact</p>
              <p>Store Location</p>
            </div>
          </div>

        </div>
      </div>

      <div className="lastFooter">
        <p>Copyright © 2020 . Your company name  All rights reserved</p>
      </div>
    </div>

  )
}

export default FooterSecond