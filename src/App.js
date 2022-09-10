import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/ui/navbar/NavBar";
import { AboutScreen, HomeScreen, UsersScreen, UserDetailScreen } from './screens';

function App() {
  return (
    <>
      <NavBar />

      <div className="container py-2">
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/about' element={<AboutScreen />} />

          <Route path='/users' element={<UsersScreen />} />
          <Route path='/users/:id' element={<UserDetailScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
