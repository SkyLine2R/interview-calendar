import styled from "styled-components";

import DatesSelectSection from "./datesSelectSection";
import InterviewSection from "./interviewSection";
import Button from "./button";

// const widthFrame = window.matchMedia("screen and (max-width: 740px)").matches ?

if (window.matchMedia("screen and (max-width: 740px)").matches) {
  console.log("Меньше 740");
} else {
  // ... действия, если устройство не соответствует значениям медиа-запроса
}

const getDate = (date) =>
  new Date(date).toLocaleString("en", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const today = new Date(Date.now());
const firstDay = new Date(Date.now());
firstDay.setHours(0, 0, 0);

console.log("asdfasdfasdf");
console.log(new Date(firstDay.setMonth(firstDay.getMonth() + 12)));

console.log(firstDay);

const watchWeek = function (firstDay) {
  const obj = { weekDays: [], days: [], interviewCalendar: [] };
  let dayNow = firstDay;
  for (let i = 1; i < 8; i++) {
    obj.weekDays.push(dayNow.toString()[0]);
    console.log(dayNow.toString()[0]);
    dayNow = new Date(firstDay.setMonth(firstDay.getMonth() + i));
    console.log(dayNow);
  }
};

watchWeek(firstDay);

const AppWrapper = styled.div`
  padding-bottom: 100px;
`;

const Fixed = styled.div`
  position: fixed;
  z-index: 500;
  width: 640px;
`;

const FixedTop = styled(Fixed)`
  top: 0px;
`;

const FixedBottom = styled(Fixed)`
  bottom: 0px;
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
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: #f6f6f6;
  width: 100%;
  height: 90px;
  border-top: 2px solid #f6f6f6;
  Button {
    margin: auto 50px;
  }
`;

const Main = styled.div`
  margin-top: 270px;
  width: 640px;
  overflow-x: auto;
`;

const Div = styled.div`
  display: inline-block;
`;

function App() {
  return (
    <AppWrapper>
      <FixedTop>
        <Header>
          <AppName>Interview Calendar</AppName>
          <Button fontSize={52}>+</Button>
        </Header>
        <DatesSelectSection />
      </FixedTop>
      <Main>
        <Div>
          <InterviewSection />
        </Div>
      </Main>
      <FixedBottom>
        <AppPanel>
          <Button>Today</Button>
          <Button hide={false}>Delete</Button>
        </AppPanel>
      </FixedBottom>
    </AppWrapper>
  );
}

export default App;
