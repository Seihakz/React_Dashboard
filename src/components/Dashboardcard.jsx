import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faInbox, faMoneyBill, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

function Dashboardcard() {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          <FontAwesomeIcon icon={faMoneyBill} className="text-gray-700 h-5 w-5" />
          <h3 className="ml-2 text-sm font-medium text-gray-700">Collected</h3>
        </div>
        <p className="bg-white rounded-xl text-center text-2xl px-4 py-8 truncate">$9,999,999.99</p>
      </div>

      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          <FontAwesomeIcon icon={faClock} className="text-gray-700 h-5 w-5" />
          <h3 className="ml-2 text-sm font-medium text-gray-700">Pending</h3>
        </div>
        <p className="bg-white rounded-xl text-center text-2xl px-4 py-8 truncate">$9,999,999.99</p>
      </div>

      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          <FontAwesomeIcon icon={faInbox} className="text-gray-700 h-5 w-5" />
          <h3 className="ml-2 text-sm font-medium text-gray-700">Total Invoices</h3>
        </div>
        <p className="bg-white rounded-xl text-center text-2xl px-4 py-8 truncate">1</p>
      </div>

      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          <FontAwesomeIcon icon={faPeopleGroup} className="text-gray-700 h-5 w-5" />
          <h3 className="ml-2 text-sm font-medium text-gray-700">Total Customers</h3>
        </div>
        <p className="bg-white rounded-xl text-center text-2xl px-4 py-8 truncate">1</p>
      </div>
      
    </div>
  )
}

export default Dashboardcard;



