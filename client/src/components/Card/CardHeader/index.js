import React from "react";
import "./style.css";

export default function CardHeader() {
  return (
    <>
      <div className="card_header">
        <div className="header_right">
          <div className="header_promoted  d-flex-text">
            <span className="promoted_text">Promoted</span>
          </div>
          <div className="header_rating">
            <span className="rating_text">
              3.9<span>/5</span>
            </span>
            <span className="rating_text">Very Good</span>
          </div>
        </div>

        <div className="header_bottom">
          <div className="header_tags">
            <div className="tags_best  d-flex-text">
              <span className="best_text">Best College 2019</span>
            </div>

            <div className="tags_distance  d-flex-text">
              <span className="distance_text">2km away</span>
            </div>
          </div>
          <div className="header_number">
            <span className="number_text">
              #7 in 260 colleges in north campus
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
