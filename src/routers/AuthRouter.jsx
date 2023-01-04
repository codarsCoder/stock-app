import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Loader from '../components/Loader';

const AuthRouter = () => {

    const { auth } = useSelector((state) => state.auth);
console.log(auth)
const { loading } = useSelector((state) => state.auth);
if(loading) { return <Loader /> }
    return  auth ? <Navigate to="/" /> : <Outlet />;

}

export default AuthRouter