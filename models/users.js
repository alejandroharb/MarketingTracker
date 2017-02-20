module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                len: [1,100]
            }
        },
        last_name: {
            type: DataTypes.STRING(140),
            allowNull:false,
            validate: {
                len: [1,140],
                is: ["^[a-z]+$",'i'] //letters only
            }
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull:false,
            validate: {
                len: [6,100], //at least 6 letters long
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
            type: DataTypes.Boolean,
            allowNull: false
        },
        {
            classMethods: {
                associate: function(models) {
                    User.hasMany(models.marketing, {
                        onDelete: 'cascade'
                    })
                }
            }
        }
    });
    return User;
}