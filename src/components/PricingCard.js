import { Link } from "react-router-dom";
import "../assesst/css/pricingcard.css";
import React from 'react'

const PricingCard = () => {
  return (
    <div>
        <div className="pricing">
            <div className="card-container">
                <div className="card">
                    <h3> - Basic -</h3>
                    <span className="bar"></span>
                    <p className="btc"> $ 100</p>
                    <p>- 3 days -</p>
                    <p>- 3 pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact-us" className="btn btn-dark"> Contact Me</Link>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <h3> - Basic -</h3>
                    <span className="bar"></span>
                    <p className="btc"> $ 100</p>
                    <p>- 3 days -</p>
                    <p>- 3 pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact-us" className="btn btn-dark"> Contact Me</Link>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <h3> - Basic -</h3>
                    <span className="bar"></span>
                    <p className="btc"> $ 100</p>
                    <p>- 3 days -</p>
                    <p>- 3 pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact-us" className="btn btn-dark"> Contact Me</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricingCard
