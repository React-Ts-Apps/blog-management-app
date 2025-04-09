import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { blogList } from "../../constants";
import { useNavigate } from "react-router-dom";

function BlogList() {
  const navigate = useNavigate();
  return (
    <div>
      {blogList.map((blog) => (
        <div key={blog.id}>
          <Card
            bg="light"
            border="primary"
            style={{ width: "50em" }}
            className="text-center"
          >
            <Card.Body>
              <Card.Header>
                <Card.Title>{blog.title}</Card.Title>
              </Card.Header>
              <Card.Text style={{ padding: "20px" }}>
                {blog.shortDescription}
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate(`blog/${blog.id}`)}
              >
                Read More
              </Button>
            </Card.Body>
          </Card>
          <br />
        </div>
      ))}
      <hr />
    </div>
  );
}

export default BlogList;
