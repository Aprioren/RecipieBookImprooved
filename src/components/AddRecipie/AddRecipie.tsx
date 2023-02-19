import React, { useState } from 'react';

interface Recipe {
  name: string;
  grams: number;
  milliliters: number;
}

const AddRecipe: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe>({ name: '', grams: 0, milliliters: 0 });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(recipe);
    // здесь можно отправить данные на сервер или сохранить их в состоянии компонента App
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRecipe(prevRecipe => ({ ...prevRecipe, [name]: value }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setRecipe(prevRecipe => ({ ...prevRecipe, [name]: Number(value) }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Название:</label>
      <input type="text" id="name" name="name" value={recipe.name} onChange={handleInputChange} />

      <label htmlFor="grams">Количество грамм:</label>
      <input type="number" id="grams" name="grams" value={recipe.grams} onChange={handleInputChange} />

      <label htmlFor="milliliters">Количество миллилитров:</label>
      <select id="milliliters" name="milliliters" value={recipe.milliliters} onChange={handleSelectChange}>
        {Array.from(Array(1000).keys()).map((value) => (
          <option key={value} value={value + 1}>{value + 1}</option>
        ))}
      </select>

      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddRecipe;
