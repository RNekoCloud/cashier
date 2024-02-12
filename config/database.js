import { Sequelize } from "sequelize";

// Konfigurasi database
const sequelize = new Sequelize(
    // Nama database
    "cashier_v2",
    // User database
    "root",
    // Password database
    "root",
    // Engine Database Address
    {
        dialect: "mysql",
        // Xampp
        // host: "localhost"
        host: "172.17.0.2",
    }
)

export default sequelize;
