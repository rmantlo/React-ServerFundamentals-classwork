module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true  //can only use an email once per database, so cant have mutliple accounts per email
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return User;
}