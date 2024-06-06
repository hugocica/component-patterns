import { Atom } from "@phosphor-icons/react";
import Modal from "./components/modal-component-pattern";
import "./App.css";

function App() {
  return (
    <>
      <Modal.Root>
        <Modal.Header>
          <Modal.HeaderTitle>
            <Atom size={24} />
            Título
          </Modal.HeaderTitle>
          <Modal.HeaderCloseButton onClick={() => alert("fechou")} />
        </Modal.Header>

        <Modal.Body>
          <p>TEasfadsadadsadsa</p>
          <p>TEasfadsadadsadsa</p>
          <p>TEasfadsadadsadsa</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="border-slate-800 bg-gray-100">Fechar</button>
          <button className="bg-purple-700 text-white :hover">Confirmar</button>
        </Modal.Footer>
      </Modal.Root>
    </>
  );
}

export default App;
