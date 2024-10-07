import NavBar from './navbar.js'
import Footer from './footer.js'
import {useRouter} from 'next/router.js'

const Layout = ({ children }) => {
  const router = useRouter();
  
  // Define routes that should not include the NavBar and Footer
  const noLayoutPaths = ["/esupply", "/adapt", "/form"];
  
  // Check if the current path is one of the specific routes or starts with "/prescribe/details"
  if (!noLayoutPaths.includes(router.pathname) && !router.pathname.startsWith("/prescribe/details")) {
    return (
      <div className='background'>
        <NavBar />
        {children}
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        {children}
      </div>
    );
  }
};

export default Layout;
