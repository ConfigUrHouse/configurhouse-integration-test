const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Consommation', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nb_personnes: {
      type: DataTypes.FLOAT,
      allowNull: false
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
    tableName: 'Consommation',
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
        name: "Consommation_Model_FK",
        using: "BTREE",
        fields: [
          { name: "id_Model" },
        ]
      },
    ]
  });
};
