import React from "react";
import styled from "styled-components";
function Link({ title, children }) {
  return (
    <LinkContainer>
      <Icon>
        <svg width="0" height="0">
          <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#ff6a00" offset="0%" />
            <stop stopColor="#ee0979" offset="100%" />
          </linearGradient>
        </svg>
        {children}
      </Icon>
      <LinkText>{title}</LinkText>
    </LinkContainer>
  );
}

const LinkContainer = styled.div`
  display: flex;
  margin: 0.5rem 0;
  color: #a53b11;
  font-weight: 500;
`;
const Icon = styled.div`
  svg {
    height: 2rem;
    width: 2rem;
  }
  cursor: pointer;
`;
const LinkText = styled.div`
  padding-left: 1rem;
  padding-top: 0.2rem;
  cursor: pointer;
`;

export default Link;
