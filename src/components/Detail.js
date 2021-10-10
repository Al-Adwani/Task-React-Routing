import React from "react";

import products from "../products";

import { useParams } from "react-router-dom";
function Detail() {
  const productSlug = useParams().detailSlug;
  let cookie = products.find((product) => product.slug === productSlug);

  
  return (
    <div className="detail">
      {cookie && ( // if there is cookie show its data
        <>
          <h5>{cookie.name}</h5>
          <img src={cookie.image} alt="cookie" />
          <p>{cookie.price} KD</p>
          <p>{cookie.description}</p>
        </>
      )}
    </div>
  );
}

export default Detail;
