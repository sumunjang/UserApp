import React from "react";
import {
  ListItemText,
  ListItem,
  List,
  Typography,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";

interface IProps {
  data: any;
}

export default class PlaceCard extends React.Component<IProps> {
  render = () => {
    console.log(this.props.data);
    return (
      <>
        {this.props.data &&
          this.props.data.map((InformData: any) => {
            return (
              <List>
                <ListItem
                  alignItems="flex-start"
                  component={Link}
                  to={`/user/visits/${InformData.placeid}/${InformData.submitid}`}
                >
                  <ListItemText
                    primary={InformData.placeName}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          위치: {`${InformData.address}`}
                        </Typography>
                        {" 2020-01-01 12:12:12"}
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
