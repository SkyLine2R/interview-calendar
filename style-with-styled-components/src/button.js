import styled from "styled-components";

const Mybutton = styled.button`
  font-size: ${(props) => props.fontSize}px;
  padding: 0;
  border: none;
  background: none;
  color: red;
  display: ${!((props) => props.hide || "none")};
  animation-duration: 1s;
  transition: all 0.3s ease-out;
  :hover {
    transform: scale(1.3);
    opacity: 0.9;
  }
`;

function Button({ children, fontSize = 28, hide = false }) {
  return (
    <Mybutton fontSize={fontSize} hide={hide}>
      {children}
    </Mybutton>
  );
}

export default Button;
