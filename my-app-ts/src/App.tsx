import React from "react";
import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      Hello World
      <Card
        id={1}
        paragrafo="typescript"
        details="TS para front e back-end"
      />
      <Card
        id={2}
        paragrafo="typescript"
        details="TS para front e back-end"
      />
      <Card
        id={3}
        paragrafo="typescript"
        details="TS para front e back-end"
      />
    </Layout>
  );
}

export default App;
