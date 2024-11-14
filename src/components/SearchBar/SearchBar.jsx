import toast from "react-hot-toast";
import css from "./SearchBar.module.css";


export default function SearchBar({ onSearch }) {
const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const search = form.elements.search.value;
    if(form.elements.search.value.trim() === "") {
			 toast.success("Поле не заполненно");
			return;
		}
    onSearch(search);
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
          name="search"
        />
        <button className={css.buttonSearch} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
