module.exports = (connection, DataTypes) => {
  const schema = {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      private: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      private: true,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
  };

  const UserModel = connection.define('User', schema, {timestamps: false});
  return UserModel;
};
