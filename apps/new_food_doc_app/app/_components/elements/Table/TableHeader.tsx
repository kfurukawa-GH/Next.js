import { TableHeaderProps } from "@/app/_types/props";

const TableHeader = (props: { headers: TableHeaderProps[] }) => {
  return (
    <thead className="bg-gray-700 text-gray-400 uppercase">
      <tr>
        {props.headers.map((header) => (
          <th key={header.value} scope="col" className="px-6 py-3">
            {header.value}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
