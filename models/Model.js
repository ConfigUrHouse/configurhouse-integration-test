const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Model', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    id_ModelType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ModelType',
        key: 'id'
      }
    },
    id_Asset: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Asset',
        key: 'id'
      }
    },
    id_Asset_ModelAsset3D: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Asset',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Model',
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
        name: "Model_ModelType_FK",
        using: "BTREE",
        fields: [
          { name: "id_ModelType" },
        ]
      },
      {
        name: "Model_Asset0_FK",
        using: "BTREE",
        fields: [
          { name: "id_Asset" },
        ]
      },
      {
        name: "Model_Asset1_FK",
        using: "BTREE",
        fields: [
          { name: "id_Asset_ModelAsset3D" },
        ]
      },
    ]
  });
};
