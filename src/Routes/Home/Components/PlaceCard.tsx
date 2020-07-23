import React from "react";
import {
  ListItemText,
  ListItem,
  List,
  Typography,
  Divider,
} from "@material-ui/core";

interface IProps {
  recentlyVisits: Array<any>;
}

export default class PlaceCard extends React.Component<IProps> {
  render = () => {
    return (
      <>
        {this.props.recentlyVisits.map((visitplace) => {
          return (
            <List>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={visitplace.placename}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        위치: {visitplace.address}
                      </Typography>
                      {visitplace.visittime}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          );
        })}
      </>
    );
  };
}
