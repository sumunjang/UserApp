import React from "react";
import {
  ListItemText,
  ListItem,
  List,
  Typography,
  Divider,
} from "@material-ui/core";
import styled from "styled-components";

interface IProps {
  keywords: Array<any>;
}

export default class PlaceCard extends React.Component<IProps> {
  render = () => {
    const Containter = styled.div`
      margin-top: 200px;
    `;
    return (
      <>
        {this.props.keywords.map((keyword) => {
          return (
            <Containter>
              <List>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          {keyword.keyword}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            </Containter>
          );
        })}
      </>
    );
  };
}
