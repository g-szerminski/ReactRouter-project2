import React from "react";
import { Route, Redirect } from "react-router-dom";

const permition = true;

const AdminPage = () => {
  return (
    <Route
      render={() =>
        permition ? <h3>Panel admina</h3> : <Redirect to="/login" />
      }
    />
  );
};

export default AdminPage;
