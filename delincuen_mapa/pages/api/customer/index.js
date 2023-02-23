import dbConnect from "../../../util/mongo";
import Customers from "../../../models/Customers";

export default async function handler(req, res) {
  const { method } = req;
  //console.log(req.body);
  await dbConnect();
  //dbConnect();

  if (method === "GET") {
    try {
      const cus = await Customers.find();
      res.status(200).json(cus);
    } catch (err) {
      //console.log(err);
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    const cust = new Customers(req.body);

    try {
      await cust.save();
      res.json({ message: "Nuevo cliente agregado!" });
    } catch (error) {
      //.log(error);
      res.send(error);
    }
  }
}
