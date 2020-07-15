import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import "./style.css";

export default function Card(props) {
  return (
    <div className="card">
      <CardHeader data={props.data} />
      <CardBody data={props.data} />
    </div>
  );
}
