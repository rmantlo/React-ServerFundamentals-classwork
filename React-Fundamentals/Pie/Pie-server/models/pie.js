module.exports = (sequelize, DataTypes) => {
    const Pie = sequelize.define('Pie', {
        nameOfPie: {
            type: DataTypes.STRING,
            allowNull: false //means there must be data, cannot be null
        },
        baseOfPie: {
            type: DataTypes.STRING,
            allowNull: false
        },
        crust: {
            type: DataTypes.STRING,
            allowNull: false
        },
        timeToBake: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        servings: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ratings: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    })
    return Pie;
}