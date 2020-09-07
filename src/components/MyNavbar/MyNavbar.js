import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Auth from '../Auth/Auth';

class MyNavbar extends React.Component {
    logoutClickEvent = (e) => {
      e.preventDefault();
      firebase.auth().signOut();
    }

    render() {
      const { authed } = this.props;
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="Navbar">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="Home">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Pricing">Pricing</a>
            </li>
            {
                authed
                  ? <div className="Auth">
                <button className="btn btn-danger" onClick={this.logoutClickEvent}>Google Log out</button>
              </div>
                  : <Auth/>
            }

          </ul>
        </div>
      </nav>
      );
    }
}

export default MyNavbar;
