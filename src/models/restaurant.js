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
    address1: {
      type: DataTypes.STRING,
    },
    address2: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    zip_code: {
      type: DataTypes.STRING,
    },
  };

  const RestaurantModel = connection.define('Restaurant', schema, {timestamps: false});
  return RestaurantModel;
};
