const Order = require("../models/order");

exports.createOrder = async (req, res) => {

  try {

    const data = req.body;

    const mappedOrder = {

      orderId: data.numeroPedido,
      value: data.valorTotal,
      creationDate: new Date(data.dataCriacao),

      items: data.items.map(item => ({

        productId: Number(item.idItem),
        quantity: item.quantidadeItem,
        price: item.valorItem

      }))

    };

    const order = new Order(mappedOrder);

    await order.save();

    res.status(201).json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


exports.getOrder = async (req, res) => {

  try {

    const order = await Order.findOne({
      orderId: req.params.id
    });

    if (!order) {
      return res.status(404).json({
        message: "Pedido não encontrado"
      });
    }

    res.status(200).json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


exports.listOrders = async (req, res) => {

  try {

    const orders = await Order.find();

    res.status(200).json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


exports.updateOrder = async (req, res) => {

  try {

    const order = await Order.findOneAndUpdate(

      { orderId: req.params.id },
      req.body,
      { new: true }

    );

    if (!order) {

      return res.status(404).json({
        message: "Pedido não encontrado"
      });

    }

    res.status(200).json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


exports.deleteOrder = async (req, res) => {

  try {

    const result = await Order.deleteOne({
      orderId: req.params.id
    });

    if (result.deletedCount === 0) {

      return res.status(404).json({
        message: "Pedido não encontrado"
      });

    }

    res.status(200).json({
      message: "Pedido removido com sucesso"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
