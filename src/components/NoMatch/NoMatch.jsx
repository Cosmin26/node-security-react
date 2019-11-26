import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";
import paths from "../../routes/paths";

const NoMatch = () => (
  <div>
    <h2>404</h2>
    <h3>Something went wrong!</h3>
    <Link to={paths.login}>
      <Button>&larr; Go Back</Button>
    </Link>
  </div>
);

export default NoMatch;
