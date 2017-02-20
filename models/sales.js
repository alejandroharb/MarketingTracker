module.exports = function(sequelize, DataTypes) {
    var Sale = sequelize.define("Sale", {
        monthSales: {
            type: DataTypes.INTEGER(50),
            allowNull: false
        },
        month: {
            type: DataTypes.STRING(30),
            allowNull:false
        },
    });
    return Sale;
}