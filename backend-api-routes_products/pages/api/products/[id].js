import { getProductById } from "../../../services/productServices";

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    const product = getProductById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
