import categoriesStyles from "@/styles/categories.module.css";
import Link from "next/link";
const Categories = () => {
  return (
    <div className={categoriesStyles.container}>
      <div className={categoriesStyles.title}>
        <h1>FEATURED CATEGORIES</h1>{" "}
        <p>
          <Link href={"/categories/all"}>explore all {"->"} </Link>
        </p>
      </div>

      <div className={categoriesStyles.cards_container}>
        <div className={categoriesStyles.card_one}>
          <div>
            <h4>ALL THE</h4>
            <h3>RINGS</h3>
            <button>
              <Link href={"categories/rings"}>DISCOVER MORE </Link>
            </button>
          </div>
        </div>

        <div className={categoriesStyles.card_two}>
          <div>
            <h4>ALL THE</h4>
            <h3>TRAYS</h3>
            <button>
              <Link href={"categories/trays"}>DISCOVER MORE </Link>
            </button>
          </div>
        </div>

        <div className={categoriesStyles.card_three}>
          <div>
            <h4>ALL THE</h4>
            <h3>GIFT SETS</h3>
            <button>
              <Link href={"categories/gift_sets"}>DISCOVER MORE </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
