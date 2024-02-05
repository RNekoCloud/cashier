import sequelize from "@/config/database";
import User from "@/model/user";

// POST http://localhost:3000/api/users

export default async function POST(req, res) {
    try {
        // Konek ke database
        await sequelize.authenticate();

        // Migrate Up
        await sequelize.sync();

        const username = req.body.username;
        const password = req.body.password;
        const role = req.body.role;

        // Query insert
        const result = await User.create({
            username: username,
            password: password,
            role: role,
        })

        res.json(result)

    } catch(error) {
        console.log(error)
    }
}