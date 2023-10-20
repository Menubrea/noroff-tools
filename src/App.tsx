import "./App.css";
import { Layout } from "./components";
import { CodeGeneratorPage, ReportTemplatePage } from "./components/pages";

function App() {
  const route = window.location.pathname;

  return (
    <>
      <Layout>
        {route === "/" && <CodeGeneratorPage />}
        {route === "/report-template" && <ReportTemplatePage />}
      </Layout>
    </>
  );
}

export default App;
