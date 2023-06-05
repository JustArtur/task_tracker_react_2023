import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Index from "./pages/index";
import Info from "./pages/info";
import Project from "./pages/project";

const client = new ApolloClient({
  uri: process.env.REACT_API,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Index />} />
          <Route path="/info" element={<Info />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
