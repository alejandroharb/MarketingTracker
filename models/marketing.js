module.exports = function(sequelize, DataTypes) {
    var Marketing = sequelize.define("Marketing", {
        latitude: {
            type: DataTypes.FLOAT(15),
            allowNull: false,
            validate: {
                len: [1,100]
            }
        },
        longitude: {
            type: DataTypes.FLOAT(15),
            allowNull: false,
            validate: {
                len: [1,100]
            }
        },
        marketingSucess: {
            type: DataTypes.Boolean,
            allowNull:true,
        },
        comment: {
            type: DataTypes.Text,
            allowNull:true,
            validate: {
                len: [0, 300]
            }
        },
        category: {
            type: DataTypes.STRING(100),
            allowNull:true
        }
        {
            classMethods: {
                associate: function(models) {
                    Marketign.belongsTo(models.User) {
                        foreignKey: {
                            allowNull:false
                        }
                    }
                }
            }
        }
    });
    return Marketing;
}