import { Offer } from "../../lib/database.js";
import { Op } from "sequelize";

const updateOffer = async (id, data) => {
  const offer = await Offer.findOne({ where: { id } });

  if (!offer) return { code: 404, message: "Oferta no encontrada" };

  // Verificamos si se quiere activar esta oferta
  if (data.isActive === true) {
    const activeOffer = await Offer.findOne({
      where: {
        isActive: true,
        id: { [Op.ne]: id }, // Oferta activa diferente a la actual
      },
    });

    if (activeOffer) {
      return {
        code: 400,
        message:
          "Ya existe otra oferta activa. Solo se permite una oferta activa a la vez.",
      };
    }
  }

  // Actualizamos normalmente
  await offer.update(data);

  return {
    code: 200,
    message: "Oferta actualizada exitosamente",
    offer,
  };
};

export { updateOffer };
