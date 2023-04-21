import styled from "styled-components";
import { Fragment, useState } from "react";

const daysInMonth = function (myDate) {
  return 33 - new Date(myDate.getFullYear(), myDate.getMonth(), 33).getDate();
};

const createMonthCalendar = function (calendarDate) {
  const daysInMoth = daysInMonth(calendarDate);
  let elements = [];
  for (let hours = 0; hours < 24; hours++) {
    elements.push([0]);
    for (let day = 1; day <= daysInMoth; day++) {
      // рандомные данные для таблицы
      // заменить на подстановку данных БД (1-событие 0-ничего)
      elements[hours].push(Math.round(Math.random()));
    }
  }
  return elements;
};

const nowMothCalendar = createMonthCalendar(new Date(Date.now()));

const InterviewSectionWrap = styled.table`
  border-collapse: collapse;
  width: 100%;
  td {
    width: 67px; // 5rem
    height: 67px;
    background-color: white;
    border: 2px solid #dcdcdc;
  }
  td:hover {
    background-color: rgb(214, 197, 255);
  }
`;
const SelectedCells = styled.div`
  width: 96%;
  height: 96%;
  margin: auto;
  background-color: #ebecff;
`;

const CellWithTime = styled.td`
  border: none !important;
  font-size: 21px;
  text-align: right;
  padding-right: 8px;
  color: #bfbfbf;
  span {
    position: relative;
    top: 50%;
    z-index: 5;
  }
  ~ td:nth-child(2) {
    border-left: none;
  }
`;

function InterviewSection(props) {
  const { weekDays } = props.interviewCalendar;

  const [interviewCalendar, setInterviewCalendar] = useState([]);
  const [viewDates, setViewDates] = useState([]);

  return (
    <InterviewSectionWrap>
      <tbody>
        {weekDays.map((day, index) => {
          return (
            <tr id={index}>
              <CellWithTime>
                {`${index < 10 ? `0${index}` : `${index}`}:00`}
              </CellWithTime>
              {day.intervievTime?.map((val, index) => {
                return +val === index ? (
                  <td id={index}>
                    <SelectedCells />
                  </td>
                ) : (
                  <td></td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </InterviewSectionWrap>
  );
}

export default InterviewSection;
