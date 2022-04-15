
import Projects from '../Projects'
import About from '../About'


function Home({id}) {

  // const welcomeSay = clsx(styles.welcomeSay)
  return (
    <> 
      <Projects id={id} Light/>
      <About/>
    </>
  );
}

export default Home;
