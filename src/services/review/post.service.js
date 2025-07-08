import { Product, Review, User } from "../../lib/database.js";

const addReview = async (data) => {
  const { UserId, ProductId } = data;

  const user = await User.findByPk(UserId);
  const product = await Product.findByPk(ProductId);

  if (!user) return { code: 404, message: "Usuario no encontrado" };
  if (!product) return { code: 404, message: "Producto no encontrado" };

  const reviewFound = await Review.findOne({
    where: {
      UserId,
      ProductId,
    },
  });

  if (reviewFound)
    return { code: 400, message: "Ya has calificado este producto" };

  // Crear la nueva review
  const review = await Review.create(data);

  // Obtener todas las reviews del producto para calcular el nuevo promedio
  const reviews = await Review.findAll({
    where: { ProductId },
    attributes: ["rating"],
  });

  const total = reviews.reduce((sum, r) => sum + r.rating, 0);
  const newAverage = total / reviews.length;

  // Actualizar el promedio del producto
  await Product.update(
    { scoreAverage: newAverage.toFixed(2) },
    { where: { id: ProductId } }
  );

  return { code: 201, review, message: "Calificación agregada exitosamente" };
};

export { addReview };
