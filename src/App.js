import React, { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import QuoteBox from "./Components/QuoteBox";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState("");
  const [randomId, setRandomId] = useState(Math.floor(Math.random() * 10));
  const [animation, setAnimation] = useState("hide");
  const [toogle, setToogle] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          "https://quotesondesign.com/wp-json/wp/v2/posts/"
        );
        setQuotes(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setAnimation("transition-fadein");
    const timeout = setTimeout(() => {
      setAnimation("");
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [toogle]);

  const handleClick = () => {
    setRandomId(Math.floor(Math.random() * 10));
    setToogle((prevState) => {
      return prevState ? false : true;
    });
  };
  return (
    <div className="App">
      <QuoteBox
        quote={quotes[randomId]}
        author={quotes[randomId]}
        newQuote={handleClick}
        style={animation}
        err={error}
      />
    </div>
  );
}

export default App;
