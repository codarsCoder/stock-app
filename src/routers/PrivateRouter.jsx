import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import Loader from '../components/Loader';



const PrivateRouter = () => {

  const { auth } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.auth);
  if(loading) { return <Loader /> }
 
  return auth ? <Outlet /> :  <Navigate to="/login" />;
}

export default PrivateRouter