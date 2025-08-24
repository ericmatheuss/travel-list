import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItems={handleAddItems}></Form>
      <PackingList items={items}></PackingList>
      <Stats></Stats>
    </div>
  );
}
