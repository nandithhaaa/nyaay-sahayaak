import React from 'react';
import Button from './Button';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Search from './Search';

function App() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Button icon="fa-solid fa-scale-balanced fa-flip fa-xl" title="CIVIL LAWS" content="family law, Contract law, Property law" />
      <Button icon="fa-solid fa-scale-balanced fa-flip fa-xl" title="CRIMINAL LAWS" content="Penal code, Juvenile law, White-Collar Crime" />
      <Button icon="fa-solid fa-scale-balanced fa-flip fa-xl" title="Regulatory and Administrative Laws" content="Tax Law, Administrative Law, Environmental Law" />
      <Button icon="fa-solid fa-scale-balanced fa-flip fa-xl" title="Specialized and Emerging Laws" content="Space Law, AI and Technology Law, Cybersecurity and Data Privacy Law" />
      <Button icon="fa-solid fa-scale-balanced fa-flip fa-xl" title="International and Human Rights Law" content="Refugee Law, International Trade Law, Human Rights Law" />
      <Search />
    </div>
  );
}

export default App;
