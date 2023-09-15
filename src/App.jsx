import styles from "./style";
import {Navbar,Hero,Why,About,Stats,Mission,Services,Business} from "./components";

const App = () => (
  <div className=" w-full overflow-hidden">
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <About/>
        <Stats/>
        <Business/>
        <Mission/>
        <Why/>
        <Services/>
      </div>
    </div>
  </div>
);

export default App;