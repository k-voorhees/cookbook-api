import React, { Component } from "react";
import MyCarousel from "../MyCarousel.js";
class Home extends Component {
  render() {
    return (
      <div className="content home-page">
        <h1>GREAT FOOD AND AMAZING DRINKS</h1>
        <MyCarousel />
        <div className="home-page-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Enim ut sem viverra aliquet eget. Ipsum suspendisse ultrices gravida dictum fusce ut
            placerat orci. Massa eget egestas purus viverra accumsan in nisl. Tellus id interdum velit laoreet id donec.
          </p>
          <p>
            Viverra nam libero justo laoreet sit amet. Vulputate enim nulla aliquet porttitor lacus luctus accumsan
            tortor posuere. Pretium fusce id velit ut tortor pretium. Orci ac auctor augue mauris augue neque.
          </p>
          <p>
            Diam quam nulla porttitor massa. Eleifend mi in nulla posuere. Sagittis eu volutpat odio facilisis mauris
            sit. Sollicitudin tempor id eu nisl nunc. Neque egestas congue quisque egestas diam in arcu. Eu lobortis
            elementum nibh tellus molestie nunc non blandit massa.this is a test
          </p>
          <p>
            Eget duis at tellus at urna condimentum mattis. Turpis egestas integer eget aliquet nibh praesent tristique.
            Nam at lectus urna duis convallis. Sollicitudin ac orci phasellus egestas. Id leo in vitae turpis massa sed
            elementum tempus egestas. Ultrices eque ornare aenean euismod elementum nisi. Magna ac placerat vestibulum
            lectus mauris ultrices.
          </p>
          <p>
            Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Ac turpis egestas integer eget aliquet nibh
            praesent. Pellentesque elit eget gravida cum sociis natoque penatibus. Feugiat sed lectus vestibulum mattis
            ullamcorper. Arcu dictum varius duis at consectetur. Arcu non sodales neque sodales. Vitae semper quis
            lectus nulla at volutpat diam ut. Donec pretium vulputate sapien nec sagittis aliquam malesuada.
          </p>
          <p>
            Cras adipiscing enim eu turpis egestas pretium aenean. Nec ultrices dui sapien eget mi proin sed. Eget dolor
            morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
