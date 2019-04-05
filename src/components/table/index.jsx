import React, { Component } from "react";
import PropTypes from "prop-types";
import helper from "../../utils/helper";
import "./styles.scss";

function Card(props) {
  const { symbol, rank } = props;
  return (
    <div className="card">
      <span>{rank}</span>
      <span>{symbol}</span>
    </div>
  );
}

Card.propTypes = {
  rank: PropTypes.string,
  symbol: PropTypes.string
};

class Table extends Component {
  constructor(props) {
    const deck = helper.getShuffledDeck();
    const hand1 = helper.getCards(deck, 5);
    const hand2 = helper.getCards(deck, 5);
    const activeCard = helper.getCards(deck, 1)[0];
    super(props);
    this.state = {
      deck,
      playerHands: {
        hand1,
        hand2
      },
      activeCard,
      activeUser: "player1",
      players: ["player1", "player2"]
    };
  }
  static propTypes = {
    numberOfPlayes: PropTypes.number
  };

  static defaultProps = {
    numberOfPlayes: 2
  };

  render() {
    const { activeCard, playerHands } = this.state;
    return (
      <div className={"table"}>
        <div>{"Deck"}</div>
        <div>
          <Card symbol={activeCard.symbol} rank={activeCard.rank} />
        </div>
        <div>{`${JSON.stringify(playerHands.hand1)}`}</div>
        <div>{`${JSON.stringify(playerHands.hand2)}`}</div>
      </div>
    );
  }
}

module.exports = {
  Table
};
