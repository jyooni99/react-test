import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #aaa;
  font-size: 12px;
  margin-top: 50px;
  padding: 30px 0;
  border-top: 1px solid #eee;
`

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
`

function Footer() {
  return (
    <FooterStyle>
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      <Ul>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/support">Support</a></li>
      </Ul>
    </FooterStyle>

  )
}

export default Footer