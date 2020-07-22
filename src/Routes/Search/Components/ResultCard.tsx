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
}

export default class PlaceCard extends React.Component<IProps> {
  render = () => (
    <>
      {this.props.results &&
        this.props.results.map((result: any) => (
          <List>
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
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        ))}
    </>
  );
}
