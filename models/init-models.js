var DataTypes = require("sequelize").DataTypes;
var _Asset = require("./Asset");
var _AssetType = require("./AssetType");
var _Concerner = require("./Concerner");
var _Configuration = require("./Configuration");
var _ConfigurationValue = require("./ConfigurationValue");
var _Consommation = require("./Consommation");
var _ConsommationPosteConso = require("./ConsommationPosteConso");
var _Email = require("./Email");
var _Mesh = require("./Mesh");
var _Model = require("./Model");
var _ModelType = require("./ModelType");
var _OptionConf = require("./OptionConf");
var _Police = require("./Police");
var _PosteConso = require("./PosteConso");
var _Role = require("./Role");
var _Token = require("./Token");
var _TokenType = require("./TokenType");
var _User = require("./User");
var _UserEmail = require("./UserEmail");
var _UserPolice = require("./UserPolice");
var _Value = require("./Value");

function initModels(sequelize) {
  var Asset = _Asset(sequelize, DataTypes);
  var AssetType = _AssetType(sequelize, DataTypes);
  var Concerner = _Concerner(sequelize, DataTypes);
  var Configuration = _Configuration(sequelize, DataTypes);
  var ConfigurationValue = _ConfigurationValue(sequelize, DataTypes);
  var Consommation = _Consommation(sequelize, DataTypes);
  var ConsommationPosteConso = _ConsommationPosteConso(sequelize, DataTypes);
  var Email = _Email(sequelize, DataTypes);
  var Mesh = _Mesh(sequelize, DataTypes);
  var Model = _Model(sequelize, DataTypes);
  var ModelType = _ModelType(sequelize, DataTypes);
  var OptionConf = _OptionConf(sequelize, DataTypes);
  var Police = _Police(sequelize, DataTypes);
  var PosteConso = _PosteConso(sequelize, DataTypes);
  var Role = _Role(sequelize, DataTypes);
  var Token = _Token(sequelize, DataTypes);
  var TokenType = _TokenType(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);
  var UserEmail = _UserEmail(sequelize, DataTypes);
  var UserPolice = _UserPolice(sequelize, DataTypes);
  var Value = _Value(sequelize, DataTypes);

  Configuration.belongsToMany(Value, { as: 'id_Values', through: ConfigurationValue, foreignKey: "id_Configuration", otherKey: "id" });
  Consommation.belongsToMany(PosteConso, { as: 'id_PosteConso_PosteConsos', through: ConsommationPosteConso, foreignKey: "id", otherKey: "id_PosteConso" });
  Email.belongsToMany(User, { as: 'id_Users', through: UserEmail, foreignKey: "id_Email", otherKey: "id" });
  Police.belongsToMany(User, { as: 'id_User_Users', through: UserPolice, foreignKey: "id", otherKey: "id_User" });
  PosteConso.belongsToMany(Consommation, { as: 'id_Consommations', through: ConsommationPosteConso, foreignKey: "id_PosteConso", otherKey: "id" });
  Role.belongsToMany(User, { as: 'id_User_Users', through: Concerner, foreignKey: "id", otherKey: "id_User" });
  User.belongsToMany(Email, { as: 'id_Email_Emails', through: UserEmail, foreignKey: "id", otherKey: "id_Email" });
  User.belongsToMany(Police, { as: 'id_Police', through: UserPolice, foreignKey: "id_User", otherKey: "id" });
  User.belongsToMany(Role, { as: 'id_Roles', through: Concerner, foreignKey: "id_User", otherKey: "id" });
  Value.belongsToMany(Configuration, { as: 'id_Configuration_Configurations', through: ConfigurationValue, foreignKey: "id", otherKey: "id_Configuration" });
  Mesh.belongsTo(Asset, { as: "id_Asset_Asset", foreignKey: "id_Asset"});
  Asset.hasMany(Mesh, { as: "Meshes", foreignKey: "id_Asset"});
  Model.belongsTo(Asset, { as: "id_Asset_Asset", foreignKey: "id_Asset"});
  Asset.hasMany(Model, { as: "Models", foreignKey: "id_Asset"});
  Model.belongsTo(Asset, { as: "id_Asset_ModelAsset3D_Asset", foreignKey: "id_Asset_ModelAsset3D"});
  Asset.hasMany(Model, { as: "id_Asset_ModelAsset3D_Models", foreignKey: "id_Asset_ModelAsset3D"});
  Value.belongsTo(Asset, { as: "id_Asset_Asset", foreignKey: "id_Asset"});
  Asset.hasMany(Value, { as: "Values", foreignKey: "id_Asset"});
  Value.belongsTo(Asset, { as: "id_Asset_AssetValue3D_Asset", foreignKey: "id_Asset_AssetValue3D"});
  Asset.hasMany(Value, { as: "id_Asset_AssetValue3D_Values", foreignKey: "id_Asset_AssetValue3D"});
  Asset.belongsTo(AssetType, { as: "id_AssetType_AssetType", foreignKey: "id_AssetType"});
  AssetType.hasMany(Asset, { as: "Assets", foreignKey: "id_AssetType"});
  ConfigurationValue.belongsTo(Configuration, { as: "id_Configuration_Configuration", foreignKey: "id_Configuration"});
  Configuration.hasMany(ConfigurationValue, { as: "ConfigurationValues", foreignKey: "id_Configuration"});
  ConsommationPosteConso.belongsTo(Consommation, { as: "id_Consommation", foreignKey: "id"});
  Consommation.hasMany(ConsommationPosteConso, { as: "ConsommationPosteConsos", foreignKey: "id"});
  UserEmail.belongsTo(Email, { as: "id_Email_Email", foreignKey: "id_Email"});
  Email.hasMany(UserEmail, { as: "UserEmails", foreignKey: "id_Email"});
  OptionConf.belongsTo(Mesh, { as: "id_Mesh_Mesh", foreignKey: "id_Mesh"});
  Mesh.hasMany(OptionConf, { as: "OptionConfs", foreignKey: "id_Mesh"});
  Configuration.belongsTo(Model, { as: "id_Model_Model", foreignKey: "id_Model"});
  Model.hasMany(Configuration, { as: "Configurations", foreignKey: "id_Model"});
  Consommation.belongsTo(Model, { as: "id_Model_Model", foreignKey: "id_Model"});
  Model.hasMany(Consommation, { as: "Consommations", foreignKey: "id_Model"});
  OptionConf.belongsTo(Model, { as: "id_Model_Model", foreignKey: "id_Model"});
  Model.hasMany(OptionConf, { as: "OptionConfs", foreignKey: "id_Model"});
  Model.belongsTo(ModelType, { as: "id_ModelType_ModelType", foreignKey: "id_ModelType"});
  ModelType.hasMany(Model, { as: "Models", foreignKey: "id_ModelType"});
  Value.belongsTo(OptionConf, { as: "id_OptionConf_OptionConf", foreignKey: "id_OptionConf"});
  OptionConf.hasMany(Value, { as: "Values", foreignKey: "id_OptionConf"});
  UserPolice.belongsTo(Police, { as: "id_Polouse", foreignKey: "id"});
  Police.hasMany(UserPolice, { as: "UserPolice", foreignKey: "id"});
  ConsommationPosteConso.belongsTo(PosteConso, { as: "id_PosteConso_PosteConso", foreignKey: "id_PosteConso"});
  PosteConso.hasMany(ConsommationPosteConso, { as: "ConsommationPosteConsos", foreignKey: "id_PosteConso"});
  Concerner.belongsTo(Role, { as: "id_Role", foreignKey: "id"});
  Role.hasMany(Concerner, { as: "Concerners", foreignKey: "id"});
  Token.belongsTo(TokenType, { as: "id_TokenType_TokenType", foreignKey: "id_TokenType"});
  TokenType.hasMany(Token, { as: "Tokens", foreignKey: "id_TokenType"});
  Concerner.belongsTo(User, { as: "id_User_User", foreignKey: "id_User"});
  User.hasMany(Concerner, { as: "Concerners", foreignKey: "id_User"});
  Configuration.belongsTo(User, { as: "id_User_User", foreignKey: "id_User"});
  User.hasMany(Configuration, { as: "Configurations", foreignKey: "id_User"});
  Token.belongsTo(User, { as: "id_User_User", foreignKey: "id_User"});
  User.hasMany(Token, { as: "Tokens", foreignKey: "id_User"});
  UserEmail.belongsTo(User, { as: "id_User", foreignKey: "id"});
  User.hasMany(UserEmail, { as: "UserEmails", foreignKey: "id"});
  UserPolice.belongsTo(User, { as: "id_User_User", foreignKey: "id_User"});
  User.hasMany(UserPolice, { as: "UserPolice", foreignKey: "id_User"});
  ConfigurationValue.belongsTo(Value, { as: "id_Value", foreignKey: "id"});
  Value.hasMany(ConfigurationValue, { as: "ConfigurationValues", foreignKey: "id"});

  return {
    Asset,
    AssetType,
    Concerner,
    Configuration,
    ConfigurationValue,
    Consommation,
    ConsommationPosteConso,
    Email,
    Mesh,
    Model,
    ModelType,
    OptionConf,
    Police,
    PosteConso,
    Role,
    Token,
    TokenType,
    User,
    UserEmail,
    UserPolice,
    Value,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
