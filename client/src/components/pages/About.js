import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="content about-page">
        <div className="tech-stack-images">
          <img src={require("./images/mongo-logo200x250.png")} alt="mongodb logo" />
          <img src={require("./images/express-logo250x250.png")} alt="express logo" />
          <img src={require("./images/react-logo250x250.png")} alt="react logo" />
          <img src={require("./images/node-logo250x250.png")} alt="node logo" />
        </div>
        <div className="about-page-body">
          <p>
            This is a project I have been working on to demonstrate my ability to create a well rounded full stack
            application utilizing the MERN stack. I drew inspiration for the project from my interest in cooking. I
            built a webscraper using axios and cheerio to scrape the recipes and images, and then used that data to
            populate my database on MongoDB.
          </p>
          <p>
            This is actually the second time I have built this project. The original version simply showed my
            proficiency in building a react front end. I rebuilt it from the ground up this time on top of my ExpressAPI
            and database and made sure to revamp the React front end which has resulted in a cleaner codebase overall.
          </p>
          <p>
            As of right now, this project is complete and functional as a blog post type of website. I have plans to add
            on to this project to create a dashboard that would allow the owner of the blog to create, update, and
            delete posts in the future.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
