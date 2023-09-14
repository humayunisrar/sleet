import React from 'react'
import styles from './style';
import {Navbar,Hero,About,Stats,Mission,Services,Business} from './components';

const App = () => {
  return (
    <div className="bg-background w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
      <div className={`bg-background ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
    <Hero/>
        </div>
      </div>
      <div className={`bg-background ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <About/>
        <Stats/>
        <Mission/>
        <Business/>
        <Services/>


        </div>
    </div>
    </div>
  )
}

export default App