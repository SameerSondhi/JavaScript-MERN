import React, { Component } from 'react';
// import { useState } from 'react'

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age

        }
            
        }

        increaseAge = () => {
            console.log("I was clicked");
            this.setState({
                age: this.state.age+1
    
            });
        }
        
        render() {
            const {firstName, lastName, hairColor} = this.props
            return (
                <div>
                    <h1>{lastName}, {firstName}</h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {hairColor}</p>
                    <button className="btn btn-outline-primary" onClick={this.increaseAge}>Wish {firstName} A Happy Birthday!</button>
                </div>
            );
        }
    }
export default PersonCard;
