const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ConfigurationValue', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Value',
        key: 'id'
      }
    },
    id_Configuration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Configuration',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'ConfigurationValue',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "id_Configuration" },
        ]
      },
      {
        name: "ConfigurationValue_Configuration0_FK",
        using: "BTREE",
        fields: [
          { name: "id_Configuration" },
        ]
      },
    ]
  });
};
