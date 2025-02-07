import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Customer from './pages/Customer';
import Invoice from './pages/Invoice';
import Sidebar from './components/sidebar';

function App() {
  return (
    <>
      <Router>
        <div className='flex flex-col md:flex-row min-h-screen'>
          <Sidebar/>
          <div className='flex-1 flex flex-col'>
            {/* {<Navbar/>} */}
            <main className='grow p-6 md:overflow-auto md:p-12'>
              <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/invoice' element={<Invoice/>} />
                <Route path='/customer' element={<Customer/>} />
              </Routes>
            </main>

          </div>
        </div>
      </Router>
    </>
  );
}
export default App;