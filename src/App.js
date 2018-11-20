import React, { Component } from 'react';
import './App.css';

const list = [
  {
    gender: "female",
    name: {
    title: "ms",
    first: "pilar",
    last: "navarro"
    },
    location: {
    street: "6712 calle de la luna",
    city: "sevilla",
    state: "cantabria",
    postcode: 90029,
    coordinates: {
    latitude: "-19.1005",
    longitude: "32.8783"
    },
    timezone: {
    offset: "+2:00",
    description: "Kaliningrad, South Africa"
    }
    },
    email: "pilar.navarro@example.com",
    login: {
    uuid: "caa8a8d3-e3aa-4eed-bce8-922e45481c69",
    username: "lazymeercat259",
    password: "terminal",
    salt: "mOP56ZBW",
    md5: "f55b3b070dbe90feee2402eb28b037ba",
    sha1: "892f294ff6df98d903d38c5f9f5ed8b4886030d2",
    sha256: "14eee9e4858cb0c543790c9840199a44c23531e3522b918f37562044f1e54617"
    },
    dob: {
    date: "1953-10-28T23:26:31Z",
    age: 65
    },
    registered: {
    date: "2017-04-23T19:50:22Z",
    age: 1
    },
    phone: "933-517-350",
    cell: "611-220-666",
    id: {
    name: "DNI",
    value: "36260373-G"
    },
    picture: {
    large: "https://randomuser.me/api/portraits/women/27.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/27.jpg"
    },
    nat: "ES"
    },

    {
      gender: "male",
      name: {
      title: "mr",
      first: "pile",
      last: "shill"
      },
      location: {
      street: "6712 calle de la luna",
      city: "sevilla",
      state: "cantabria",
      postcode: 90029,
      coordinates: {
      latitude: "-19.1005",
      longitude: "32.8783"
      },
      timezone: {
      offset: "+2:00",
      description: "Kaliningrad, South Africa"
      }
      },
      email: "pilar.navarro@example.com",
      login: {
      uuid: "caa8a8d3-e3aa-4eed-bce8-922e45481c69",
      username: "lazymeercat259",
      password: "terminal",
      salt: "mOP56ZBW",
      md5: "f55b3b070dbe90feee2402eb28b037ba",
      sha1: "892f294ff6df98d903d38c5f9f5ed8b4886030d2",
      sha256: "14eee9e4858cb0c543790c9840199a44c23531e3522b918f37562044f1e54617"
      },
      dob: {
      date: "1953-10-28T23:26:31Z",
      age: 62
      },
      registered: {
      date: "2017-04-23T19:50:23Z",
      age: 2
      },
      phone: "933-517-350",
      cell: "611-220-666",
      id: {
      name: "DNI",
      value: "36260373-G"
      },
      picture: {
      large: "https://randomuser.me/api/portraits/women/27.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/27.jpg"
      },
      nat: "ES"
      }
];

class App extends Component {
  
  render() {
    return (
      <div className="App">
        {list.map(item =>
          <div key={item.registered.date}>
            <span>
              <a href={item.name.title}>{item.name.last}</a>
            </span>
            <span>{item.gender}</span>
            <span>{item.dob.age}</span>
            <span>{item.email}</span>
          </div>
        )}
      </div>
    );
  }
}

export default App;