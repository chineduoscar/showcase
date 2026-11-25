const authorize = (...roles) => {
  return (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Unathenticated" });
      }
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: "Access denied" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }

    next();
  };
};

export { authorize };
