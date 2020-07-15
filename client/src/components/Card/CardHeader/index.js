import React from "react";
import "./style.css";

export default function CardHeader(props) {
  const { rating_remarks, promoted, rating, ranking, tags } = props.data;

  return (
    <>
      <div className="card_header">
        <div className="header_right">
          <div className="header_promoted  d-flex-text">
            <span className="promoted_text">
              {promoted ? "Promoted" : "Not Promoted"}
            </span>
          </div>
          <div className="header_rating">
            <span className="rating_text">
              {rating}
              <span>/5</span>
            </span>
            <span className="rating_text">{rating_remarks}</span>
          </div>
        </div>

        <div className="header_bottom">
          <div className="header_tags">
            <div className="tags_best  d-flex-text">
              <span className="best_text">{tags[0]}</span>
            </div>

            <div className="tags_distance  d-flex-text">
              <span className="distance_text">{tags[1]}</span>
            </div>
          </div>
          <div className="header_number">
            <span className="number_text">#{ranking}</span>
          </div>
        </div>
      </div>
    </>
  );
}
