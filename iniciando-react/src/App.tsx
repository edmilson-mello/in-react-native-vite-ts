import { useState } from "react";
import { Tweet } from "./components/Tweet"
import "./App.css"
import { AppRoutes } from "./Routes";

function App() {

  // const [tweets, setTweets] = useState<string[]>([
  //   'tweet 1',
  //   'tweet 2',
  //   'tweet 3',
  //   'tweet 4',
  // ])

  // function createTweet(){
  //   setTweets([
  //     ...tweets,
  //     'tweet 5'
  //   ])
  // } 

  return(
    <AppRoutes />
    // <>
    //   {tweets.map(tweet => {
    //     return <Tweet text={tweet} />
    //   })}

    //   <button
    //     onClick={createTweet}
    //     style={{
    //       backgroundColor: '#8257e6',
    //       border: 0,
    //       padding: '6px 12px',
    //       color: '#fff'
    //     }}
    //   >
    //       Adicionar tweet
    //   </button>
    // </>
  );
}

export default App
