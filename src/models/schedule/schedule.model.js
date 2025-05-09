import { DataTypes } from 'sequelize'

const ScheduleModel = (sq) => {
  sq.define(
    'Schedule',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      day: {
        type: DataTypes.ENUM,
        values: [
          'Lunes',
          'Martes',
          'Miercoles',
          'Jueves',
          'Viernes',
          'Sabado',
          'Domingo',
        ],
        allowNull: false,
      },

      openingHour: {
        type: DataTypes.TIME,
        allowNull: false,
      },

      closingHour: {
        type: DataTypes.TIME,
        allowNull: false,
      },

      isWorking: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      CompanyId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Companies',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  )
}

export default ScheduleModel
