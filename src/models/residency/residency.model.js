import { DataTypes } from 'sequelize'

const ResidencyModel = (sq) => {
  sq.define(
    'Residency',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      address: {
        type: DataTypes.STRING,
        allowNull: false,
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

export default ResidencyModel
