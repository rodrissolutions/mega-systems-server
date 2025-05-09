import { DataTypes } from 'sequelize'

const ItemModel = (sq) => {
  sq.define(
    'Item',
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

      CarId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Cars',
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

export default ItemModel
