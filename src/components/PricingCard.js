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
                    <p className="btc"> $ 70</p>
                    <p>- 3 days -</p>
                    <p>- 2 pages -</p>
                    <p>- quick and straight forward task -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact-us" className="btn btn-dark price"> Contact Me</Link>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <h3> - Standard -</h3>
                    <span className="bar"></span>
                    <p className="btc"> $ 100</p>
                    <p>- 5 days -</p>
                    <p>- 3 pages -</p>
                    <p>- Well Defined project -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact-us" className="btn btn-dark price"> Contact Me</Link>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <h3> - Premium -</h3>
                    <span className="bar"></span>
                    <p className="btc"> $ 180</p>
                    <p>- 8 days -</p>
                    <p>- 5 pages -</p>
                    <p>- Long-term or complex initiative -</p>
                    <p>- Responsive Design -</p>
                    <Link to="/contact-us" className="btn btn-dark price"> Contact Me</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricingCard
