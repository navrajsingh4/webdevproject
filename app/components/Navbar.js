import React from 'react';
import Link from 'next/link';
import AboutUs from '../aboutus/page';
import '../css/NavBar.css'; // Adjust the path based on your file structure
import Home from '../Page/page';

function NavBar() {
    const navigateToNewPage = () => {
        window.location.href = '../Page/Aboutus'; // Replace '/new-page' with your desired URL
    };

  return (
    <nav className="navbar">
      <ul className="navList">
        <li className="navItem">
          <Link href="/Page"><button>
            Home</button>
          </Link>
        </li>
        <li className="navItem">
          <Link href="/aboutus"><button>
            About Us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
