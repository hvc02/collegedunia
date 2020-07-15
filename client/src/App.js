import React from "react";
import Card from "./components/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import colleges from "./assets/data/colleges.json";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: colleges,
      items: Array.from({ length: 4 }),
      hasMore: true,
    };
  }

  fetchMoreData = () => {
    //stop api call when all the data is popped
    if (this.state.items.length >= this.state.data.colleges.length) {
      this.setState({ hasMore: false });
      return;
    }

    // a fake async api call like which sends
    // 4 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 4 })),
      });
    }, 1500);
  };

  render() {
    const { data, items, hasMore } = this.state;
    return (
      <div className="App">
        <h1 className="app_title">Colleges in North India</h1>

        <InfiniteScroll
          dataLength={items.length}
          next={this.fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>That's All Folks! You have seen it all</b>
            </p>
          }
        >
          {items.map((i, index) => (
            <>
              <Card key={index} data={data.colleges[index]}></Card>
            </>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
