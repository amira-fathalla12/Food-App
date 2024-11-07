import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UsersList } from './Moduals/Users/Components/UsersList/UsersList';
import { CategoriesList } from './Moduals/Categories/Components/Categorielist/Categorielist';
import { RecipesList } from './Moduals/Recipes/Components/Recipelist/Recipelist';
import { Login } from './Moduals/Authentication/Components/Login/Login';
import { ForgetPass } from './Moduals/Authentication/Components/ForgetPass/ForgetPass';
import { ResetPass } from './Moduals/Authentication/Components/RestePass/RestePass';
import { Registration } from './Moduals/Authentication/Components/Registration/Registration';
import { NotFound } from './Moduals/Shared/Components/NotFound/NotFound';
import AuthLayout from './Moduals/Shared/Components/AuthLayout/AuthLayout';
import { MasterLayout } from './Moduals/Shared/Components/MasterLayout/MasterLayout';
import Dashboard from './Moduals/dashboard/Components/Dashboard/Dashboard';
import { Recipedata } from './Moduals/Recipes/Components/Recipedata/Recipedata';
import { Categoriedata } from './Moduals/Categories/Components/Categoriedata/Categoriedata';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const routes = createBrowserRouter([
    {
      path: '',
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Registration /> },
        { path: 'forget-pass', element: <ForgetPass /> },
        { path: 'reset-pass', element: <ResetPass /> },
      ]
    },
    {
      path: 'dashboard',
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: 'recipes', element: <RecipesList /> },
        { path: 'recipe-data', element: <Recipedata /> },
        { path: 'Categories', element: <CategoriesList /> },
        { path: 'Category-data', element: <Categoriedata /> },
        { path: 'users', element: <UsersList /> },
      ]
    }
  ]);

  return (
    <>
        <ToastContainer />

      <RouterProvider router={routes} />
    </>
  );
}

export default App;
