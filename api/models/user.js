module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        id : {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        userName : {
            type: DataTypes.STRING,
            noteEmpty: true
        },
        email: {
            type: DataTypes.TEXT,
            validate: {
                isEmail: true
            }
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        paranoid: true
    });

    User.associate = function(models) {
        User.hasMany(models.Score, {
            onDelete: "cascade"
        });
    };

    return User;
}