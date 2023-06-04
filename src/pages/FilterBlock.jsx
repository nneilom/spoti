import React from "react";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { useProducts } from "../context/ProductContextProvider";

const FilterBlock = () => {
  const { getSongfilter } = useProducts();

  return (
    <div>
      <button
        onClick={(e) => {
          getSongfilter(e.target.value);
        }}
      >
        rock
      </button>
      <button>citypop</button>
    </div>
  );
};

export default FilterBlock;
