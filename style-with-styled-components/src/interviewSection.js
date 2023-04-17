import styled from "styled-components";

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
  let element = [];
  for (let hours = 0; hours < 24; hours++) {
    element[hours] = [hours.toString().length - 1 ? hours : `0${hours}`];
    for (let day = 1; day <= daysInMoth; day++) {
      element[hours].push(Math.round(Math.random())); // заменить на вставку данных БД
    }
  }
};

const nowMothCalendar = createMonthCalendar(new Date(Date.now()));

const InterviewSectionWrap = styled.table`
  border-collapse: collapse;
  td {
    width: 5rem;
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
      {InterviewTime.map((time) => {
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
      {/*
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
      </tr>{" "}
      */}
    </InterviewSectionWrap>
  );
}

export default InterviewSection;
