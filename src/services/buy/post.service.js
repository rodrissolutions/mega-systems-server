import {
  Delivery,
  Item,
  Sale,
  SaleDetail,
  User,
  Product,
} from "../../lib/database.js";
import { codeUtils } from "../../utils/index.utils.js";

const saleWithDelivery = async (data) => {
  const {
    UserId,
    Cart,
    total,
    Delivery: DeliveryData,
    typeBuy,
    paymentMethod,
  } = data;

  const { Items, id: CartId } = Cart;

  // 1. Validar usuario
  const userFound = await User.findByPk(UserId);
  if (!userFound) return { code: 404, message: "Usuario no encontrado" };
  const newCode = codeUtils.createCode();

  // 2. Crear venta
  const sale = await Sale.create({
    UserId,
    total,
    typeBuy,
    paymentMethod,
    code: newCode,
  });

  if (!sale) return { code: 500, message: "Error al crear la venta" };

  const { id: SaleId } = sale;

  // 3. Armar detalles de venta con precios reales y subtotal
  const saleItems = [];

  for (const item of Items) {
    const product = await Product.findByPk(item.ProductId);
    if (!product) {
      return {
        code: 404,
        message: `Producto con ID ${item.ProductId} no encontrado`,
      };
    }

    const unitPrice = parseFloat(product.price);
    const quantity = item.quantity;
    const subTotal = parseFloat((unitPrice * quantity).toFixed(2));

    saleItems.push({
      SaleId,
      ProductId: item.ProductId,
      quantity,
      unitPrice,
      subTotal,
    });
  }

  // 4. Crear detalles de venta
  await SaleDetail.bulkCreate(saleItems);

  // 5. Crear entrega
  const delivery = await Delivery.create({
    ...DeliveryData,
    SaleId,
  });

  if (!delivery) return { code: 500, message: "Error al crear la entrega" };

  // 6. Borrar los ítems del carrito
  await Item.destroy({
    where: {
      CartId,
    },
  });

  return {
    code: 200,
    message: "Su compra se ha registrado con éxito",
  };
};

const saleWithoutDelivery = (data) => {};

export { saleWithDelivery, saleWithoutDelivery };
