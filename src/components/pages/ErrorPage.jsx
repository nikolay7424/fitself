// React tools
import { useRouteError } from 'react-router';

// styles
import '../../assets/scss/components/pages/_error.scss';

export default function ErrorPage() {

   const error = useRouteError();

   return (
      <>
       <section className='main__error error'>
            <h2 className='error__title'>Oops, something happened...</h2>
            <p className='error__describe'>Sorry, an unexpected error has occured</p>
            <p className='error__status'>Status: {error.statusText || error.message}</p>
         </section>
      </>
   );
}