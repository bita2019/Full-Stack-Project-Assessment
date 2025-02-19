import React, { useState } from "react";
// import "./App.css";
// import "./CSS/videocard.css";
import Homepage from "./components/Homepage";
import Video from "./components/Video";
import Response from "./exampleresponse.json";
import { nanoid } from "nanoid";

const myVideo = Response;
const BASE_URL = "http://localhost:8080/";
const ENDPOINT = "task";
const QUERY = "?n=1";
const App = () => {
  const [Response, setResponse] = useState("");
  // const filteredVideo = (id) => videoState.filter((video) => video.id !== id);

  const [addVideo, setAddVideo] = useState(myVideo);
  const [addFormVideo, setAddFormVideo] = useState({
    title: "",
    url: "",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("title");
    const fieldValue = event.target.value;

    const newVideoData = { ...addFormVideo };
    newVideoData[fieldName] = fieldValue;
    setAddFormVideo(newVideoData);

    const newVideos = { ...addFormVideo };
    newVideos[fieldName] = fieldName;

    setAddFormVideo(newVideos);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newVideo = {
      id: nanoid(),
      title: addFormVideo.title,
      url: addFormVideo.url,
    };

    const newVideos = [...addVideo, newVideo];
    setAddVideo(newVideos);
  };

  const handleclick = () => {
    console.log("handleclick running :");
    fetch(BASE_URL + ENDPOINT + QUERY)
      .then((res) => res.json())
      .then((data) => setResponse(data));
  };
  return (
    <div className="card">
      <div>
        <h2 className="add-video-bar">Add New Video : </h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="title"
            required="required"
            placeholder="Enter video Title ..."
            onChange={handleAddFormChange}
          />
          <input
            type="url"
            name="url"
            required="required"
            placeholder="Enter Video Url ..."
            onChange={handleAddFormChange}
          />
          <button
            type="submit"
            className="add-video-button"
            onClick={handleclick}
          >
            Add Video
          </button>
          <div>{Response ? Response : "something"}</div>
        </form>
      </div>

      <Homepage />
      <Video />
    </div>
  );
};

export default App;
