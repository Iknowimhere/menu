const Categories = ({ categories,filteredCategory}) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button type='button' className='btn' onClick={()=>filteredCategory(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
