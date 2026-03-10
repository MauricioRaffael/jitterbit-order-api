const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

  const token = req.headers.authorization;

  if (!token) {

    return res.status(401).json({
      message: "Token não fornecido"
    });

  }

  try {

    jwt.verify(token, "secret");

    next();

  } catch {

    res.status(403).json({
      message: "Token inválido"
    });

  }

};
