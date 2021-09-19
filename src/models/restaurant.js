module.exports = (connection, DataTypes) => {
  const schema = {
    yelp_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    name:{
      type: DataTypes.STRING,
    },
    longitude: {
      type: DataTypes.DOUBLE,    
    },
    latitude: {
      type: DataTypes.DOUBLE,
    },
  };

  const RestaurantModel = connection.define('Restaurant', schema, {timestamps: false});
  return RestaurantModel;
};
