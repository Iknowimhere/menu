import { useState } from "react";
import data from "./data";
import Menu from "./Menu";
import Title from "./Title";
import Categories from "./Categories";
const allCategories = ["all", ...new Set(data.map((menu) => menu.category))];
const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filteredCategory = (category) => {
    let newItems = data.filter((menu) => menu.category === category);
    setMenuItems(newItems);
    if (category === "all") {
      setMenuItems(data);
      return;
    }
  };
  return (
    <main>
      <section className='menu'>
        <Title text='Our Menu' />
        <Categories
          categories={categories}
          filteredCategory={filteredCategory}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
