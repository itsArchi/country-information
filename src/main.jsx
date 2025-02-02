import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>
);
