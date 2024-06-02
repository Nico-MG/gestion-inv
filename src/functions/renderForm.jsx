import OrderForm from "../components/Organisms/Forms/OrderForm";
import ProductForm from "../components/Organisms/Forms/ProductForm";

export const renderForm = ({ currentTable, formProps }) => {
  switch (currentTable) {
    case "products":
      return <ProductForm {...formProps} />;
    case "orders":
      return <OrderForm {...formProps} />;
    default:
      return null;
  }
};