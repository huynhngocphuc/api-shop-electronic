import bcrypt from "bcrypt";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../db/connection";

enum TableFieldName {
  UserId = "userId",
  UserName = "userName",
  Email = "email",
  Password = "passWord",
}
interface UserAttributes {
  [TableFieldName.UserId]?: number;
  [TableFieldName.UserName]: string;
  [TableFieldName.Email]: string;
  [TableFieldName.Password]: string;
}

class User extends Model<UserAttributes> {
  public [TableFieldName.UserId]: number;
  public [TableFieldName.UserName]: string;
  public [TableFieldName.Email]: string;
  public [TableFieldName.Password]: string;
}

User.init(
  {
    [TableFieldName.UserId]: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    [TableFieldName.UserName]: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    [TableFieldName.Email]: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    [TableFieldName.Password]: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user[TableFieldName.Password] = await bcrypt.hash(
    user[TableFieldName.Password],
    salt
  );
});

export { User, TableFieldName };
