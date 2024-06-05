import ClientApi from "../services/Api/client.service"
import NotificationApi from "../services/Api/notification.service";
import OrderApi from "../services/Api/order.service";
import ProductApi from "../services/Api/product.service";
import ProviderApi from "../services/Api/provider.service";
import RefundApi from "../services/Api/refund.service";
import SaleApi from "../services/Api/sale.service";
import UserApi from "../services/Api/user.service";

export const auxDelete = async ({ currentTable, id }) => {
  switch (currentTable) {
    case 'clients':
      await ClientApi.deleteClient(id);
      break;
    case 'notifications':
      await NotificationApi.deleteNotification(id);
      break;
    case 'orders':
      await OrderApi.deleteOrder(id);
      break;
    case 'products':
      await ProductApi.deleteProduct(id);
      break;
    case 'providers':
      await ProviderApi.deleteProvider(id);
      break;
    case 'refunds':
      await RefundApi.deleteRefund(id);
      break;
    case 'sales':
      await SaleApi.deleteSale(id);
      break;
    case 'users':
      await UserApi.deleteUser(id);
      break;
    default:
      console.error("currentTable doesn't match any of the switch cases");
  }
};