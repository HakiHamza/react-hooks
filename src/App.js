import "./App.css";
import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";

function App() {
  // useEffect useState useRef useContext => react hooks

  const [posts, setPosts] = useState([]);
  const [IndexNumber, setIndexNumber] = useState(1);
  const [SinglePost, setSinglePost] = useState([]);

  useEffect(() => {
    console.log("hello world");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const nextPost = (e) => {
    e.preventDefault();
    console.log(IndexNumber);
    setIndexNumber(IndexNumber + 1);
    // fetch("https://jsonplaceholder.typicode.com/posts" + IndexNumber);
    fetch(`https://jsonplaceholder.typicode.com/posts/${IndexNumber}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSinglePost(data);
      });
  };

  const prevPost = (e) => {
    e.preventDefault();
    console.log(IndexNumber);

    if (IndexNumber <= 0) {
      //false
      alert("No post found!");
    } else {
      setIndexNumber(IndexNumber - 1);
      //true
      // fetch("https://jsonplaceholder.typicode.com/posts" + IndexNumber);
      fetch(`https://jsonplaceholder.typicode.com/posts/${IndexNumber}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSinglePost(data);
        });
    }
  };

  return (
    <>
      <Container className="text-center mt-5">
        <p>{SinglePost.id}</p>
        <Button variant={"warning"} className="mx-1" onClick={prevPost}>
          Previous Post
        </Button>
        <Button variant={"warning"} onClick={nextPost}>
          Next Post
        </Button>
        <div className="posts">
          <p>{SinglePost.title}</p>
          <br />
          <p>{SinglePost.body}</p>
        </div>
      </Container>
    </>
  );
}

export default App;
