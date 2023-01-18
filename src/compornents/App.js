import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { Form } from "./Form";

import "../scss/_develop/asset.scss";

import {Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import { Send } from "./Send";
import { Login } from "./Login";
import { New } from "./New";
function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<Detail />} />
          <Route path="/recruitform" element={<Form />} />
          <Route path="/send" element={<Send />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<New />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
