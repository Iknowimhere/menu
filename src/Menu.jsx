import MenuItems from "./MenuItems";

const Menu = ({ items }) => {
  return (
    <section className='section-center'>
      {items.map((menuItems) => {
        return <MenuItems key={menuItems.id} {...menuItems} />;
      })}
    </section>
  );
};

export default Menu;
