import { Dialect, Sequelize } from "sequelize";
import { config } from "./config";

const configEnv = config.development;

export const sequelize = new Sequelize({
  username: configEnv.username,
  password: configEnv.password,
  database: configEnv.database,
  host: configEnv.host,
  dialect: configEnv.dialect as Dialect,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    // Đồng bộ hóa mô hình với cơ sở dữ liệu
    return sequelize.sync({ force: true });
  })
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((error) => {
    console.error("Unable to sync database:", error);
  });
