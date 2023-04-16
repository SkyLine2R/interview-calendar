import styled from "styled-components";

import DatesSelectSection from "./datesSelectSection";
import InterviewSection from "./interviewSection";
import Button from "./button";

const AppWrapper = styled.div`
  background-color: #f6f6f6;
`;

const Fixed = styled.div`
  position: fixed;
  z-index: 500;
  width: 640px;
`;

const Header = styled.div`
  padding: 0px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 130px;
  background-color: white;
`;

const AppName = styled.h1`
  font-size: 38px;
  font-weight: 300;
  letter-spacing: -1.2px;
`;

const AppPanel = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  border-top: 2px solid #f6f6f6;
  Button {
    margin: auto 50px;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Fixed>
        <Header>
          <AppName>Interview Calendar</AppName>
          <Button fontSize={52}>+</Button>
        </Header>
        <DatesSelectSection />
      </Fixed>
      <main>
        <InterviewSection />
      </main>
      <AppPanel>
        <Button>Today</Button>
        <Button hide={false}>Delete</Button>
      </AppPanel>
    </AppWrapper>
  );
}

export default App;
