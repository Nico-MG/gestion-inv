import React, { useState, useEffect } from "react";
import { ApiProducts } from "../services/apiService";
import Banner from "../components/Banner";
import Table from "../components/Table";

const Productos = () => {
  const [tableData, setTableData] = useState([]);

  const fetchData = async () => {
    try {
      const productos = await ApiProducts.getAllProducts();
      setTableData(productos);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Banner />
      <Table
        currentTable="productos"
        data={tableData}
        fetchData={fetchData}
        createTableRow={ApiProducts.createProduct}
        updateTableRow={ApiProducts.updateProduct}
        deleteTableRow={ApiProducts.deleteProduct}
      />
    </>
  );
};

export default Productos;
