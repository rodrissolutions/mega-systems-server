import { DataTypes } from 'sequelize'

const ReviewModel = (sq) => {
  sq.define(
    'Review',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },

      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },

      ProductId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  )
}

export default ReviewModel
