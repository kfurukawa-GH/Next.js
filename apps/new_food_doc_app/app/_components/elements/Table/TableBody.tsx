import { TableBodyProps } from "@/app/_types/props";
import Link from "next/link";

const TableBody = (props: { bodies: TableBodyProps[] }) => {
  return (
    <tr className="bg-gray-100 border-b">
      {props.bodies.map((body, index) => (
        <td
          key={index}
          scope="col"
          className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          <Link
            href={`/foodStandardDoc/display/${index}`}
            className="hover:text-blue-500"
          >
            {body.value}
          </Link>
        </td>
      ))}
    </tr>
  );
};

export default TableBody;
