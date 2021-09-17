module.exports = (connection, DataTypes) => {
  const schema = {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    comment: {
      type: DataTypes.STRING,  
      allowNull: true,
      validate: {
        notEmpty: false,
      },  
    },
  };

  const RatingModel = connection.define('Rating', schema, {timestamps: false});
  return RatingModel;
};
