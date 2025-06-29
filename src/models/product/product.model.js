import { DataTypes } from "sequelize";

const ProductModel = (sq) => {
  sq.define(
    "Product",
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

      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
        },
      },

      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      scoreAverage: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.0,
      },

      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      color: {
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

      launchDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      guarantee: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
        },
      },

      specification: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      dimensions: {
        type: DataTypes.STRING,
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
          model: "Categories",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );
};

export default ProductModel;
