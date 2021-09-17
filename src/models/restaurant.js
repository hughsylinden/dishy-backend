module.exports = (connection, DataTypes) => {
  const schema = {
    yelp_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },/*
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }, 
    longitude: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      }, 
    },*/
  };

  const RestaurantModel = connection.define('Restaurant', schema, {timestamps: false});
  return RestaurantModel;
};
