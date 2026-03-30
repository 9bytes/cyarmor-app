import { useContext, useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// project imports
import Navigation from './Navigation';
import NavBar from './NavBar';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import useWindowSize from 'hooks/useWindowSize';
import { ConfigContext } from 'contexts/ConfigContext';
import * as actionType from 'store/actions';
import Loader from 'components/Loader/Loader';



// -----------------------|| ADMIN LAYOUT ||-----------------------//

export default function AdminLayout() {
  const windowSize = useWindowSize();
  const configContext = useContext(ConfigContext);
  const bodyElement = document.body;
  const { layout, collapseLayout } = configContext.state;
  const { dispatch } = configContext;
  useEffect(() => {
    if (windowSize.width > 992 && windowSize.width <= 1024 && layout !== 'horizontal') {
      dispatch({ type: actionType.COLLAPSE_MENU });
    }
  }, [dispatch, layout, windowSize]);

  if (windowSize.width > 992 && collapseLayout) {
    bodyElement.classList.add('minimenu');
  } else {
    bodyElement.classList.remove('minimenu');
  }

  let boxClass = ['pc-content'];

  let adminlayout = (
    <>
      <Navigation />
      <NavBar />
      <div className="pc-container">
        <div className={boxClass.join(' ')}>
          <>
            <Breadcrumb />
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </>
        </div>
   <div
  className="position-fixed bottom-0 end-0 mb-4 me-4 z-1"
  style={{
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: '#e74c3c',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(231, 76, 60, 0.5)'
  }}
  title="Chat with us"
>
  <i className="ph-duotone ph-robot" style={{ fontSize: '28px', color: '#fff' }} />
</div>
      </div>
      <Footer />
    </>
  );

  return <>{adminlayout}</>;
}
