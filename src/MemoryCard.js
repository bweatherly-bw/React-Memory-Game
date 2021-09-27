import { render } from "@testing-library/react";
import { Component } from "react";



class MemoryCard extends Component {

  clickHandler() {
    alert("Card Clicked");
  }

  render() {
    return (
      <div class="MemoryCard" onClick= {this.clickHandler}>
        <div class="MemoryCardInner">
          <div class="MemoryCardBack">
            <img src="https://cdn2.bulbagarden.net/upload/7/7e/006Charizard.png" />
          </div>
          <div class="MemoryCardFront">∆</div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
