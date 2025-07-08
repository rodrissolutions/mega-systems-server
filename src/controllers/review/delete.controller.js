import { reviewServices } from "../../services/index.services.js";

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, message } = await reviewServices.deleteReview(id);

    res.status(code).json({ message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { deleteReview };
