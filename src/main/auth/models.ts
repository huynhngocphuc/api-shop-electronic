import bcrypt from "bcrypt";
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../db/connection";
interface UserAttributes {
  user_id?: number;
  username: string;
  email: string;
  password: string;
}
interface UserModel extends Model<UserAttributes>, UserAttributes {}

class User extends Model {
  public user_id: number;
  public username: string;
  public email: string;
  public password: string;
}

User.init(
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
      allowNull: false,
    },
    password: {
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
  user.password = await bcrypt.hash(user.password, salt);
});




export { User };

