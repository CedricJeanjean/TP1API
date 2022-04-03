import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import ListCarte from './listCarte.js';
import ComponentCard from './componentCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class Interface extends React.Component {

  constructor(props) {
    super(props);
    this.liste = [];
    this.listedeck = [];
    this.tabfinal = [];
}

  componentDidMount() {
    const url = 'http://localhost:3001/cards';

    fetch(url)
      .then(result => result.json())
      .then(result => {
        let tab = []
        let j = 0;

        for (let i = 0; i < result.length; i++) {
          this.liste.push(result[i]);
        }

        this.setState(this.liste);
      })
  }

  handleUpdate = (liste, listedeck) => {
    this.setState(this.liste);
    this.setState(this.listedeck);
  }

  render(){
    return (
      <section className="container-fluid pb-5">
        <div className="row">
            <div className={"col-md-6 "}>
              <div className='container-fluid containers-all-cards pb-4'>
                  <div className="row justify-content-around">
                      <div> <h1> CHAMPIONS DISPONIBLES </h1></div>
                      <ListCarte updateState={this.handleUpdate} liste={this.liste} listedeck={this.listedeck}/>
                  </div>
              </div>
            </div>
          <div className={"col-md-6"}>
            <div className='container-fluid containers-all-cards pb-4'>
              <div className="row justify-content-around">
                    <div> <h1> DECK </h1></div>
                    <ListCarte updateState={this.handleUpdate} liste={this.listedeck} listedeck={this.liste}/>
                </div>
            </div>
          </div>
      </div>
    </section>
    );}
}


export default Interface;
