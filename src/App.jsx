import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Customer from './pages/Customer';
import Invoice from './pages/Invoice';
import Sidebar from './components/Sidebar';
import { InvoiceProvider } from './context/InvoiceContext';
import CreateInvoice from './pages/CreateInvoice';
import EditInvoice from './pages/EditInvoice'; // Ensure EditInvoice is imported
import { CustomerProvider } from './context/CustomerContext';

function App() {
  return (
    <CustomerProvider>
      <InvoiceProvider>
        <Router>
          <div className=''>
            <Sidebar/>
            <div className='flex-grow md:ml-64 md:mt-0'>
              {/* Main content */}
              <div className='flex-1 flex flex-col'>
                {/* {<Navbar/>} */}
                <main className='grow p-6 md:overflow-auto md:p-12'>
                  <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/invoice' element={<Invoice/>} />
                    <Route path="/invoice/createinvoice" element={<CreateInvoice />} />
                    <Route path="/invoice/editinvoice" element={<EditInvoice />} />
                    <Route path='/customer' element={<Customer/>} />
                  </Routes>
                </main>
              </div>
            </div>
          </div>
        </Router>
      </InvoiceProvider>
    </CustomerProvider>
  );
}
export default App;