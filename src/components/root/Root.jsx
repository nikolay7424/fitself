// React tools
import { Outlet } from "react-router";

// styles
import '../../assets/scss/components/root/_root.scss';

// Components
import Header from "./blocks/Header";
import Footer from "./blocks/Footer";

export default function Root() {

   return (
      <>
         <div className='container'>
            <Header />
            <div className='main'>
               <Outlet />
            </div>
            <Footer />
         </div>
      </>
   );
}