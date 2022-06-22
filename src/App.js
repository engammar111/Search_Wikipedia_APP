import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "what is React?",
    content: "React is a frontEnd js framework",
  },
  {
    title: "why use React?",
    content: "React is favorite  js framework",
  },
  {
    title: "How do you use React?",
    content: "you use React by creating components",
  },
];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
