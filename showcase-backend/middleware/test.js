const sayHello = (req, res, next) => {
  console.log("Hello!");

  next();
};

const sayWelcome = (name) => {
  return (req, res, next) => {
    console.log(`welcome ${name}`);

    next();
  };
};
export { sayHello, sayWelcome };
