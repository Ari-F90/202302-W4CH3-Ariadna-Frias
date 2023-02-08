import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Form1 } from "../../../features/form/components/form1/form1";

export function App() {
  return (
    <div className="container">
      Form
      <Header></Header>
      <Form1></Form1>
      <Footer></Footer>
    </div>
  );
}
