module.exports = function (sequelize, DataTypes) {
    const Score = sequelize.define("Score", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            validation: {
                isAlphanumeric: true,
                len: [40]
            }
        },
        levelOne: {
            type: DataTypes.JSON
        },
        levelTwo: {
            type: DataTypes.JSON
        },
        levelThree: {
            type: DataTypes.JSON
        }
    }, {
        paranoid: true
    })

    Score.associate = function (models) {
        Score.belongsTo(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Score;
}