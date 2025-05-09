import { DataTypes } from 'sequelize'

const ViewModel = (sq) => {
  sq.define(
    'View',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      firtView: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },

      lastView: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      ProductId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Products',
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

export default ViewModel
