import OrderForm from "../../Organisms/Forms/Order/OrderForm";
import ProductForm from "../../Organisms/Forms/Product/ProductForm";
import SalesForm from "../../Organisms/Forms/Sales/SalesForm";
import { ApiProducts, ApiOrders } from "../../../services/apiService";

const Switch = {
  renderForm: (currentTable, formProps) => {
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
  },

  apiDelete: (currentTable) => {
    switch (currentTable) {
      case "products":
        return ApiProducts.deleteProduct;
      case "orders":
        return ApiOrders.deleteOrder;
      default:
        return null;
    }
  }
};

export default Switch;
