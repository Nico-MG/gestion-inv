import OrderForm from "../components/Organisms/Forms/OrderForm";
import ProductForm from "../components/Organisms/Forms/ProductForm";

const RenderForm = ({ currentTable, formProps }) => {
  switch (currentTable) {
    case "products":
      return <ProductForm {...formProps} />;
    case "orders":
      return <OrderForm {...formProps} />;
    default:
      return null;
  }
};

export default RenderForm;