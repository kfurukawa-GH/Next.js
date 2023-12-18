import TableHeader from "./TableHeader";
import { TableHeaderProps } from "@/app/_types/props";

const Table = (props: { headers: TableHeaderProps[] }) => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <table className="table-auto w-full">
          <TableHeader headers={props.headers} />
          <tbody>
            <tr className="odd:bg-gray-900 even:bg-gray-800">
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
              <td>1961</td>
            </tr>
            <tr className="odd:bg-gray-900 even:bg-gray-800">
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr className="odd:bg-gray-900 even:bg-gray-800">
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
