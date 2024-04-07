import React, { useState } from 'react';

// Define the addresses to display
const addresses = [
  {
    id: 1,
    address: '123 Main St, New York, NY 10001',
    latitude: 40.730610,
    longitude: -73.935242
  },
  {
    id: 2,
    address: '456 Oak Rd, Los Angeles, CA 90001',
    latitude: 34.052235,
    longitude: -118.243683
  }
];

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAddress, setSelectedAddress] = useState(null);

  // Filter the addresses based on the search term
  const filteredAddresses = addresses.filter(address =>
    address.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle the search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle the selection of an address
  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setSearchTerm('');
  };

  return (
    <div className="landing-page">
      <header className="header">
        <nav className="navbar">
          <div className="navbar-brand">
            <a href="/">
              <img src="/logo.png" alt="Next.js" />
            </a>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#">Home</a>
            </li>
            <li className="nav-item">
              <a href="#">About</a>
            </li>
            <li className="nav-item">
              <a href="#">Features</a>
            </li>
            <li className="nav-item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h1>Welcome to Next.js</h1>
          <p>The React Framework for Production</p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for an address..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {filteredAddresses.length > 0 && (
              <ul className="address-dropdown">
                {filteredAddresses.map(address => (
                  <li
                    key={address.id}
                    onClick={() => handleAddressSelect(address)}
                  >
                    {address.address}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {selectedAddress && (
          <section className="selected-address">
            <h2>Selected Address:</h2>
            <p>{selectedAddress.address}</p>
            <p>Latitude: {selectedAddress.latitude}</p>
            <p>Longitude: {selectedAddress.longitude}</p>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2023 Next.js. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;