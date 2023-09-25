import styles from "./style";
import { Navbar, Hero, Why, About, Stats, Mission, Services, Footer, Contact } from "./components";

const App = () => (
  <div className=" w-full overflow-hidden">

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary flex justify-center items-center md:h-[80vh]  h-full`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter} backnner`}>
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
      </div>
    </div>

    <div className={`flex justify-center items-center`}>
    
        <Contact />
     
    </div>

    <div className={`bg-primary flex justify-center items-center rounded-tl-3xl rounded-tr-3xl`}>
  <div className={`${styles.boxWidth}`}>
    <Footer />
  </div>
</div>


  </div>
);

export default App;