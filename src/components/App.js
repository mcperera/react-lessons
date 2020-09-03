import React from "react";
import "../css/App.css";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Content />
//       <Footer />
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 1800);
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading ? (
          <hi className="splash">Loading...</hi>
        ) : (
          <div>
            <Header />
            <Content />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default App;
