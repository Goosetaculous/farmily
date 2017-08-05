module.exports = function (sequelize, DataTypes) {
    var Produce = sequelize.define("Produce", {
        vendor_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        item: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    Produce.associate = (models) => {
        Produce.hasMany(models.Vendor, {
            foreignKey: 'produce_id'
        });
    }
    return Produce;
};