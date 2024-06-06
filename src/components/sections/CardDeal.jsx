import { card } from "../../assets";
import styles, { layout } from "../../style";
import Buttons from "./Buttons";
const CardDeal = () => (
  <div className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Lorem, ipsum dolor sit <br className="sm:block hidden" /> consectetur
        adipisicing elit.
      </h2>
      <p className={`${styles.paragraph} text-dimWhite max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis
        suscipit corrupti cum saepe. Alias!
      </p>
      <Buttons styles="mt-5 rounded-[10px]" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </div>
);

export default CardDeal;
