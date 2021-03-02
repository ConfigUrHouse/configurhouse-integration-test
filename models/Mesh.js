const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Mesh', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    id_Asset: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Asset',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Mesh',
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
        name: "Mesh_Asset_FK",
        using: "BTREE",
        fields: [
          { name: "id_Asset" },
        ]
      },
    ]
  });
};
