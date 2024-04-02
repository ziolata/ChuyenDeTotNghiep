import { Routes, Route } from "react-router-dom";
import Header from "./Components/User/Layout/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
  );
}

export default App;
