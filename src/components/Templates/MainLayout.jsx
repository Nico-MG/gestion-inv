import React, { useState } from "react";
import Table from "../organisms/Table";
import AddButton from "../molecules/AddButton";
import LoadingData from "../atoms/LoadingData";
import RenderForm from "../../functions/RenderForm";
import SkeletonTable from "../../components/molecules/SkeletonTable";

const MainLayout = ({ currentTable, data, fetchData, products }) => {
  const [activeForm, setActiveForm] = useState(false);
  const [formProps, setFormProps] = useState({});

  const toggleForm = () => {
    setActiveForm(!activeForm);
  };

  return (
    <>
      {!data ? (
        <SkeletonTable />
      ) : (
        <>
          <Table
            currentTable={currentTable}
            data={data}
            fetchData={fetchData}
            toggleForm={toggleForm}
            setFormProps={setFormProps}
          />
          <AddButton
            currentTable={currentTable}
            fetchData={fetchData}
            toggleForm={toggleForm}
            setFormProps={setFormProps}
          />
        </>
      )}
      {activeForm && (
        <RenderForm
          currentTable={currentTable}
          formProps={{
            ...formProps,
            closeForm: toggleForm,
            products: products,
            ...(currentTable === "products" && {
              categories: [...new Set(data.map((item) => item.cat))],
            }),
          }}
        />
      )}
    </>
  );
};

export default MainLayout;
