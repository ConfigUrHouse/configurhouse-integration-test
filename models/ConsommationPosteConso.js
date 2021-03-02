const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ConsommationPosteConso', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Consommation',
        key: 'id'
      }
    },
    id_PosteConso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PosteConso',
        key: 'id'
      }
    },
    Conso: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Conso_reference: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ConsommationPosteConso',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "id_PosteConso" },
        ]
      },
      {
        name: "ConsommationPosteConso_PosteConso0_FK",
        using: "BTREE",
        fields: [
          { name: "id_PosteConso" },
        ]
      },
    ]
  });
};
