
module.exports = (sequelize, DataTypes) => {
  const Doc = sequelize.define('Doc', {
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 1000000],
        }
      }
    },
    access: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Private'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  }, {
    classMethods: {
      associate: (models) => {
        Doc.belongsTo(models.User, {
          foreignKey: 'userId',
          // as: 'userName',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return Doc;
};
