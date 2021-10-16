const sequelize = require('sequelize');
const DishModel = require('./dish');
const RatingModel = require('./rating');
const RestaurantModel = require('./restaurant');
const UserModel = require('./user');
const RoleModel = require('./role');
const Sequelize = sequelize.Sequelize;
const { DB_PASSWORD, DB_NAME, DB_USER, DB_HOST, DB_PORT, CLEARDB_DATABASE_URL } = process.env;

const setupDatabase = () => {
  const connection = CLEARDB_DATABASE_URL ? 
    new Sequelize(CLEARDB_DATABASE_URL) :
    new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
    logging: false,
  });

  const Dish = DishModel(connection, sequelize);
  const Rating = RatingModel(connection, sequelize);
  const Restaurant = RestaurantModel(connection, sequelize);
  const User = UserModel(connection, sequelize);
  const Role = RoleModel(connection, sequelize);
  
  User.hasMany(Rating);
  Dish.hasMany(Rating);
  Restaurant.hasMany(Rating);
  Rating.belongsTo(User);
  Rating.belongsTo(Dish);
  Rating.belongsTo(Restaurant);

  Role.belongsToMany(User, {
    through: 'user_roles',
    foreignKey: 'roleId',
    otherKey: 'userId',
  });
  User.belongsToMany(Role, {
    through: 'user_roles',
    foreignKey: 'userId',
    otherKey: 'roleId',
  });

  connection.sync({ alter: true });

  return {
    Dish,
    Rating,
    Restaurant,
    User,
    Role,
  };
};

module.exports = setupDatabase();
