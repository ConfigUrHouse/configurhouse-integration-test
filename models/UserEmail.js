const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserEmail', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    id_Email: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Email',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'UserEmail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "id_Email" },
        ]
      },
      {
        name: "UserEmail_Email0_FK",
        using: "BTREE",
        fields: [
          { name: "id_Email" },
        ]
      },
    ]
  });
};
