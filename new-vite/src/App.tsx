import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Basket } from "./pages/basket";
import { Call } from "./pages/call";
import { Purchases } from "./pages/purchases";
import { Profile } from "./pages/Profile";
import { Authorization } from "./pages/authorization";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/call" element={<Call />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
    </>
  );
}
export default App;
