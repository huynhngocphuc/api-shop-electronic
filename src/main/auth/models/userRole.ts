import { Model } from "sequelize";
import { sequelize } from "../../../db/connection";
import { User } from "./user";
import { Role } from "./role";

class UserRole extends Model{}

UserRole.init(
  {},{sequelize, tableName: "user_role"})

User.belongsToMany(Role,{through: UserRole,as: "roles"})
Role.belongsToMany(User,{through: UserRole,as: "users"})

export default UserRole;