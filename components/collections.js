import collectionsStyles from "@/styles/collections.module.css";
import Link from "next/link";
const Collections = () => {
  return (
    <div className={collectionsStyles.container}>
      <div className={collectionsStyles.names_container}>
        <h1>OUR COLLECTIONS</h1>
        <h2 className={collectionsStyles.cortina}>
        
          <Link href={"collections/cortina"}>CORTINA SUMMER</Link>{" "}
        </h2>
        <h2 className={collectionsStyles.oyster}>OYSTER NIRVANA</h2>
        <h2 className={collectionsStyles.domino}>DOMINO ANGELES</h2>
        <h2 className={collectionsStyles.ave}>AVE OMAK III</h2>
        <h2 className={collectionsStyles.ocean}>OCEAN GLAZE</h2>
        <div className={collectionsStyles.images_container}>
          <p>
            <b>EXPLORE COLLECTION</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collections;
