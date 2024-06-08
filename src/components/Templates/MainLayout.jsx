import React, { useState } from "react";
import Table from "../organisms/Table";
import AddButton from "../molecules/AddButton";
import LoadingData from "../atoms/LoadingData"
import RenderForm from "../../functions/RenderForm";

const MainLayout = ({ currentTable, data, fetchData }) => {
  const [activeForm, setActiveForm] = useState(false);
  const [formProps, setFormProps] = useState({});

  const toggleForm = () => {
    setActiveForm(!activeForm);
  };

  return (
    <>
      {!data ? (
        <LoadingData />
      ) : (
        <>
          <Table
            currentTable={currentTable}
            data={data.data}
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
          formProps={{ ...formProps, closeForm: toggleForm }}
        />
      )}
    </>
  );
};

export default MainLayout;