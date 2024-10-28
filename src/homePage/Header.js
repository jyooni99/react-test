import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 30px 0px;
  margin-bottom: 50px;
  justify-content:space-evenly;
  align-items: center;
`

function Header() {
  return (
    <header>
      <nav>
        <Ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </Ul>
      </nav>
    </header>
  )
}

export default Header