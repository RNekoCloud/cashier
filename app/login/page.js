"use client";

import { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Form,
  Alert,
  Card,
} from "react-bootstrap";

export default function Login() {
  const [formUser, setFormUser] = useState({
    username: "",
    password: "",
  });

  const [pesan, setPesan] = useState("");

  // State untuk tampilkan
  const [tampil, setTampil] = useState(false);

  // State warna alert
  const [warna, setWarna] = useState("");

  // Handler login
  const handleLogin = async (e) => {
    e.preventDefault();

    // Masukkan data ke server
    const loginApi = await fetch("/api/signin", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formUser),
    });

    const result = await loginApi.json();

    // cek status
    if (result.status == "success") {
      setWarna("success");
    } else if (result.status == "fail") {
      setWarna("danger");
    }

    // Update data pesan
    setPesan(result.message);

    // Update status tampil dari 'false' ke true
    // Supaya pesan register tampil
    setTampil(true);

    console.log(result);
  };

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Cashier App</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="/register">Sign Up</Nav.Link>
            <Nav.Link href="/login" className="active">
              Sign In
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-3">
        <Card>
          <Card.Body>
            {/* Hanya akan tampil, jika nilai dari variable 'tampil' adalah true */}
            {tampil && <Alert variant={warna}>{pesan}</Alert>}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={formUser.username}
                  onChange={(e) =>
                    setFormUser({ ...formUser, username: e.target.value })
                  }
                  placeholder="Masukkan username anda"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={formUser.password}
                  onChange={(e) =>
                    setFormUser({ ...formUser, password: e.target.value })
                  }
                  placeholder="Password"
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={handleLogin}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
