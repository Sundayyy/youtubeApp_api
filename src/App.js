import React from "react";
import SearchBar from "./component/SearchBar";
import youtube, { baseParams } from "./api/youtube";
import VideoList from "./component/VideoList";
import VideoDetail from "./component/VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideos: null };

  componentDidMount() {
    this.handleFormSubmit("sucker");
  }
  handleFormSubmit = async (term) => {
    const response = await youtube.get("search", {
      params: {
        ...baseParams,
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideos: response.data.items[0],
    });
  };
  selectedVideos = (video) => {
    this.setState({
      selectedVideos: video,
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar handleSubmit={this.handleFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideos} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                selectedVideos={this.selectedVideos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
