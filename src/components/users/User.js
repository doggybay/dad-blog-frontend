import React from 'react'
import { useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";

const User = () => {
  const users = useSelector(state => state.users.all)
  const posts = useSelector(state => state.posts.all)

  let selectedId = 48
  let user = users.filter(user => user.id === selectedId)[0]

  let filteredPosts = posts.filter(post => post.user_id === selectedId)

  let listOfPost = filteredPosts.map(post => {
    if (post.user_id === selectedId) {
      return (
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                {post.title}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{post.body}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      );
    }
  })
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>{user ? user.name : ''}</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
      {listOfPost}
    </div>
  );
}

export default User