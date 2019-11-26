import { useQuery } from "@apollo/react-hooks";
import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import ME from "../../graphql/queries";
import paths from "../../routes/paths";

const Hello = ({ history }) => {
  const { loading, error, data } = useQuery(ME);

  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    let intervalId = null;
    if (error) {
      if (!timeLeft) {
        return () => {
          clearInterval(intervalId);
          history.push(paths.login);
        };
      }
      intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }
  }, [timeLeft, error, history]);

  if (loading) return <p>Loading...</p>;
  if (error) {
    return <p>Error :( will return to login in {timeLeft}</p>;
  }

  return (
    <>
      <Typography>{data.me.name}</Typography>
      <Typography>{data.me.email}</Typography>
      <Typography>{data.me.id}</Typography>
    </>
  );
};

export default withRouter(Hello);
