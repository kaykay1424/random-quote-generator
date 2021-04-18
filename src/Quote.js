import React from 'react';
import debounce from 'lodash.debounce';

let Quote = ({author, currentAnimation, getQuote, quote, quoteLink, twitterLink}) => {
    return (
        <div 
            id="quote-box" 
            className="container"
        >          
            <div className="row quote-title-row">   
                <div className="col-md-6 offset-md-3 col-sm-8 offset-sm-2">
                    <h1 
                        id="quote-topic-title" 
                        className="text-center mx-auto"
                    >
                        Inspirational Quotes
                    </h1>
                </div>     
            </div> {/* /row */}
            <div className="row quote-display-row">    
                <div 
                    id="quote-display" 
                    className="col-md-6 offset-md-3 col-sm-8 offset-sm-2"
                >       
                    <p 
                        id="quote" 
                        className={`animate__animated ${currentAnimation}`}
                    >
                        {quote}
                    </p>
                    <p 
                        id="author" 
                        className={`animate__animated ${currentAnimation}`}
                    >
                        -{author}
                    </p>                      
                    <div className="text-center">
                        <button 
                            id="new-quote" 
                            className="btn" 
                            onClick={debounce(() => getQuote(),300)}
                        > 
                            New Quote 
                        </button>
                        <a 
                            id="quote-source" 
                            className="btn" 
                            href={quoteLink} 
                            rel="noreferrer"
                            target="_blank"
                        > 
                            Source 
                        </a>
                        <a 
                            id="tweet-quote" 
                            className="btn" 
                            href={twitterLink} 
                            rel="noreferrer"
                            target="_blank"
                        > 
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>  
                    </div>
                </div> {/* /column */}                  
            </div> {/* /row */}
        </div>
    );

  }

  export default Quote;