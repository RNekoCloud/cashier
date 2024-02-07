import UserService from "@/service/UserService";
import sequelize from "@/config/database";
import User from "@/model/user";
import bcrypt from "bcrypt";

export default async function POST(req, res) {
    try {
        const userService = new UserService(sequelize, User);

        // Ambil data request
        const username = req.body.username;
        // Ambil plain password
        const password = req.body.password;

        const result = await userService.find(username);

        // Cek apabila user belum terdatar, maka tidak boleh login
        // Harus register dulu
        if(result.length == 0) {
            return res.status(200).json({
                message: "User belum terdaftar. Silahkan register dulu",
                status: "fail",
            })
        }

        // Ambil password hash
        const hash = result[0].password;

        // Cek apakah password benar
       const cekPassword = bcrypt.compareSync(password, hash)

       if(!cekPassword){ 
            return res.status(400).json({
                message: "Password salah. Silahkan masukkan password  yang benar",
                status: "fail",
            })
       }

       return res.status(200).json({
            message: "Berhasil login",
            status: "success"
       })

    } catch(err) {
        return res.status(500).json({
            status: "fail",
            message: `Terdapat error ${err}`
        })
    }
}