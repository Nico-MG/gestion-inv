import React, { useState, useEffect } from "react";
import ProductApi from "../../services/api/product.service";
import MainLayout from "../templates/MainLayout";

const Products = () => {
  const [tableData, setTableData] = useState(null);

  const fetchData = async () => {
    const products = await ProductApi.getAllProducts();
    setTableData(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MainLayout
        currentTable="products"
        data={tableData}
        fetchData={fetchData}
      />
    </>
  );
};

export default Products;
