import { blogList } from "../../constants";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Tooltip } from "react-bootstrap";
import { useFavourites } from "../../context/useFavourites";

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogList[parseInt(id!)];
  const { addToFavourites, removeFromFavourites, favourites } = useFavourites();
  const isFavourite = favourites.some((fav) => fav.id === blog.id);
  return (
    <div>
      <Card
        bg="light"
        border="primary"
        style={{ width: "50em" }}
        className="text-center"
      >
        <Card.Body>
          <Card.Header>{blog.title}</Card.Header>
          <Card.Title>{blog.shortDescription}</Card.Title>
          <Card.Text style={{ padding: "20px" }}>
            {blog.longDescription}
          </Card.Text>
          <Button variant="primary" onClick={() => navigate(-1)}>
            Back To List
          </Button>
          <OverlayTrigger
            placement="top"
            overlay={
              isFavourite ? (
                <Tooltip>Remove from favourites</Tooltip>
              ) : (
                <Tooltip>Add to favourites</Tooltip>
              )
            }
          >
            <Button
              style={{ marginLeft: "10px" }}
              onClick={() =>
                isFavourite
                  ? removeFromFavourites(blog.id)
                  : addToFavourites(blog)
              }
            >
              {isFavourite ? <FaStar color="gold" /> : <FaRegStar />}
            </Button>
          </OverlayTrigger>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BlogPost;
