import React from "react";
import "./style.css";

export default function CardBody(props) {
  const {
    college_name,
    discount,
    original_fees,
    discounted_fees,
    fees_cycle,
    amenties,
    famous_nearest_places,
    nearest_place,
    offertext,
    rating,
  } = props.data;

  return (
    <>
      <div className="card_body">
        <div className="body_description">
          <div className="description_college-name">
            <span className="college-name">{college_name}</span>
            <span className="ratings">
              &#9733;&#9733;&#9733;&#9733;
              <span className="hollow-star">&#9733;</span>
            </span>
          </div>
          <div className="description_location-row">
            <span className="location">{nearest_place[0]}</span>
            <span className="nearest-location">| {nearest_place[1]}</span>
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
            <span className="original_price">&#8377;{original_fees}</span>
            <div className="discount-label red">
              <span>-{discount}%</span>
            </div>
          </div>

          <div className="discounted-price-row">
            <span className="discounted-price">&#8377;{discounted_fees}</span>
            <span className="per-semester">{fees_cycle}</span>
          </div>

          <div className="features">
            <span className="free">{amenties[0]}</span>
            <span className="dot">.</span>
            <span className="wifi">{amenties[1]}</span>
          </div>
        </div>
      </div>
    </>
  );
}
