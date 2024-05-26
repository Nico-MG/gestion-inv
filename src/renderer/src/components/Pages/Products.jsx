import React, { useState, useEffect } from "react";
import ProductApi from "../../services/Api/product.service";
import Table from "../Organisms/Tables/Table";

const Products = () => {
  const [tableData, setTableData] = useState([]);

  const fetchData = async () => {
    const productos = await ProductApi.getAllProducts();
    setTableData(productos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Table currentTable="products" data={tableData} fetchData={fetchData} />
    </>
  );
};

export default Products;
