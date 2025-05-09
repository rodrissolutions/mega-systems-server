import { DataTypes } from 'sequelize'

const ProductModel = (sq) => {
  sq.define(
    'Product',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      iva: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      priceIva: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      photo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },

      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },

      isAvailable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      CategoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
    }
  )
}

export default ProductModel
