import React, { Component} from 'react'
import { Segment,Item,Icon,Button,List } from 'semantic-ui-react'

export default class EventListItem extends Component {
    render() {

        return (
            <Segment.Group>
            <Segment>
              <Item.Group>
                <Item>
                  <Item.Image size="tiny" circular src="" />
                  <Item.Content>
                    <Item.Header as="a">Event Title</Item.Header>
                    <Item.Description>
                      Hosted by <a href="#home">hosted by</a>
                    </Item.Description>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Segment>
            <Segment>
              <span>
                <Icon name="clock" /> date |
                <Icon name="marker" /> time
              </span>
            </Segment>
            <Segment secondary>
              <List horizontal>
                {/* todo: attendees go here */}
              </List>
            </Segment>
            <Segment clearing>
              <Button as="a" color="teal" floated="right" content="View" />
            </Segment>
          </Segment.Group>  
        )
    }
}
