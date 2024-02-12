import Sidebar from "@/components/Sidebar";
import Wrapper from "@/components/Wrapper";


export default function Products() {
  return (
    <>
      <Sidebar />
      <Wrapper childrenElement={<>
        <h2>Product page</h2>

        </>} /> 
    </>
  );
}
