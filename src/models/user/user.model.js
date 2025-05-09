import { DataTypes } from 'sequelize'

const UserModel = (sq) => {
  sq.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [10, 10],
        },
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [10, 10],
        },
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },

      photo: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isUrl: true,
        },
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      role: {
        type: DataTypes.ENUM,
        values: ['Administrador', 'Cliente'],
        defaultValue: 'Cliente',
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  )
}

export default UserModel
