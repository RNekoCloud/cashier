"use client";

import Sidebar from "@/components/Sidebar";
import Wrapper from "@/components/Wrapper";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";


export default function Products() {
  // State untuk menampilkan Modal Box 
  const [tampilkan, setTampilkan] = useState(false);

  
  // Handle function button untuk menampilkan button 
  const handleShow = () => {
    setTampilkan(true)
  }

  // Handle function button untuk menutup modal box 
  const handleClose = () => {
    setTampilkan(false)
  }


  return (
    <>
      <Sidebar />
      <Wrapper childrenElement={<>
        <div className="ms-3">
          <h2>Product</h2>
          <Button className="my-2 shadow" onClick={handleShow}>Tambah Product</Button>
        </div> 
        
        <Modal show={tampilkan}>
            <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>

        </Modal>
        </>} /> 
    </>
  );
}
