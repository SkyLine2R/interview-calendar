import styled from "styled-components";
import Button from "./button";
import arrowForward from "./button/arrowForward.svg";
import arrowBack from "./button/arrowBack.svg";

const DatesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  background-color: #f6f6f6;
  border-style: solid none;
  border-color: #dcdcdc;
  border-width: 1px;
  height: 144px;
  width: 100%;
`;
const TableDaysTitle = styled.table`
  width: 100%;
  padding-top: 13px;
  td {
    width: 12.5%;
  }
`;
const TbodyDaysTitle = styled.tbody`
  text-align: center;
  vertical-align: top;
`;
const WeekDays = styled.tr`
  font-size: 16px;
  justify-content: space-between;
  height: 30px;
`;
const MothDays = styled.tr`
  font-size: 28px;
  height: 50px;
`;
const SelectedDay = styled.div`
  position: relative;
  top: -8px;
  color: white;
  border: 8px solid red;
  background-color: red;
  border-radius: 100%;
  width: 65%;
  height: 80%;
  margin: 0 auto;
`;
const MonthSelect = styled.div`
  display: flex;
  align-items: center;
  width: 87.5%;
  padding: 0 30px;
  position: relative;
  bottom: 12px;
  justify-content: space-between;
`;

const MonthName = styled.div`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.6px;
`;

function DatesSelectSection({ interviewCalendar }) {
  const { today, weekDays } = { ...interviewCalendar };
  console.log(today);
  return (
    <DatesSection>
      <TableDaysTitle>
        <TbodyDaysTitle>
          <WeekDays>
            <td></td>
            {weekDays.map((date) => (
              <td>{date.day}</td>
            ))}
          </WeekDays>
          <MothDays>
            <td></td>
            {/* Проверить как высчитываются даты
    изменить сохранение date - в полном формате, чтобы можно было сравнить с текущим днём или, лучше в стартовой функции сделать пометку - today = true  чтобы уменьшить время проверок

{weekDays.map((date) => (
              <td>{date.get === }</td>
            ))} */}
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>
              <SelectedDay>29</SelectedDay>
            </td>
            <td>30</td>
            <td>31</td>
          </MothDays>
        </TbodyDaysTitle>
      </TableDaysTitle>
      <MonthSelect>
        <Button>
          <img src={arrowBack} alt="arrow Forward" />
        </Button>
        <MonthName>March 2019</MonthName>
        <Button>
          <img src={arrowForward} alt="arrow Forward" />
        </Button>
      </MonthSelect>
    </DatesSection>
  );
}

export default DatesSelectSection;
