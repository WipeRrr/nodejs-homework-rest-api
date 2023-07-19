const Jimp = require("jimp");

const modifyImage = async (imagePath) => {
  const image = await Jimp.read(imagePath);
  await image.resize(250, 250).writeAsync(imagePath);
};

module.exports = modifyImage;
