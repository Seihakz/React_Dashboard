import React, { createContext, useState, useEffect } from 'react';

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState(() => {
    const storedCustomers = localStorage.getItem('customers');
    return storedCustomers ? JSON.parse(storedCustomers) : [
      { img:"https://i1.sndcdn.com/artworks-9XwEBXaBhnps3WJ0-azYcmQ-t1080x1080.jpg", name: "Jamal Jo", email: "jamaljo@gmail.com", totalInvoice: 0, totalPending: 0, totalPaid: 0 },
      { img:"https://i1.sndcdn.com/avatars-F35OU0eOpcjHaeiP-jEMs5w-t1080x1080.jpg", name: "Kam Batu", email: "kambatu@gmail.com", totalInvoice: 0, totalPending: 0, totalPaid: 0 },
      { img:"https://pbs.twimg.com/profile_images/1503311256710701059/VyTdwF2R_400x400.jpg", name: "Sigma Boy", email: "sigmaboy@gmail.com", totalInvoice: 0, totalPending: 0, totalPaid: 0 },
      { img:"https://i.pinimg.com/474x/2b/84/00/2b8400499ecea765849203ac69788aa6.jpg", name: "Ronal Mess", email: "ronalmess@gmail.com", totalInvoice: 0, totalPending: 0, totalPaid: 0 },
      { img:"https://i.pinimg.com/736x/18/ad/e3/18ade3f1b7b93e608449c192f0bc89b5.jpg", name: "Kanye Weed", email: "kanyeweed@gmail.com", totalInvoice: 0, totalPending: 0, totalPaid: 0 },
      { img:"https://i.pinimg.com/474x/7a/e3/15/7ae315c737bbc6e206b67f0e32d7a676.jpg", name: "Smoke Tgt", email: "smoketgt@gmail.com", totalInvoice: 0, totalPending: 0, totalPaid: 0 },
      { img:"https://i.pinimg.com/236x/54/7b/90/547b90d356a7efd7693fa5f6d17e9065.jpg", name: "Dora Rock", email: "dorarock@gmail.com", totalInvoice: 0, totalPending: 0, totalPaid: 0 },
      { img:"https://i.pinimg.com/474x/ab/ab/bd/ababbd8e720d70705f0b1eda829336fa.jpg", name: "Drake White", email: "drakewhite@gmail.com", totalInvoice: 0, totalPending: 0, totalPaid: 0 },
      { img:"https://i.pinimg.com/236x/fc/fa/cf/fcfacf920e24625ec0f331c170a20193.jpg", name: "Bat High", email: "bathigh@gmail.com", totalInvoice: 0, totalPending: 0, totalPaid: 0 },
      { img:"https://i.pinimg.com/236x/e4/00/92/e40092835602ee9e162846eb72a2ab27.jpg", name: "Amir Redeem", email: "amirredeem@gmail.com", totalInvoice: 0, totalPending: 0, totalPaid: 0 },
    ];
  });

  useEffect(() => {
    localStorage.setItem('customers', JSON.stringify(customers));
  }, [customers]);

  return (
    <CustomerContext.Provider value={{ customers, setCustomers }}>
      {children}
    </CustomerContext.Provider>
  );
};