import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/NewsCards/NewsCards";
import classes from "*.module.css";

const alankey =
  "9f89a25e6f7506a61c43c6c053130c412e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
<img src="https://alan.app/voice/images/previews/prview.jpg" className={classes.alanLogo} alt="alan logo"  />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
};
export default App;
