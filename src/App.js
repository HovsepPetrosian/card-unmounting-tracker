import React, { Component } from 'react'
import './App.css';
import Cards from './Cards.json';
import Card from './Card'
import Info from './Info';

class CardsApp extends Component {
  constructor() {
    super();
    this.state = {
      Cards: Cards,
      banner: false,
    };
  }

  changeCount = (key) => {
    this.setState({
      Cards: this.state.Cards.map((card) => {
        if (key === card.value) {
          card.count = card.count + 1;
        }
        return card;
      }),
    });
  };

  showCounts = () => {
    this.state.Cards.map((card) => {
      return <div>{card.count}</div>;
    });
  };

  foo = () => {
    this.setState({
      banner: !this.state.banner,
    });
  };

  render() {
    return (
      <div className="main">
        <div className="cnt">
          {this.state.Cards.map((card) => {
            return (
              <Card
                changeCount={this.changeCount}
                key={card.value}
                value={card.value}
                count={card.count}
              />
            );
          })}
        </div>

        {this.state.banner ? (
          <div className="res">
            <button onClick={this.foo} className="showResultBtn">
              Hide result
            </button>
            <Info list={this.state.Cards} />
          </div>
        ) : (
          <div className="res">
            <button onClick={this.foo} className="showResultBtn">
              Show result
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default CardsApp;
