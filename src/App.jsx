import styles from "./style";
import { Navbar, Hero, Why, About, Stats, Mission, Services, Footer, Contact, ParticlesComp } from "./components";

const App = () => (
  <div className=" w-full overflow-hidden">

    <div className={` ${styles.paddingX} main-banner flex justify-center items-center md:h-screen h-full`}>
      <div className={`${styles.boxWidth}`}>
        <ParticlesComp/>
        <Navbar />
        <Hero />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter} backnner relative z-10`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Stats />
        <Mission />
        <Why />
      </div>
    </div>

    <div className={`bg-primary flex justify-center items-center relative z-10`}>
      <div className={`${styles.boxWidth}`}>
        <Services />
      </div>
    </div>

    <div className={`flex justify-center items-center relative z-10`}>

      <Contact />

    </div>

    <div className={`bg-primary flex justify-center items-center rounded-tl-3xl rounded-tr-3xl relative z-10`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>


  </div>
);

export default App;