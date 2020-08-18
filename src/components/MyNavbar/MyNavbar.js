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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="Navbar">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="Home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Features">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Pricing">Pricing</a>
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
