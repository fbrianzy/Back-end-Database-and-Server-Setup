const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Konfigurasi PostgreSQL
const pool = new Pool({
  user: "admin",
  host: "db",
  database: "sampledb",
  password: "admin123",
  port: 5432, // Default PostgreSQL port
});

// Set search_path untuk schema admin_bank
pool.on("connect", (client) => {
  client.query("SET search_path TO admin_bank;");
});

// Endpoint untuk mendapatkan data users
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM admin_bank.User;");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send("Error fetching users.");
  }
});

app.get("/users_identity", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM admin_bank.User_Identity;");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching users_identity:", err);
    res.status(500).send("Error fetching users_identity.");
  }
});

app.get("/rekening", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM admin_bank.Rekening;");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching rekening:", err);
    res.status(500).send("Error fetching rekening.");
  }
});

app.get("/kartu", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM admin_bank.Kartu;");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching kartu:", err);
    res.status(500).send("Error fetching kartu.");
  }
});

app.get("/mutasi_rekening", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM admin_bank.Mutasi_Rekening;"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching mutasi_rekening:", err);
    res.status(500).send("Error fetching mutasi_rekening.");
  }
});

app.get("/transaction", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM admin_bank.Transaction;");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching Transaction:", err);
    res.status(500).send("Error fetching Transaction.");
  }
});

app.get("/receipt", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM admin_bank.Receipt;");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching receipt:", err);
    res.status(500).send("Error fetching receipt.");
  }
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
