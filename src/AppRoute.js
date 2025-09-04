import { useRoutes } from 'react-router-dom';
import adminRoutes from './adminRoutes'; 


function AppRoutes() {
  const element = useRoutes([...adminRoutes]);
  return element;
}

export default AppRoutes;
 