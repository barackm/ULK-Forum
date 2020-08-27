const logger = (message) => (state) => (next) => (action) => {
  console.log("Logging on the" + message);
  next(action);
};

export default logger;
