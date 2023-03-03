import { Switch, Table } from "antd";
import { useState } from "react";
const columns = [
  {
    title: "Image",
    width: 30,
    dataIndex: "name",
    key: "img   ",
    fixed: "left",
    render: () => (
      <img src="../../assets/person.webp" className="w-10 h-10 rounded-full" />
    ),
  },
  {
    title: "Full Name",
    width: 50,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Age",
    width: 20,
    dataIndex: "age",
    key: "age",
    fixed: "left",
  },
  {
    title: "mobile number",
    dataIndex: "number",
    key: "1",
    width: 50,
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "2",
    width: 65,
  },
  {
    title: "Job Title",
    dataIndex: "job",
    key: "2",
    width: 50,
  },
  {
    title: "Authorized Module",
    dataIndex: "module",
    key: "2",
    width: 50,
  },
  {
    title: "Joining Date",
    dataIndex: "date",
    key: "2",
    width: 50,
  },
];
const data = [];

for (let i = 0; i < 70; i++) {
  data.push({
    key: i,
    name: `Edward ${i}`,
    age: 32,
    number: `01007289105`,
    Email:"islamsoultan@gmail.com",
    job:"Product Manager",
    module:"Trustree (CRM)",
    date:"Mon .5 Nov 2020 10.00am"
  });
}
const Table1 = () => {
  const [fixedTop, setFixedTop] = useState(false);
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowSelection={true}
      pagination={{ pageSize: 7 }}
      className="w-full "
      summary={() => (
        <Table.Summary fixed={fixedTop ? "top" : "bottom"}>
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={1}>
              <Switch
                checkedChildren="Fixed Top"
                unCheckedChildren="Fixed Top"
                checked={fixedTop}
                onChange={() => {
                  setFixedTop(!fixedTop);
                }}
              />
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
      sticky
    />
  );
};
export default Table1;
