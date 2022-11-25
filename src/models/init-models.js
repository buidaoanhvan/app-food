var DataTypes = require("sequelize").DataTypes;
var _address = require("./address");
var _food = require("./food");
var _food_type = require("./food_type");
var _like_res = require("./like_res");
var _order = require("./order");
var _permission = require("./permission");
var _rate_res = require("./rate_res");
var _restaurant = require("./restaurant");
var _role = require("./role");
var _role_permission = require("./role_permission");
var _sub_food = require("./sub_food");
var _user = require("./user");
var _user_review_food = require("./user_review_food");

function initModels(sequelize) {
  var address = _address(sequelize, DataTypes);
  var food = _food(sequelize, DataTypes);
  var food_type = _food_type(sequelize, DataTypes);
  var like_res = _like_res(sequelize, DataTypes);
  var order = _order(sequelize, DataTypes);
  var permission = _permission(sequelize, DataTypes);
  var rate_res = _rate_res(sequelize, DataTypes);
  var restaurant = _restaurant(sequelize, DataTypes);
  var role = _role(sequelize, DataTypes);
  var role_permission = _role_permission(sequelize, DataTypes);
  var sub_food = _sub_food(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_review_food = _user_review_food(sequelize, DataTypes);

  order.belongsTo(food, { as: "food", foreignKey: "food_id"});
  food.hasMany(order, { as: "orders", foreignKey: "food_id"});
  sub_food.belongsTo(food, { as: "food", foreignKey: "food_id"});
  food.hasMany(sub_food, { as: "sub_foods", foreignKey: "food_id"});
  user_review_food.belongsTo(food, { as: "food", foreignKey: "food_id"});
  food.hasMany(user_review_food, { as: "user_review_foods", foreignKey: "food_id"});
  food.belongsTo(food_type, { as: "type", foreignKey: "type_id"});
  food_type.hasMany(food, { as: "foods", foreignKey: "type_id"});
  role_permission.belongsTo(permission, { as: "permission", foreignKey: "permission_id"});
  permission.hasMany(role_permission, { as: "role_permissions", foreignKey: "permission_id"});
  address.belongsTo(restaurant, { as: "restaurant", foreignKey: "restaurant_id"});
  restaurant.hasMany(address, { as: "addresses", foreignKey: "restaurant_id"});
  food.belongsTo(restaurant, { as: "re", foreignKey: "res_id"});
  restaurant.hasMany(food, { as: "foods", foreignKey: "res_id"});
  like_res.belongsTo(restaurant, { as: "re", foreignKey: "res_id"});
  restaurant.hasMany(like_res, { as: "like_res", foreignKey: "res_id"});
  rate_res.belongsTo(restaurant, { as: "re", foreignKey: "res_id"});
  restaurant.hasMany(rate_res, { as: "rate_res", foreignKey: "res_id"});
  role_permission.belongsTo(role, { as: "role", foreignKey: "role_id"});
  role.hasMany(role_permission, { as: "role_permissions", foreignKey: "role_id"});
  user.belongsTo(role, { as: "role", foreignKey: "role_id"});
  role.hasMany(user, { as: "users", foreignKey: "role_id"});
  address.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(address, { as: "addresses", foreignKey: "user_id"});
  like_res.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(like_res, { as: "like_res", foreignKey: "user_id"});
  order.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(order, { as: "orders", foreignKey: "user_id"});
  rate_res.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(rate_res, { as: "rate_res", foreignKey: "user_id"});
  user_review_food.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_review_food, { as: "user_review_foods", foreignKey: "user_id"});

  return {
    address,
    food,
    food_type,
    like_res,
    order,
    permission,
    rate_res,
    restaurant,
    role,
    role_permission,
    sub_food,
    user,
    user_review_food,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
