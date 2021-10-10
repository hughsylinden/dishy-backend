module.exports = (connection, DataTypes) => {
  const schema = {
    name: {
      type: DataTypes.STRING,
    },
  };
  const RoleModel = connection.define('roles', schema, { timestamps: false });

  return RoleModel;
};
