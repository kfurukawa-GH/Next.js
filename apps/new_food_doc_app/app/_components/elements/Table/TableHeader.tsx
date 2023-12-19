import { TableHeaderProps } from "@/app/_types/props";

const TableHeader = (props: { headers: TableHeaderProps[] }) => {
  return (
    <thead className="bg-white border-b uppercase">
      <tr>
        {props.headers.map((header, index) => (
          <th
            key={index}
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            {header.value}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
