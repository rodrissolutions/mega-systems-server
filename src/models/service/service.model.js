import { DataTypes } from "sequelize";

const ServiceModel = (sq) => {
  sq.define(
    "Service",
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

      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estimatedPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },

      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};

export default ServiceModel;
