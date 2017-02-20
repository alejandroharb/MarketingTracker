module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                len: [1,100],
                isAlpha: true
            }
        },
        last_name: {
            type: DataTypes.STRING(140),
            allowNull:false,
            validate: {
                len: [1,140],
                isAlpha: true
            }
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull:false,
            validate: {
                len: [6,100],
                isAlphanumeric: true
            }
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                len: [1,100],
                isEmail: true
            },
        },
        manager: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    },
        {
            classMethods: {
                associate: function(models) {
                    User.hasMany(models.Market, {
                        onDelete: 'cascade'
                    });
                }
            }
        }
    );
    return User;
}