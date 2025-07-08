import { reviewServices } from "../../services/index.services.js";

const addReview = async (req, res) => {
  try {
    const data = req.body;
    const { code, message, review } = await reviewServices.addReview(data);

    res.status(code).json(review ? { message, review } : { message });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { addReview };
