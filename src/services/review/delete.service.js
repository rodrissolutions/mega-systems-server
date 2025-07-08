import { Product, Review } from "../../lib/database.js";

const deleteReview = async (id) => {
  const review = await Review.findOne({ where: { id } });

  if (!review) return { code: 404, message: "Review no encontrado" };

  const { ProductId } = review;

  // Elimina la review
  await review.destroy();

  // Si no está asociada a ningún producto, simplemente termina
  if (!ProductId)
    return { code: 200, message: "Review eliminada correctamente" };

  // Busca todas las reviews restantes del producto
  const remainingReviews = await Review.findAll({
    where: { ProductId },
    attributes: ["rating"],
  });

  // Recalcula el promedio
  let newAverage = 0;
  if (remainingReviews.length > 0) {
    const total = remainingReviews.reduce((sum, r) => sum + r.rating, 0);
    newAverage = total / remainingReviews.length;
  }

  // Actualiza el producto con el nuevo promedio
  await Product.update(
    { scoreAverage: newAverage.toFixed(2) },
    { where: { id: ProductId } }
  );

  return { code: 200, message: "Review eliminada y promedio actualizado" };
};

export { deleteReview };
