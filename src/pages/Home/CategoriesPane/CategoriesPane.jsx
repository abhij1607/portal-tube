const CategoriesPane = () => {
  return (
    <aside className="pd-y-base pd-x-sm">
      <ul className="flex-row gap-2">
        <li>
          <button className="btn btn-primary">All</button>
        </li>
        <li>
          <button className="btn btn-secondary">Action</button>
        </li>
        <li>
          <button className="btn btn-secondary">Adventure</button>
        </li>
        <li>
          <button className="btn btn-secondary">Role-playing</button>
        </li>
        <li>
          <button className="btn btn-secondary">Shooter</button>
        </li>
        <li>
          <button className="btn btn-secondary">Sports</button>
        </li>
      </ul>
    </aside>
  );
};

export { CategoriesPane };
