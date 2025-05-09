import { DataTypes } from 'sequelize'

const AppointmentModel = (sq) => {
  sq.define(
    'Appointment',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      time: {
        type: DataTypes.TIME,
        allowNull: false,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },

      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },

      ProductId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'Products',
          key: 'id',
        },
      },
    },
    { timestamps: false }
  )
}

export default AppointmentModel
