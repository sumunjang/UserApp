import React from "react";
import Alert from "@material-ui/lab/Alert";

interface IProps {
  errorMessage: string;
  errorState: string;
}

export default class Message extends React.Component<IProps> {
  render() {
    const { errorState, errorMessage } = this.props;

    return (
      <>
        {errorState === "error" ? (
          <Alert severity="error">{errorMessage}</Alert>
        ) : (
          ""
        )}
        {errorState === "success" ? (
          <Alert severity="success">{errorMessage}</Alert>
        ) : (
          ""
        )}
      </>
    );
  }
}
