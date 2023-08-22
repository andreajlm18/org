import { useState } from "react";
import "./MiOrg.css";
const MiOrg = (props) => {
  return (
    <div className="orgSection">
      <h3 className="titulo">Mi organización</h3>
      <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </div>
  );
};
export default MiOrg;
