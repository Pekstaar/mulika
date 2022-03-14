import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainContext } from "./utils/MainContext";
import { useRouter } from "./utils/routes";

function App() {
  const routes = useRouter();

  return (
    <div className="App md:hidden">
      <BrowserRouter>
        <MainContext>
          <Routes>
            {routes &&
              routes.map((r) => (
                <Route exact key={r.path} path={r.path} element={r.element} />
              ))}
          </Routes>
        </MainContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
