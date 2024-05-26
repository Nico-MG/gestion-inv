import Table from "../Organisms/Tables/Table";
import AddButton from "../Molecules/TableButtons/Add/AddButton";

const MainLayout = ({ currentTable, data, fetchData }) => {
  return (
    <>
      <Table currentTable={currentTable} data={data} fetchData={fetchData} />
      <AddButton currentTable={currentTable} fetchData={fetchData} />
    </>
  );
}

export default MainLayout;