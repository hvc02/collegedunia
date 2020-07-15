import React from "react";
import "./style.css";

export default function CardBody() {
  return (
    <>
      <div className="card_body">
        <div className="body_description">
          <div className="description_college-name">
            <span className="college-name">
              Hansraj College Delhi University
            </span>
            <span className="ratings">
              &#9733;&#9733;&#9733;&#9733;
              <span className="hollow-star">&#9733;</span>
            </span>
          </div>
          <div className="description_location-row">
            <span className="location">Near Dayanand Metro Bus station</span>
            <span className="nearest-location">| 2 km away from bus stand</span>
          </div>

          <div className="description_match-row">
            <span className="match">93% Match : </span>
            <span className="distance-from">
              2.5Kms <span className="grey-text">from Gtb Nagar,</span>
              7.5kms <span className="grey-text">from Gtb Nagar,</span>
            </span>
          </div>

          <div className="description_offer-row">
            <span className="offers">
              <span className="flat">Flat </span>
              <span>
                Rs<span className="price">2,000 </span> off + upto Rs{" "}
                <span className="price">500</span> wallet! to avail...{" "}
                <span className="login-text">Login</span>
              </span>
            </span>
          </div>
        </div>

        <div className="body_price-section">
          <div className="original-price_row">
            <span className="original_price">&#8377;6354</span>
            <div class="discount-label red">
              <span>-10%</span>
            </div>
          </div>

          <div className="discounted-price-row">
            <span className="discounted-price">&#8377;5767</span>
            <span className="per-semester">Per semester(3months)</span>
          </div>

          <div className="features">
            <span className="free">Free Cancellation</span>
            <span className="dot">.</span>
            <span className="wifi">Free wifi</span>
          </div>
        </div>
      </div>
    </>
  );
}
