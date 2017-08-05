module.exports = function (sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        review_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        vendor_text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        timestamps: false
    });

    Review.associate = (models) => {
        Review.belongsTo(models.MarketReview, {
            foreignKey: 'marketReview_id'
        });
        Review.belongsTo(models.VendorReview, {
            foreignKey: 'vendorReview_id'
        });
    }
    return Review;
};