import React, { useState, useEffect } from "react";
import ProductApi from "../../services/Api/product.service";
import MainLayout from "../Templates/MainLayout";

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
