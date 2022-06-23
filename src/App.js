import React from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
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

const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Color gree", value: "green" },
  { label: "A Shade of Blue", value: "blue" },
];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown options={options} />
    </div>
  );
};

export default App;
