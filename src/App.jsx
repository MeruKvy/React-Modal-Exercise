import { useState } from "react";
import { Modal } from "./assets/components/Modal";

import "./App.css";

function App() {
  const [visible, setVisible] = useState(0);

  return (
    <div>
      <button onClick={() => setVisible(true)}>open modal</button>
      <Modal
        Visible={visible}
        title="Modal Title"
        onClose={() => setVisible(false)}
      >
        <h1>Modal content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel,
          incidunt tempore nihil expedita saepe iure autem optio iusto
          cupiditate pariatur. Libero maiores voluptatibus eveniet laborum, odit
          reprehenderit atque aspernatur.
        </p>
      </Modal>
    </div>
  );
}

export default App;
