import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faDollar, faClock, faCheck } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { InvoiceContext } from "../context/InvoiceContext";

function CreateInvoice() {
    const { invoices, setInvoices } = useContext(InvoiceContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        const customerData = {
            customerId: data.get("customerId"),
            email: `${data.get("customerId").toLowerCase().replace(" ", "")}@example.com`,
            amount: data.get("amount"),
            date: new Date().toLocaleDateString(),
            status: data.get("status"),
        };

        setInvoices([...invoices, customerData]);
        navigate("/invoice");

        e.target.reset();
    };

    return (
        <div className="grow p-6 md:overflow-y-auto md:p-12">
            <main>
                <nav className="mb-6 block">
                    <ol className="flex text-xl md:text-2xl font-serif">
                        <li className="text-gray-500 flex">
                            <NavLink to="/invoice">
                                <div className="">Invoices</div>
                            </NavLink>
                            <span className="mx-3 inline-block">/</span>
                        </li>
                        <li className="text-gray-900">
                            <NavLink to="/invoice/createinvoice">
                                <div className="">Create Invoice</div>
                            </NavLink>
                        </li>
                    </ol>
                </nav>
                <form action=" " onSubmit={handleSubmit}>
                    <div className="rounded-xl bg-gray-50 p-4 md:p-6">
                        <div className="mb-4">
                            <label htmlFor="customer" name="customerId" className="mb-2 block text-sm font-medium">
                                Choose Customer
                            </label>
                            <div className="relative">
                                <select
                                    id="customer"
                                    name="customerId"
                                    className="peer block w-full rounded-md border text-gray-600 border-gray-300 py-[9px] pl-10 text-sm placeholder:text-gray-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                >
                                    <option value="disable selected">Select a customer</option>
                                    <option value="1">John Doe</option>
                                    <option value="2">Jane Doe</option>
                                    <option value="3">Alice Smith</option>
                                    <option value="4">Bob Johnson</option>
                                    <option value="5">Charlie Brown</option>
                                    <option value="6">David Wilson</option>
                                    <option value="7">Eva Green</option>
                                    <option value="8">Frank White</option>
                                    <option value="9">Grace Black</option>
                                    <option value="10">Hannah Blue</option>
                                </select>
                                <FontAwesomeIcon icon={faUser} className="absolute top-3 left-4 text-gray-500" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="amount" name="amount" className="mb-2 block text-sm font-medium">
                                Choose an amount
                            </label>
                            <div className="relative">
                                <input
                                    placeholder="Enter USD amount"
                                    type="text"
                                    id="amount"
                                    name="amount"
                                    className="peer block w-full rounded-md border text-gray-600 border-gray-300 py-[9px] pl-10 text-sm placeholder:text-gray-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                />
                                <FontAwesomeIcon icon={faDollar} className="absolute top-3 left-4 text-gray-500" />
                            </div>
                        </div>
                        <fieldset>
                            <legend className="mb-2 block text-sm font-medium">Set the invoice status</legend>
                            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                                <div className="flex gap-4">
                                    <div className="flex items-center">
                                        <input type="radio" id="pending" value="pending" name="status" />
                                        <label
                                            htmlFor="pending"
                                            className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                        >
                                            Pending
                                            <FontAwesomeIcon icon={faClock} className="text-gray-500" />
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="radio" id="paid" value="paid" name="status" />
                                        <label
                                            htmlFor="paid"
                                            className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full text-white bg-green-500 px-3 py-1.5 text-xs font-medium"
                                        >
                                            Paid
                                            <FontAwesomeIcon icon={faCheck} />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="mt-6 flex justify-end gap-4">
                        <NavLink
                            to="/invoice"
                            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                        >
                            Cancel
                        </NavLink>
                        <button
                            type="submit"
                            className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default CreateInvoice;
