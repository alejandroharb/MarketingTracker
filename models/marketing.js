module.exports = function(sequelize, DataTypes) {
    var Market = sequelize.define("Market", {
        latitude: {
            type: DataTypes.FLOAT(15,15),
            allowNull: false,
            validate: {
                len: [1,100]
            }
        },
        longitude: {
            type: DataTypes.FLOAT(15,15),
            allowNull: false,
            validate: {
                len: [1,100]
            }
        },
        marketingSuccess: {
            type: DataTypes.BOOLEAN,
            allowNull:true
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull:true,
            validate: {
                len: [0, 300]
            }
        },
        category: {
            type: DataTypes.STRING(100),
            allowNull:true
        }
    },
        {
            classMethods: {
                associate: function(models) {
                    Market.belongsTo(models.User, {
                        foreignKey: {
                            allowNull:false
                        }
                    });
                }
            }
        }
    );
    return Market;
}