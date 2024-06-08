import SaleDetails from "../components/organisms/modals/SaleDetails";

const RenderModal = ({ currentTable, modalProps }) => {
  switch (currentTable) {
    case "orders":
      return <SaleDetails {...modalProps} />;
    default:
      return null;
  }
};

export default RenderModal;