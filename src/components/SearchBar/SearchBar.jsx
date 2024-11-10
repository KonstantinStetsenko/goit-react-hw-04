import css from "./SearchBar.module.css";


export default function SearchBar({ onSearch }) {
const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    if(form.elements.topic.value.trim() === "") {
			alert("Please enter search term!")
			return;
		}
    onSearch(topic);
    form.reset();
  };

  return (
    <header className={css.headerSearch}>
      <form onSubmit={handleSubmit}>   
        <input
          className={css.inputSerch}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="topic"
        />
        <button className={css.buttonSearch} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
