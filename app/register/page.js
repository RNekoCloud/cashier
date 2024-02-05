"use client";

import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Register() {
    const [formUser, setFormUser] = useState({
        username: "",
        password: "",
        role: "",
    });

    const handleRegister = async(e) => {
        e.preventDefault();

        const registerAPI = await fetch("/api/users", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(formUser)
        });

        console.log(registerAPI.json())
    }

    return (
       <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" value={formUser.username} onChange={(e) => setFormUser({...formUser, username: e.target.value})} placeholder="Masukkan username anda" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={formUser.password} onChange={(e) => setFormUser({...formUser, password: e.target.value})} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Select aria-label="Default select example" onChange={(e) => setFormUser({...formUser, role: e.target.value})}>
            <option>Pilih Tipe Akun</option>
            <option value="admin">Admin</option>
            <option value="petugas">Petugas</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleRegister}>
        Submit
      </Button>
    </Form>

      </Container>
       </>
    )
}