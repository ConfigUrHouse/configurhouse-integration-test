const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Value', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    is_default: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    id_OptionConf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'OptionConf',
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
    id_Asset_AssetValue3D: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Asset',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Value',
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
        name: "Value_OptionConf_FK",
        using: "BTREE",
        fields: [
          { name: "id_OptionConf" },
        ]
      },
      {
        name: "Value_Asset0_FK",
        using: "BTREE",
        fields: [
          { name: "id_Asset" },
        ]
      },
      {
        name: "Value_Asset1_FK",
        using: "BTREE",
        fields: [
          { name: "id_Asset_AssetValue3D" },
        ]
      },
    ]
  });
};
