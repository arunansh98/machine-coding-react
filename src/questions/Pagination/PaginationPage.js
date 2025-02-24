import { useEffect, useState } from "react";
import "./PaginationPage.css";
import Box from "./Box.js";
import Table from "./Table.js";
import DropDown from "./DropDown.js";

export default function PaginationPage() {
  const [products, setProducts] = useState([]);

  const [pageProducts, setPageProducts] = useState([]);

  const [pageSizeIndex, setPageSizeIndex] = useState(0);

  const [pageIndex, setPageIndex] = useState(0);

  const pageSizeOptions = [5, 10, 15, 20];

  const pageSize = pageSizeOptions[pageSizeIndex];

  const pageOptions =
    products && products.length > 0
      ? Array(Math.ceil(products.length / pageSize))
          .fill(undefined)
          .map((item, index) => index + 1)
      : [];

  const getProducts = async () => {
    let response = await fetch("https://dummyjson.com/products?limit=51");
    let prods = await response.json();
    setProducts(prods.products);
  };

  const getPageProducts = () => {
    if (products && products.length > 0) {
      let startingIndex = pageIndex * pageSize;
      if (startingIndex > products.length - 1) {
        startingIndex = 0;
      }
      const lastIndex = startingIndex + (pageSize - 1);
      let items = [];
      for (let i = startingIndex; i <= lastIndex; i++) {
        if (products[i] !== undefined) items.push(products[i]);
      }
      return items;
    }
    return [];
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setPageProducts(getPageProducts());
  }, [products, pageIndex, pageSizeIndex]);

  const renderedPageProducts = pageProducts.map((product) => (
    <Box data={product} />
  ));

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <div className="header">
        <DropDown
          label="Page Index"
          options={pageOptions}
          activeIndex={pageIndex}
          handleChange={setPageIndex}
        />
        <DropDown
          label="Page Size"
          options={pageSizeOptions}
          activeIndex={pageSizeIndex}
          handleChange={setPageSizeIndex}
        />
      </div>
      <Table renderedProducts={renderedPageProducts} />
    </div>
  );
}
