import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div>
                <h1>Trippy</h1>
                <p>Choose Your Favourite Destination.</p>
            </div>
            <div>
                <a href="https://github.com/Abhinkjishmon">
                    <i className="fa-brands fa-github-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/abhin-k-jishmon-3965b6227/">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/p/CZdRF-uDdb2/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
            </div>
        </div>
        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="https://abhinkjishmon.github.io/bookweb1/">Bookweb</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="/">Github</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
                <a href="/">Twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshooting</a>
                <a href="/">Contact Us</a>
            </div>
            <div>
                <h4>others</h4>
                <a href="/">Terms of Service</a>
                <a href="/">Privacy Policy</a>
                <a href="/">License</a>
            </div>
        </div>
    </div>
  )
}

export default Footer