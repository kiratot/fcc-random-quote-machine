import React, { useRef } from "react";

const QuoteBox = ({ quote, author, newQuote, style, err }) => {
  const textRef = useRef(null);

  function createMarkup() {
    return { __html: quote.content.rendered };
  }

  return (
    <div id="quote-box">
      {quote ? (
        <div
          id="text"
          className={style}
          ref={textRef}
          dangerouslySetInnerHTML={createMarkup()}
        >
          {}
        </div>
      ) : err ? (
        <h2>{err}</h2>
      ) : (
        <h2 id="text">loading...</h2>
      )}
      {author ? (
        <h3 id="author" className={style}>
          {author.title.rendered}
        </h3>
      ) : (
        <h2 id="author">loading...</h2>
      )}
      <div className="button_wrapper">
        <button className="button" id="new-quote" onClick={newQuote}>
          {" "}
          New quote
        </button>
        <a
          href={"https://twitter.com/intent/tweet"}
          className="button"
          id="tweet-quote"
        >
          share to twitter
        </a>
      </div>
    </div>
  );
};

export default QuoteBox;
