import styles from "./style";
import { Navbar, Hero, Why, About, Stats, Mission, Services, Footer } from "./components";

const App = () => (
  <div className=" w-full overflow-hidden">
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Navbar />
      </div>
    </div>

    <div className={`bg-primary flex justify-center items-center h-[80vh]`}>
      <div className={`${styles.boxWidth}`}>
      <Hero />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Stats />
        <Mission />
        <Why />
        
      </div>   
    </div>
    <div className={`bg-primary flex justify-center items-center`}>
      <div className={`${styles.boxWidth}`}>
      <Services />
      <Footer/>
      </div>
     
    </div>
  </div>
);

export default App;