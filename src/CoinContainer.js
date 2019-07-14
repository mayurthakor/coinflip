import React, { Component } from 'react';
import { Choice, choice } from './herlps';
import Coin from './Coin';

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            {side:"heads", imgSrc:'https://tinyurl.com/react-coin-heads-jpg'},
            {side:"tails", imgSrc:'https://tinyurl.com/react-coin-tails-jpg'}
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(state => {
            return {
                currCoin : newCoin,
                nFlips: state.nFlips + 1,
                nHeads: state.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: state.nTails + (newCoin.side === "tails" ? 1 : 0)
            }
        })
    }

    handleClick(e){
        this.flipCoin();
    }

    render(){
        return(
        <div>
            <h2>Let's Toss!!!</h2>
            {this.state.currCoin  && <Coin info={ this.state.currCoin }></Coin>}
            <button onClick={this.handleClick}>Flip Me!</button>
            <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails</p>
        </div>
        )
    }
        
    
}

export default CoinContainer;