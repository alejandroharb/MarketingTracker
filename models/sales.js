module.exports = function(sequelize, DataTypes) {
    var Sale = sequelize.define("Sale", {
        MonthSales: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        month: {
            type: DataTypes.STRING,
            allowNull:false
        },
    });
    return Sale;
}