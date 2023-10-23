import "./App.css";
import { Layout } from "./components";
import { CodeGeneratorPage, HarvardizeItPage } from "./components/pages";

function App() {
  const route = window.location.pathname;

  return (
    <>
      <Layout>
        {route === "/" && <CodeGeneratorPage />}
        {route === "/harvardize-it" && <HarvardizeItPage />}
      </Layout>
    </>
  );
}

export default App;
