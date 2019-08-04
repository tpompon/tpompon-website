import React from 'react';

import '../App.css'

import { GoMarkGithub } from "react-icons/go";

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { title, link, github, picture, desc } = this.props;
    return (
      <a className="card" href={ link } target="_blank">
        <img className="card-pic" src={ process.env.PUBLIC_URL + '/projects-thumbs/' + picture } alt="Screenshot" />
        <div className="card-body">
          <div className="row">
            <h3 className="card-title">{ title }</h3>
            <a href={ github } target="_blank"><GoMarkGithub className="github-logo" style={{ color: 'black', marginTop: 7 }} /></a>
          </div>
          <div className="card-desc">{ desc }</div>
        </div>
      </a>
    )
  }
}

export default Card
