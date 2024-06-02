import React, { useState } from "react";
import Table from "../Organisms/Table";
import AddButton from "../Molecules/TableButtons/AddButton";
import LoadingData from "../Atoms/LoadingData"
import RenderForm from "../../functions/RenderForm";

const MainLayout = ({ currentTable, data, fetchData }) => {
  const [activeForm, setActiveForm] = useState(false);
  const [formProps, setFormProps] = useState({});

  const toggleForm = () => {
    setActiveForm(!activeForm);
  };

  return (
    <>
      {!data || data.length === 0 ? (
        <LoadingData />
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
          formProps={{ ...formProps, closeForm: toggleForm }}
        />
      )}
    </>
  );
};

export default MainLayout;