import React from 'react';
import './footer.css';
import Zoom from 'react-reveal/Zoom';


export default function Footer() {
  return (
    <div className="bg">
      <footer id="footer">
       <Zoom>
        <div class="container">
          <h3>ePedagogue</h3>

          {/* <div class="social-links">
        <a href="https://twitter.com/e_pedagogue?s=08" target="_blank" class="twitter"><i
            class="bx bxl-twitter"></i></a>
        <a href="https://www.facebook.com/epedagogue/" target="_blank" class="facebook"><i
            class="bx bxl-facebook"></i></a>
        <a href="http://Instagram.com/officialepedagogue" target="_blank" class="instagram"><i
            class="bx bxl-instagram"></i></a>
         <a href="#" target="_blank" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div> */}
          <div class="copyright">
            &copy; Copyright <strong><span>ePedagogue</span></strong>. All Rights Reserved
      </div>
          <div class="credits">
            Designed by <a href="https://ePedagogue.com/">ePedagogue</a>
          </div>
        </div>
        </Zoom>
      </footer>
    </div>
  )
}
