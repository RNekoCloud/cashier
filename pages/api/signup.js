import sequelize from "@/config/database";
import User from "@/model/user";
// yarn add bcrypt
import bcrypt from "bcrypt";
import UserService from "@/service/UserService";

// POST http://localhost:3000/api/signup

export default async function POST(req, res) {
  try {
    // Ambil data asli password
    const pass = req.body.password;

    // Generate salt untuk menghasilkan hash password
    const salt = bcrypt.genSaltSync(12);

    // Hash password
    const hash = bcrypt.hashSync(pass, salt);

    // Initialisasi class instance
    const userService = new UserService(sequelize, User);

    /* 
        * Sebelum kita mendaftarkan user baru,
        * kita perlu mengecek apakah username sudah terpakai atau belum.
        * Jika username sudah terdaftar. Maka kembalikan response gagal.
        * Jika username belum terdaftar, maka insert data ke database.
     
        * Cek apakah user sudah terdaftar
        */

    const check = await userService.find(req.body.username);

    console.log(`Count:`, check);

    if (check.length != 0) {
      return res.status(500).json({
        status: "fail",
        message: "User sudah terdaftar",
      });
    }

    // Kalau belum terdaftar, maka boleh sign up / register
    const register = await userService.store({
      username: req.body.username,
      // Bukan req.body.password
      password: hash,
      role: req.body.role,
    });

    // HTTP Status Code
    // 200 - OK (Biasa digunakan saat mengambil data)
    // 201 - Created(Biasa digunakan saat menambah data)
    // 500 - Internal Server Error (Gagal menambah database, koneksi error database dlll)

    return res.status(201).json({
      status: "success",
      message: "Berhasil mendaftarkan user baru",
      result: register,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Gagal daftar user karena internal error",
    });
  }
}
