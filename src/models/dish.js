module.exports = (connection, DataTypes) => {
  const schema = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  };
  const DishModel = connection.define('Dish', schema, {timestamps: false});
  return DishModel;
};
