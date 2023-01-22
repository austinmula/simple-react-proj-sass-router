import { BiStar } from "react-icons/bi";
import Button from "../Button";
import CardHeader from "./CardHeader";

function Card({ item }) {
  return (
    <div className="card">
      <CardHeader title={item.title} />
      <CardBody body={item.body} tags={item.tags} reactions={item.reactions} />
      <div className="card-footer">
        <Button
          src={`post/${item.title.replace(/\s/g, "-")}`}
          text={"Read More"}
          id={item.id}
        />
      </div>
    </div>
  );
}

const CardBody = ({ body, tags, reactions }) => {
  return (
    <div className="body-section">
      <p className="text">{body}</p>

      <div className="sub-section">
        <div className="reactions">
          <BiStar style={{ color: "red" }} />
          <span style={{ color: "teal" }}>{reactions}</span>
        </div>
        <div className="tags text">
          {tags.map((item, index) => (
            <small key={index}>{item} | </small>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
