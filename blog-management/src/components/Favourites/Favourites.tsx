import { useFavourites } from "../../context/useFavourites";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Favourites() {
  const navigate = useNavigate();
  const { favourites } = useFavourites();
  const hasFavourites = favourites.length;
  return (
    <div className="card-position">
      {!hasFavourites ? (
        <h4 style={{ color: "red" }}>No Favourite Post Yet.</h4>
      ) : (
        favourites.map((blog) => (
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
                  onClick={() => navigate(`/blog/${blog.id}`)}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
            <br />
          </div>
        ))
      )}
      <hr />
      <Button onClick={() => navigate("/")}>Back to dashboard</Button>
    </div>
  );
}
export default Favourites;
