import OrderForm from "./Order/OrderForm";
import ProductForm from "./Product/ProductForm";
import SalesForm from "./Sales/SalesForm";

const RenderForm = ({ currentTable, formProps }) => {
  switch (currentTable) {
    case "products":
      return <ProductForm {...formProps} />;
    case "orders":
      return <OrderForm {...formProps} />;
    case "sales":
      return <SalesForm {...formProps} />;
    default:
      return null;
  }
};

export default RenderForm;
