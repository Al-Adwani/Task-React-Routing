import { useState } from 'react'
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
import { Helmet } from "react-helmet";


const ProductList = () => {

  const [query, setQuery] = useState("")

  const productList = products
    .filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
    .map((product) => (
      <ProductItem product={product} key={product.id} />
    ));

  return (
    <>
    <Helmet>
      <title>Product List</title>
      </Helmet>
      <SearchBar setQuery={setQuery} />
      <div className="listWrapper">{productList}</div>
    </>
  );
};

export default ProductList;
