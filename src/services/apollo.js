import ApolloClient from "apollo-boost";

export default new ApolloClient({
  uri: `${process.env.REACT_APP_HOST}/graphql`,
  request: operation => {
    const token = localStorage.getItem("authenticationToken");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    });
  }
});
