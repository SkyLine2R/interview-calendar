import styled from "styled-components";
import { useState, useEffect } from "react";

import DatesSelectSection from "./datesSelectSection";
import InterviewSection from "./interviewSection";
import Button from "./button";
import arrowForward from "./button/arrowForward.svg";
import arrowBack from "./button/arrowBack.svg";
import WorkWithWeek from "./classWorkWithWeek";
// const widthFrame = window.matchMedia("screen and (max-width: 740px)").matches ?

if (window.matchMedia("screen and (max-width: 740px)").matches) {
  console.log("Меньше 740");
} else {
  // ... действия, если устройство не соответствует значениям медиа-запроса
}

const watchWeek = new WorkWithWeek();

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
  margin-top: 285px;
  width: 640px;
`;

const MonthName = styled.div`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.6px;
`;

function App() {
  const [interviewCalendar, setInterviewCalendar] = useState(watchWeek);
  const [deleteEvent, setDeleteEvent] = useState([]);

  // setInterviewCalendar(watchWeek);
  /*   useEffect(() => {
    setInterviewCalendar(watchWeek());
  }, []); */

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
  // Убрать "автоматическую переброску на текущий день при удалении и добавлении событий"
  // или перебрасывать, но этот день делать по центру
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
          if (e.target.tagName === "DIV") {
            setDeleteEvent([
              e.nativeEvent.path[1].getAttribute("wday"),
              e.nativeEvent.path[2].getAttribute("time"),
            ]);
          } else {
            setDeleteEvent([]);
            if (
              e.nativeEvent.path[0].getAttribute("wday") &&
              e.nativeEvent.path[1].getAttribute("time")
            )
              handleClickAddEvent([
                e.nativeEvent.path[0].getAttribute("wday"),
                e.nativeEvent.path[1].getAttribute("time"),
              ]);
          }
          /*           console.log(e.target.tagName);
          alert(e.target);
          console.log(e.target.key);
          console.log(e.nativeEvent.path[1]);  */
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
