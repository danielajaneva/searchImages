import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import ImageList from "./ImageList";

// //HANDLING REQUEST WITH PROMISE (then())
// class App extends React.Component {
//   // onSearchSubmit gets the input from the child(SearchBar)
//   onSearchSubmit(vrednostNaState) {
//     //console.log(vrednostNaState);

//     // Sending request to API and show in console
//     axios
//       .get("https://api.unsplash.com/search/photos", {
//         params: {
//           query: { vrednostNaState },
//         },
//         headers: {
//           Authorization:
//             "Client-ID 2O8ahvOx3hpYC1eKrkLGHfqCIDCFtHvMwCb3TLXIeHs",
//         },
//       })
//       .then((response) => {
//         console.log(response.data.results);
//       });
//   }
// render() {
//     return (
//       <div className="ui container" style={{ marginTop: "10px" }}>
//         <SearchBar invokeValueForInput={this.onSearchSubmit} />
//       </div>
//     );
//   }
// }

//HANDLING REQUEST WITH ASYNC - AWAIT
class App extends React.Component {
  state = { imagesArray: [] };

  // onSearchSubmit gets the input from the child(SearchBar)
  onSearchSubmit = async (vrednostNaState) => {
    //console.log(vrednostNaState);

    // Sending request to API and save in variable for later use
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: { vrednostNaState },
      },
      headers: {
        Authorization: "Client-ID 2O8ahvOx3hpYC1eKrkLGHfqCIDCFtHvMwCb3TLXIeHs",
      },
    });
    //console.log(response.data.results);
    this.setState({ imagesArray: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar invokeValueForInput={this.onSearchSubmit} />
        Found : {this.state.imagesArray.length} images.
        <ImageList images={this.state.imagesArray} />
      </div>
    );
  }
}

export default App;
