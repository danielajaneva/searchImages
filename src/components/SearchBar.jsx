import React from "react";

//CONTROLED ELEMENT - with state
class SearchBar extends React.Component {
  state = { vrednostNaState: "" };

  //   //TypeError: Cannot read property 'state' of undefined
  //   //If the function looks like this below, it will show
  //   //the error above
  //
  //   onFormSubmit(event) {
  //     event.preventDefault();
  //     console.log(this.state.vrednostNaState);
  //   }
  //   //we have to change it to arrow func to fix it
  onFormSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state.vrednostNaState);

    //INVOKING CALLBACK FUNC FROM PARENT "App" in CHILD
    // invokeValueForInput is a property of <SearchBar/> in App component
    // and here we are importing the value of the state
    this.props.invokeValueForInput(this.state.vrednostNaState);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={(event) =>
                this.setState({ vrednostNaState: event.target.value })
              }
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

// UNCONTROLED ELEMENT
// DUMMY COMPONENT - NO STATE (directly sending the result to the parent component)

// class SearchBar extends React.Component {
//     onInputChange(event) {
//       console.log(event.target.value);
//     }

//     render() {
//       return (
//         <div className="ui segment">
//           <form className="ui form">
//             <div className="field">
//               <label>Image Search</label>
//               <input type="text" onChange={this.onInputChange}></input>
//             </div>
//           </form>
//         </div>
//       );
//     }
//   }

export default SearchBar;
