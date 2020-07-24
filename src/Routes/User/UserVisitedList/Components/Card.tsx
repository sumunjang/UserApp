import React from "react";
import {
  ListItemText,
  ListItem,
  List,
  Typography,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import CookieAPI from "../../../../Components/Cookies/FormCookies";

export default class PlaceCard extends React.Component {
  render = () => {
    const data = CookieAPI.getFormCookies();
    console.log(data);

    return (
      <List>
        <ListItem
          alignItems="flex-start"
          component={Link}
          to="/user/visits/1/1"
        >
          <ListItemText
            primary="숭실대학교"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  위치: 동작구 상도로
                </Typography>
                {" 2020-01-01 12:12:12"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="숭실대2"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  위치 :
                </Typography>
                {"동작구 상도로"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="숭실대3"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  위치 :
                </Typography>
                {"동작구 상도로"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    );
  };
}
