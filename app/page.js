import Image from "next/image";
import styles from "./page.module.css";
import React from "react";

function TeaDisplay(){
  let name="Green Tea";
  let origin="China";
  let description="Green tea is made from the leaves of the Camellia sinensis plant.These leaves are not dried and oxidized like the ones used to make black tea."
  return (
    <div>
      <h1>{name}</h1>
      <h2>Origin:{origin}</h2>
      <p>{description}</p>
    </div>
  );
}
export default TeaDisplay
