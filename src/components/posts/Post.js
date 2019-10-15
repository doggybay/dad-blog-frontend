import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Post = ({ post }) => {
  const users = useSelector(state => state.users.all);
  
  let user = users.filter(user => user.id === post.user_id)[0]

  return (
    <Card className="text-center" key={post.id}>
      <Card.Header>{post.title}</Card.Header>
      <Card.Body>
        <Card.Title>{user ? user.name : ''}</Card.Title>
        <Card.Text>
          {post.body}
        </Card.Text>
        <Button variant="primary">View Blog</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{post.created_at}</Card.Footer>
    </Card>
  );
};

export default Post;
