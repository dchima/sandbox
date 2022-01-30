const services = {
  async add(model, data) {
    try {
      const { dataValues: value } = await model.create(data);
      return value;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },

  async find(model, keys) {
    try {
      return model.findOne({ where: keys });
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default services;
