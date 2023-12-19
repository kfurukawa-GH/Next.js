import { TableBodyProps } from "@/app/_types/props";

const TableBody = (props: { bodies: TableBodyProps[] }) => {
  return (
    <tr className="odd:bg-gray-900 even:bg-gray-800">
      {props.bodies.map((body) => (
        <td key={body.value} scope="col" className="px-6 py-3">
          {body.value}
        </td>
      ))}
    </tr>
  );
};

export default TableBody;
