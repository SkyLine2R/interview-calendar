import styled from "styled-components";
import { Fragment } from "react";

const InterviewTime = [
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
];

const daysInMonth = function (myDate) {
  return 33 - new Date(myDate.getFullYear(), myDate.getMonth(), 33).getDate();
};

const createMonthCalendar = function (calendarDate) {
  const daysInMoth = daysInMonth(calendarDate);
  let elements = [];
  for (let hours = 0; hours < 24; hours++) {
    /*     element[hours] = [hours.toString().length - 1 ? hours : `0${hours}`];
     */
    elements.push([0]);
    for (let day = 1; day <= daysInMoth; day++) {
      elements[hours].push(Math.round(Math.random())); // заменить на вставку данных БД
    }
  }
  return elements;
};

const nowMothCalendar = createMonthCalendar(new Date(Date.now()));
console.log(nowMothCalendar);

const InterviewSectionWrap = styled.table`
  border-collapse: collapse;
  overflow: scroll;

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

function InterviewSection() {
  return (
    <InterviewSectionWrap>
      <tbody>
        {nowMothCalendar.map((time, index) => {
          return (
            <Fragment key={index}>
              <tr>
                <CellWithTime>
                  {index > 9 ? `${index}` : `0${index}`}
                </CellWithTime>
                {time.map((val, index) => {
                  return val ? (
                    <td key={index}>
                      <SelectedCells />
                    </td>
                  ) : (
                    <td></td>
                  );
                })}
              </tr>
            </Fragment>
          );
        })}
      </tbody>
    </InterviewSectionWrap>
  );
}

/*      {InterviewTime.map((time) => {
        return (
          <tr>
            <CellWithTime>
              <span>{`${time}:00`}</span>
            </CellWithTime>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        );
      })}
      {
      <tr>
        <CellWithTime>
          <span>09:00</span>
        </CellWithTime>
        <td></td>
        <td></td>
        <td>
          <SelectedCells />
        </td>
        <td></td>
        <td></td>
        <td>
          <div></div>
        </td>
        <td></td>
      </tr>
      <tr>
        <CellWithTime>
          <span>10:00</span>
        </CellWithTime>
        <td>
          <SelectedCells />
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <CellWithTime>
          <span>11:00</span>
        </CellWithTime>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>{" "} */

export default InterviewSection;
