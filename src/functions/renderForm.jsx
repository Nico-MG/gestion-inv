import OrderForm from "../components/Organisms/forms/OrderForm";
import ProductForm from "../components/Organisms/forms/ProductForm";

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