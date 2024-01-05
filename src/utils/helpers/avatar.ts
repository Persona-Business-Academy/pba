export const generateBrightColor = () => {
  const red = Math.floor(Math.random() * 128 + 128);
  const green = Math.floor(Math.random() * 128 + 128);
  const blue = Math.floor(Math.random() * 128 + 128);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
};
