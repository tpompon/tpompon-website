import React from 'react';
import './reset.css';
import './App.css';
import './script.js';

import Card from './components/Card'

import { FiMail, FiHeart } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.pic = React.createRef();
  }

  componentDidMount() {
    const pic = this.pic.current;
    pic.ondragstart = () => { return false; };
  }

  render () {
    return (
      <div className="app">
        <div className="contact">Contact me</div>
        <div className="contact-small"><FiMail style={{ marginTop: 6 }} /></div>
        <img className="pic" src="/me.png" ref={this.pic} />
        <h1 className="name">Thomas Pompon</h1>
        <h2 className="bio">20 ans, Étudiant à <a className="italic" href="https://42.fr/" target="_blank">42</a> - Paris</h2>
        <div className="cards-wrap">
          <div className="row-cards">
            <Card
              title="Twitter Messages"
              link="https://tpompon.github.io/twitter-messages/"
              github="https://github.com/tpompon/twitter-messages"
              picture="/projects-thumbs/twitter-messages.png"
              desc="A simple front app clone of Twitter Inbox"
            />
            <Card
              title="Projet"
              picture="/bg.jpg"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              title="Projet"
              picture="/bg.jpg"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          <div className="row-cards">
            <Card
              title="Projet"
              picture="/bg.jpg"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              title="Projet"
              picture="/bg.jpg"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              title="Projet"
              picture="/bg.jpg"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          <div className="row-cards">
            <Card
              title="Projet"
              picture="/bg.jpg"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              title="Projet"
              picture="/bg.jpg"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              title="Projet"
              picture="/bg.jpg"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </div>
        <footer>
          Made with <FiHeart style={{ color: 'crimson' }} /> using <a className="italic" href="http://reactjs.org" target="_blank">React.js</a>
          <div style={{ marginTop: 30 }}>
            <a href="https://twitter.com/_Tospik" target="_blank" className="social-icon"><FaTwitter /></a>
            <a href="https://linkedin.com/in/thomaspompon/" target="_blank" className="social-icon"><FaLinkedinIn /></a>
            <a href="https://github.com/tpompon/" target="_blank" className="social-icon"><FaGithub /></a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
