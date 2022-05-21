import React from "react";

const Service = ({ service }) => {
  const { name, icon, description, price } = service;
  return (
    <div class="card card-compact w-full bg-base-100 shadow-xl p-5">
      <figure>
        <img className="w-1/4" src={icon} alt="" />
      </figure>
      <div class="card-body text-center">
        <h2 class="text-xl font-samibold text-center">{name}</h2>
        <h2 className="text-bold text-xl text-pink-500">$ {price}</h2>
        <p className="w-4/5 mx-auto">{description}</p>

      </div>
    </div>
  );
};

export default Service;
