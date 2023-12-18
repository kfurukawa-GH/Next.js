import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { TableHeaderProps } from "@/app/_types/props";
import { TableBodyProps } from "@/app/_types/props";

type TableProps = {
  headers: TableHeaderProps[];
  bodies: TableBodyProps[];
};

const Table = ({ headers, bodies }: TableProps) => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <table className="table-auto w-full">
          <TableHeader headers={headers} />
          <TableBody bodies={bodies} />
        </table>
      </div>
    </>
  );
};

export default Table;
