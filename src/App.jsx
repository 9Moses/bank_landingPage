import styles from "./style";

import {
  Navbar,
  Hero,
  Status,
  Business,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Billing,
  Footer,
} from "./components/sections";

const App = () => (
  <>
    <div className=" bg-primary w-full sticky z-30 top-0 overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    </div>
    {/* Hero */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX}  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Status />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </>
);

export default App;
