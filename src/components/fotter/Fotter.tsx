import React from 'react'
import "./style.css"
const FotterComponent = () => {
  return (
    <footer>
      <div className="footer-container max-with-viewp">
        <div className="footer-logo">
          <img src="logopie.png" alt="Logo" />
        </div>
        <div className="footer-social">
          <ul>
            <li><a href="#" target="_blank">enlace<i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#" target="_blank">enlace<i className="fab fa-twitter"></i></a></li>
            <li><a href="#" target="_blank">enlace<i className="fab fa-instagram"></i></a></li>
            <li><a href="#" target="_blank">enlace<i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default FotterComponent