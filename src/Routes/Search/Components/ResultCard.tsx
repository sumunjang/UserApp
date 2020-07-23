import React from "react";
import {
  ListItemText,
  ListItem,
  List,
  Typography,
  Divider,
} from "@material-ui/core";

interface IProps {
  results: any;
  push: Function;
}

export default class ResultCard extends React.Component<IProps> {
  handleOnClickItem = (placeid: string) => {
    this.props.push(`/form/${placeid}`);
  };
  render = () => (
    <>
      {this.props.results &&
        this.props.results.map((result: any) => (
          <List key={result.placeid}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={result.placename}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      위치: {result.address}
                    </Typography>
                  </React.Fragment>
                }
                onClick={(e: React.MouseEvent) =>
                  this.handleOnClickItem(result.placeid)
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        ))}
    </>
  );
}
