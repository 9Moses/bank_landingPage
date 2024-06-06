import styles from "../../style";
import Buttons from "./Buttons";
const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY}   ${styles.padding} bg-black-gradient-2
    sm:flex-row flex-col rounded-[20px]`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let`s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quae
        quidem omnis.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-0`}>
      <Buttons />
    </div>
  </section>
);

export default CTA;
