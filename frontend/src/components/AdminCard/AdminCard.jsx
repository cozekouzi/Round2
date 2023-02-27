import React from "react";
import '../admin.css'
export default function AdminName(props) 
{
  return (
    <div className="adminCard">
      <h3>{props.name}</h3>
      <h3>{props.email}</h3>
      <h3>{props.discription}</h3>
      <h3>{props.password}</h3>
    </div>
  );
}
