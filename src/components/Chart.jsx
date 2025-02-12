import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const options = {
  colors: ["#93C5FD", "#FDBA8C"],
  series: [
    {
      name: "Organic",
      color: "#93C5FD",
      data: [
        { x: "Jan", y: 231 },
        { x: "Feb", y: 122 },
        { x: "Mar", y: 63 },
        { x: "Apr", y: 421 },
        { x: "May", y: 122 },
        { x: "Jun", y: 323 },
        { x: "Jul", y: 111 },
        { x: "Aug", y: 231 },
        { x: "Sep", y: 122 },
        { x: "Oct", y: 63 },
        { x: "Nov", y: 421 },
        { x: "Dec", y: 122 },
      ],
    },
    
  ],
  chart: {
    type: "bar",
    height: "320px",
    fontFamily: "Inter, sans-serif",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
      borderRadiusApplication: "end",
      borderRadius: 8,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: "Inter, sans-serif",
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  stroke: {
    show: true,
    width: 0,
    colors: ["transparent"],
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -14
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    floating: false,
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
      }
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    labels: {
      formatter: function (value) {
        return `$${value / 100}k`;
      },
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
      }
    },
  },
  fill: {
    opacity: 1,
  },
};

function Chart() {
  const chartRef = useRef(null);
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (document.getElementById("column-chart") && typeof ApexCharts !== 'undefined') {
      chartRef.current = new ApexCharts(document.getElementById("column-chart"), options);
      chartRef.current.render();
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=1");
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setInvoiceItems(data.data); // Set the fetched data to state
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        console.log("API request completed");
      }
    };

    fetchAPI();
  }, []);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 1000);
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
      <div className='w-full'>
        <h2 className='mb-4 text-xl md:text-2xl font-serif'>Recent Revenue</h2>
        <div className="max-w-full bg-gray-50 rounded-xl shadow-sm p-3 md:p-6">
          <div className="flex justify-between pb-4 mb-4 border-b rounded-xl border-gray-50 bg-gray-50">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-blue-500 flex items-center justify-center me-3">
                <svg className="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
                  <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
                  <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z"/>
                </svg>
              </div>
              <div>
                <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-gray-600 pb-1">3.4k</h5>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-600">Leads generated per week</p>
              </div>
            </div>
            <div>
              <span className="bg-green-100 text-green-800 text-sm font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-500 dark:text-white">
                <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                </svg>
                42.5%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <dl className="flex items-center">
              <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">Money spent:</dt>
              <dd className="text-gray-900 text-sm dark:text-gray-400 font-semibold">$3,232</dd>
            </dl>
            <dl className="flex items-center justify-end">
              <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">Conversion rate:</dt>
              <dd className="text-gray-900 text-sm dark:text-gray-400 font-semibold">1.2%</dd>
            </dl>
          </div>

          <div id="column-chart" className='bg-white rounded-xl w-full'></div>
          <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-50 justify-between">
            <div className="flex justify-between items-center pt-5">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="lastDaysdropdown"
                data-dropdown-placement="bottom"
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 text-center inline-flex items-center"
                type="button">
                Last 12 months
                <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col'>
        <h2 className='mb-4 text-xl md:text-2xl font-serif'>Latest Invoices</h2>
        <div className="max-w-full bg-gray-50 rounded-xl shadow-sm p-3 md:p-6">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <FontAwesomeIcon icon={faSpinner} spin className="text-2xl text-gray-500" />
            </div>
          ) : (
            invoiceItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-5 border-b border-gray-200 md:border-gray-200 bg-white">
                <div className="flex items-center">
                  <img src={item.avatar} alt={item.first_name} className="w-10 h-10 rounded-full  ml-5 mr-5" />
                  <div>
                    <h5 className="text-sm md:text-lg font-medium text-gray-900">{item.first_name} {item.last_name}</h5>
                    <p className="text-xs md:text-sm text-gray-500">{item.email}</p>
                  </div>
                </div>
                <div className="text-sm md:text-lg mr-5 font-medium text-gray-900">${getRandomNumber()}</div>
              </div>
            ))
          )}
          
        </div>

      </div>
    </div>
  );
}

export default Chart;
