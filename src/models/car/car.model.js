import { DataTypes } from 'sequelize'

const CarModel = (sq) => {
  sq.define(
    'Car',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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

export default CarModel
