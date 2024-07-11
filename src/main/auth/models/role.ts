import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../db/connection";

enum TableRoleFieldName {
  RoleId = "roleId",
  RoleName = "roleName",
}

interface RoleAttributes {
  [TableRoleFieldName.RoleId]: number;
  [TableRoleFieldName.RoleName]: string;
}

class Role extends Model<RoleAttributes> {
  public [TableRoleFieldName.RoleId]: number;
  public [TableRoleFieldName.RoleName]: string;
}

Role.init(
  {
    [TableRoleFieldName.RoleId]: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    [TableRoleFieldName.RoleName]: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize,
    paranoid: true,
    freezeTableName: true, // lấy tên model làm tên bảng
   }
);

export { Role, TableRoleFieldName };
