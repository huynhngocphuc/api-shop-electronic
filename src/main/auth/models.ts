import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../db/connection";
import { bcrypt } from "bcrypt";
interface UserAttributes {
  user_id: number;
  username: string;
  email: string;
  password: string;
}
interface UserModel extends Model<UserAttributes>, UserAttributes {}

export const User = sequelize.define<UserModel>(
  "user",
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true, freezeTableName: true }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});
