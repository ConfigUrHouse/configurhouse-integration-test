const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OptionConf', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    id_Model: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Model',
        key: 'id'
      }
    },
    id_Mesh: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Mesh',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'OptionConf',
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
        name: "OptionConf_Model_FK",
        using: "BTREE",
        fields: [
          { name: "id_Model" },
        ]
      },
      {
        name: "OptionConf_Mesh0_FK",
        using: "BTREE",
        fields: [
          { name: "id_Mesh" },
        ]
      },
    ]
  });
};
