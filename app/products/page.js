import Sidebar from "@/components/Sidebar";
import { Container } from "react-bootstrap";

export default function Products() {
  return (
    <>
      <Sidebar />
      <main style={{ marginTop: "58px" }}>
        <Container className="pt-4">
          <h2>Hello world</h2>
        </Container>
      </main>
    </>
  );
}
