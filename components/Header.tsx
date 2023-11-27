import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-5 bg-blue-500 text-white">
      <h1 className="text-xl">Laser Cut Service</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/upload">Upload File</Link>
          </li>
          <li>
            <Link href="/create-job">Create Job</Link>
          </li>
          <li>
            <Link href="/orders">Orders</Link>
          </li>
          <li>
            <Link href="/payment">Payment</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;