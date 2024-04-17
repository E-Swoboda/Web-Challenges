import { getAllProducts } from "../../../services/productServices";

export default function handler(req, res) {
  if (req.method === "GET") {
    const products = getAllProducts();
    res.status(200).json(products);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
