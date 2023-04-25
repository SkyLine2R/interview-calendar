import styled from "styled-components";

const InterviewSectionWrap = styled.table`
  border-collapse: collapse;
  width: 100%;

  td {
    width: calc(100% / 8);
    height: 66px;
    background-color: white;
    border: 2px solid #dcdcdc;
    @media (max-width: 720px) {
      height: 54px;
    }
    @media (max-width: 640px) {
      height: 44px;
    }
  }
  td:hover {
    transition: background-color 0.3s ease-in-out;
    background-color: rgb(214, 197, 255);
  }
`;
const SelectedCells = styled.div`
  width: calc(100% - 4px);
  height: calc(100% - 4px);
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
  const { interviewTimeArr } = props.interviewCalendar;

  return (
    <InterviewSectionWrap>
      <tbody>
        {interviewTimeArr.map((day, index1) => {
          return (
            <tr time={index1} key={index1}>
              <CellWithTime>
                {`${index1 < 10 ? `0${index1}` : `${index1}`}:00`}
              </CellWithTime>
              {day.map((select, index2) => {
                return (
                  <td wday={index2} key={index2}>
                    {!select || <SelectedCells wday={index2} />}
                  </td>
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
