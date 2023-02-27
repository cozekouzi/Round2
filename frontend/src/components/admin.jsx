import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminCard from "./AdminCard/AdminCard";
import './admin.css'
export const Admin = () => {
  // get data from API
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    getAllAdmins();
  }, []);

  const getAllAdmins = () =>
    axios
      .get("http://localhost:2002/api/Admin/getAll")
      .then((response) => {
        //add our data to state
        setAdmin(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(`Error : {${error}`));
  const adminCard = admin.map((object) => {
    return <AdminCard key={object.id} name={object.name} email={object.email} password={object.password} discription={object.discription}    />;
  });

  return <div className="adminCards">{adminCard}</div>;
};
