import "./CategoriesPane.css";
import { useData } from "../../../../context/data-context";

const CategoriesPane = () => {
  const {
    dataState: { categories, selectedCategory },
    dataDispatch,
  } = useData();

  return (
    <aside className="pd-y-base pd-x-sm flex-row gap-2 categories">
      <li>
        <button
          className={`btn ${
            selectedCategory === "All" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() =>
            dataDispatch({
              type: "SELECT_CATEGORY",
              payload: "All",
            })
          }
        >
          All
        </button>
      </li>
      {categories.map((category) => {
        return (
          <li key={category._id}>
            <button
              className={`btn wd-max ${
                selectedCategory === category.categoryName
                  ? "btn-primary"
                  : "btn-secondary"
              }`}
              onClick={() =>
                dataDispatch({
                  type: "SELECT_CATEGORY",
                  payload: category.categoryName,
                })
              }
            >
              {category.categoryName}
            </button>
          </li>
        );
      })}
    </aside>
  );
};

export { CategoriesPane };
