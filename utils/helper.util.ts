const errorHandler = (error: any, isFatal: boolean = false): void => {
  if (isFatal) console.error("Fatal Error:", error);
  else console.log("Error:", error);
};

const generateRandomNumber = (): Number => {
  const number = Math.floor(Math.random() * 9000) + 1000;
  return number;
};

export { errorHandler, generateRandomNumber };
