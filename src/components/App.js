import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
// import Materials from "./Materials";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* <Materials /> */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h3>Found : {this.state.images.length} gambar</h3>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
