import { DataTypes } from 'sequelize'

const ServiceDetailModel = (sq) => {
  sq.define(
    'ServiceDetail',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
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

      ServiceId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Services',
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

export default ServiceDetailModel
