import { Routes, Route, Link } from "react-router-dom";
// import "./App.css";

const Home = () => <code>Something cool shall be here soon =)</code>;
const NotFound = () => (
  <>
    <h1>404 my dude.</h1>
    <a href="/">Return to the homepage now!</a>
  </>
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
