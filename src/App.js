import styled from "styled-components";
import { useState } from "react";

import DatesSelectSection from "./datesSelectSection";
import InterviewSection from "./interviewSection";
import Button from "./button";
import arrowForward from "./button/arrowForward.svg";
import arrowBack from "./button/arrowBack.svg";
import WorkWithWeek from "./classWorkWithWeek";

const watchWeek = new WorkWithWeek();

const AppWrapper = styled.div`
  padding-bottom: 100px;
  @media (max-width: 720px) {
    padding-bottom: 80px;
  }
`;

const Fixed = styled.div`
  position: fixed;
  width: clamp(500px, 100vw, 740px);
  z-index: 500;
  @media (max-width: 720px) {
    width: 98%;
  }
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
  @media (max-width: 720px) {
    padding: 0px 24px;
    height: 110px;
  }
`;

const AppName = styled.h1`
  font-size: 38px;
  font-weight: 300;
  letter-spacing: -1.2px;
  @media (max-width: 720px) {
    font-size: 36px;
  }
`;

const AppPanel = styled.div`
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: #f6f6f6;
  width: 100%;
  height: 90px;
  border-top: 2px solid #f6f6f6;
  @media (max-width: 720px) {
    height: 70px;
  }
  Button {
    margin: auto 50px;
  }
`;

const Main = styled.div`
  margin-top: 285px;
  width: 100%;
  @media (max-width: 720px) {
    margin-top: 260px;
  }
`;

const MonthName = styled.div`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.6px;
`;

function App() {
  const [interviewCalendar, setInterviewCalendar] = useState(watchWeek);
  const [deleteEvent, setDeleteEvent] = useState([]);

  const monthAndYear = new Date(
    interviewCalendar.weekDays[3].date
  ).toLocaleString("en", {
    month: "long",
    year: "numeric",
  });

  function handleClickButton(command) {
    watchWeek[command]();
    setDeleteEvent([]);
    setInterviewCalendar(() => {
      return { ...watchWeek };
    });
  }

  function handleClickButtonDeleteEvent() {
    watchWeek.deleteEvent(...deleteEvent);
    setDeleteEvent([]);
    setInterviewCalendar(() => {
      return { ...watchWeek };
    });
  }

  function handleClickAddEvent(params) {
    watchWeek.addInterviewByClick(...params);
    setInterviewCalendar(() => {
      return { ...watchWeek };
    });
  }

  return (
    <AppWrapper>
      <FixedTop>
        <Header>
          <AppName>Interview Calendar</AppName>
          <Button
            onClick={() => handleClickButton("addInterview")}
            fontSize={52}
          >
            +
          </Button>
        </Header>
        <DatesSelectSection interviewCalendar={{ ...interviewCalendar }}>
          <Button onClick={() => handleClickButton("listBack")}>
            <img src={arrowBack} alt="arrow Back" />
          </Button>
          <MonthName>{monthAndYear}</MonthName>
          <Button onClick={() => handleClickButton("listForward")}>
            <img src={arrowForward} alt="arrow Forward" />
          </Button>
        </DatesSelectSection>
      </FixedTop>
      <Main
        onClick={(e) => {
          const tt = e.target;
          if (tt.tagName === "DIV") {
            setDeleteEvent([
              tt.parentNode.getAttribute("wday"),
              tt.parentNode.parentNode.getAttribute("time"),
            ]);
          } else {
            setDeleteEvent([]);
            const wdayAttrib = tt.getAttribute("wday");
            const timeAttrib = tt.parentNode.getAttribute("time");
            if (wdayAttrib && timeAttrib)
              handleClickAddEvent([wdayAttrib, timeAttrib]);
          }
        }}
      >
        <InterviewSection interviewCalendar={{ ...interviewCalendar }} />
      </Main>
      <FixedBottom>
        <AppPanel>
          <Button onClick={() => handleClickButton("goToday")}>Today</Button>
          <Button
            onClick={() => handleClickButtonDeleteEvent()}
            hide={!deleteEvent.length}
          >
            Delete
          </Button>
        </AppPanel>
      </FixedBottom>
    </AppWrapper>
  );
}

export default App;
