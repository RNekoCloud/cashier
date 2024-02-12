"use client";

import Sidebar from "@/components/Sidebar";
import Wrapper from "@/components/Wrapper";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";


export default function Products() {
  // State untuk menampilkan Modal Box 
  const [tampilkan, setTampilkan] = useState(false);

  const handleTampilkanAku = () => {
    // Benar
    setTampilkan(true)
  }

  const handleTutupModalBox = () => {
    setTampilkan(false)
  }

  return (
    <>
      <Sidebar />
      <Wrapper childrenElement={<>
        <div className="ms-3">
          <h2>Product</h2>
          <Button className="shadow" onClick={handleTampilkanAku}>Tambah Product</Button>
        </div> 

         <Modal show={tampilkan} >
        <Modal.Header >
          <Modal.Title>Tambah Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nama</Form.Label>
        <Form.Control type="text" placeholder="Nama barang" /> 
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Quantitas</Form.Label>
        <Form.Control type="text" placeholder="Jumlah barang" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Deskripsi</Form.Label>
        <Form.Control type="text" placeholder="Deskripsi barang" />
      </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Harga</Form.Label>
        <Form.Control type="text" placeholder="Harga barang per item" />
      </Form.Group>



         </Form> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleTutupModalBox}>
            Close
          </Button>
          <Button variant="primary"> 
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 
       
       
        </>} /> 
    </>
  );
}
