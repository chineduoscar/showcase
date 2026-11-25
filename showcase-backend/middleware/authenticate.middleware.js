import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log(authHeader);
  if (!authHeader) {
    res.status(401).json({ message: "Authorization is missing" });

    return;
  }

  const token = authHeader.split(" ")[1];
  console.log(token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Invalid token" });
  }

  next();
};

export { authenticate };
