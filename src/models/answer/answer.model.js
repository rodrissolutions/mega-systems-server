import { DataTypes } from 'sequelize'

const AnswerModel = (sq) => {
  sq.define(
    'Answer',
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

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },

      ReviewId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Reviews',
          key: 'id',
        },
      },

      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  )
}

export default AnswerModel
