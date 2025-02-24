
import styled from "styled-components";

const Slidebar = () => {
  return (
    <Container>
      <Text>
        Get Unlimited Discounts 🚀! Brand New Offers Every Week!{" "}
        <span>🚀</span>
        <span>💨💥</span>
        <span>Old Money, Aesthetic! 💯</span>
      </Text>
    </Container>
  );
};

export default Slidebar;

/* Styled Components */
const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  overflow: hidden;
  white-space: nowrap;
  padding: 3px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const Text = styled.div`
  display: inline-block;
  color: #000;
  font-size: 13px;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;
  animation: scroll-right 12s linear infinite;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6);
  padding: 0 20px;

  &:hover {
    color: #ff6600;
    transform: scale(1.1);
    text-shadow: 0 0 20px rgba(255, 102, 0, 0.8), 0 0 40px rgba(255, 102, 0, 0.6);
  }

  @keyframes scroll-right {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
