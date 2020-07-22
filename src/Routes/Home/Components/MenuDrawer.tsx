import React from "react";
import { Button, Drawer, ListItemIcon, ListItemText } from "@material-ui/core";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MenuIcon from "@material-ui/icons/Menu";
import RoomIcon from "@material-ui/icons/Room";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link, RouteComponentProps } from "react-router-dom";
import Routes from "../../../Components/Routes";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LoginCookies from "../../../Components/Cookies/LoginCookies";

interface IState {
  isOpen: boolean;
}

export default class MenuBar extends React.Component<{}, IState> {
  state = {
    isOpen: false,
  };

  toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    this.setState({ ...this.state, isOpen: open });
  };

  handleClickLogout = (e: React.MouseEvent) => {
    LoginCookies.setLoginCookies(undefined);
    window.location.href = "/";
  };

  list = () => (
    <div
      role="presentation"
      onClick={this.toggleDrawer(false)}
      onKeyDown={this.toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to={Routes.UserProfile}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={"프로필"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to={Routes.UserVisitedList}>
          <ListItemIcon>
            <RoomIcon />
          </ListItemIcon>
          <ListItemText primary={"최근방문장소"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={this.handleClickLogout}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary={"로그아웃"} />
        </ListItem>
      </List>
    </div>
  );

  render = () => (
    <div>
      <React.Fragment>
        <Button onClick={this.toggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <Drawer open={this.state.isOpen} onClose={this.toggleDrawer(false)}>
          {this.list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
