module.exports = (connection, DataTypes) => {
  const schema = {
    yelp_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  };

  const RestaurantModel = connection.define('Restaurant', schema, {timestamps: false});
  return RestaurantModel;
};
