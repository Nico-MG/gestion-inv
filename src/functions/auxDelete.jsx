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
      ClientApi.deleteClient(id);
      break;
    case 'notifications':
      NotificationApi.deleteNotification(id);
      break;
    case 'orders':
      OrderApi.deleteOrder(id);
      break;
    case 'products':
      ProductApi.deleteProduct(id);
      break;
    case 'providers':
      ProviderApi.deleteProvider(id);
      break;
    case 'refunds':
      RefundApi.deleteRefund(id);
      break;
    case 'sales':
      SaleApi.deleteSale(id);
      break;
    case 'users':
      UserApi.deleteUser(id);
      break;
    default:
      console.error("currentTable doesn't match any of the switch cases");
  }
};