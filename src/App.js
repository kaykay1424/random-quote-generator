// Modules
import $ from 'jquery';
import 'animate.css';
import React from 'react';
// Assets/Components
import './main.scss';
import Quote from './Quote';

class App extends React.Component {
    state = {
        animationsCounter: 0,
        animationsArray: ["animate__fadeIn",
        "animate__flipInX",
        "animate__zoomIn",
        "animate__flipInY"],
        currentAnimation: '',
        error: false,
        quote: '',
        quoteLink: '',
        timer: null,
        twitterLink: ''
    }

    componentDidMount() {
        this.getQuote();
    }

    getQuote = () => { 
      console.log('get quote') 
        const animationsCounter = this.state.animationsCounter;
        const thisState = this;
        this.setState({
          currentAnimation: this.state.animationsArray[this.state.animationsCounter]
        });
        // when animationsCounter reaches end of animationsArray set it to -1 so when it is incremented again in getQuote function, it will be at 0 (beginning of animationsArray)    
        animationsCounter === this.state.animationsArray.length - 1 
        ? this.setState({
            animationsCounter: 0
          })
        : this.setState({
            animationsCounter: this.state.animationsCounter + 1
          });
        // Make API request to Forismatic to retrive quote and author
        $.ajax('https://api.forismatic.com/api/1.0/', {
            dataType: "jsonp",
            data: {format: "jsonp",lang: "en", method: "getQuote"},
            jsonp: "jsonp",
        }).then((data) => {
              const author = data.quoteAuthor !== '' ? data.quoteAuthor : 'Unknown';
              const quote = data.quoteText;         
              thisState.setState({
                  author,
                  quote: quote,
                  quoteLink: data.quoteLink,
                  twitterLink: `https://twitter.com/intent/tweet?hashtags=inspirationalQuotes&text=${quote}-${author}`
              });
          }, () => {
                  this.setState({
                    error: true
                  });            
        });               
    }   
   
    render() {
        return <Quote 
                  author={this.state.author} 
                  currentAnimation={this.state.currentAnimation} 
                  debounce={this.debounce}
                  getQuote={this.getQuote} 
                  quote={this.state.quote} 
                  quoteLink={this.state.quoteLink} 
                  twitterLink={this.state.twitterLink} 
                />            
    } 
}

export default App;
