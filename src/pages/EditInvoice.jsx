import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { InvoiceContext } from '../context/InvoiceContext';

function EditInvoice() {
  const { state } = useLocation();
  const { invoice, index } = state || {};
  const { invoices, setInvoices } = useContext(InvoiceContext);
  const [formData, setFormData] = useState(invoice || {});
  const navigate = useNavigate();

  if (!invoice || index === undefined) {
    return <div>Error: Invoice data is not available</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedInvoices = [...invoices];
    updatedInvoices[index] = formData;
    setInvoices(updatedInvoices);
    navigate('/invoice');
  };

  return (
    <div>
      <h2>Edit Invoice</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Customer ID:
          <input
            type="text"
            name="customerId"
            value={formData.customerId || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={formData.amount || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Status:
          <select
            name="status"
            value={formData.status || ''}
            onChange={handleChange}
          >
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
          </select>
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditInvoice;
