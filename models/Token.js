const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Token', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    expired_at: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    validate_at: {
      type: DataTypes.DATEONLY,
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
    id_TokenType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TokenType',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Token',
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
        name: "Token_User_FK",
        using: "BTREE",
        fields: [
          { name: "id_User" },
        ]
      },
      {
        name: "Token_TokenType0_FK",
        using: "BTREE",
        fields: [
          { name: "id_TokenType" },
        ]
      },
    ]
  });
};
