import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2022 test Inc.</SFooter>;
};

const SFooter = styled.footer`
  background: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  width: 100%;
  bottom: 0;
`;
