import { DataTypes } from 'sequelize'

const SaleModel = (sq) => {
  sq.define(
    'Sale',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      status: {
        type: DataTypes.ENUM,
        values: ['Pendiente', 'Pagada', 'Cancelada', 'En revisión'],
        defaultValue: 'Pendiente',
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
    },
    {
      timestamps: false,
    }
  )
}

export default SaleModel
