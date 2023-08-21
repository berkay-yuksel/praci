import categoriesStyles from "@/styles/categories.module.css";

const Categories = () => {
  return (
    <div className={categoriesStyles.container}>
      <div className={categoriesStyles.title}>
        <h1>LES INCONTOURNABLES</h1> <p>Shop Now {"->"}</p>
      </div>

      <div className={categoriesStyles.cards_container}>
        <div className={categoriesStyles.card_one}>
          <div>
            <h4>ALL THE</h4>
            <h3>BAGS</h3>
            <button>DISCOVER MORE</button>
          </div>
        </div>

        <div className={categoriesStyles.card_two}>
          <div>
            <h4>ALL THE</h4>
            <h3>BAGS</h3>
            <button>DISCOVER MORE</button>
          </div>
        </div>

        <div className={categoriesStyles.card_three}>
          <div>
            <h4>ALL THE</h4>
            <h3>BAGS</h3>
            <button>DISCOVER MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
