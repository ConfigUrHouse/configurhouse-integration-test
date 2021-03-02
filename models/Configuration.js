const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Configuration', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    id_User: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    id_Model: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Model',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Configuration',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "Configuration_User_FK",
        using: "BTREE",
        fields: [
          { name: "id_User" },
        ]
      },
      {
        name: "Configuration_Model0_FK",
        using: "BTREE",
        fields: [
          { name: "id_Model" },
        ]
      },
    ]
  });
};
