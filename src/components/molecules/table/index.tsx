import { useEffect, useState } from "react";
import { useTable } from "../../../hooks";
import { Pagination } from "../../atoms";

export default function Table(props: {
  column: any[];
  data: any[];
  rowPerPage: number;
  handleSort: (dataIndex: string) => void;
}) {
  const [data, setData] = useState(props.data);
  const column = props.column || [];
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, props.rowPerPage);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return (
    <div className="rounded-t-md border bg-white">
      <table
        className={`table-auto sm:table block overflow-x-scroll w-full border-b border-gray-300 ${
          column.length > 7 ? "block overflow-x-scroll" : ""
        }`}
      >
        <thead>
          <tr className="capitalize">
            <th className="p-3 border-b border-gray-300 text-blue-900 text-left">
              {"No."}
            </th>
            {column.map((col, i) => (
              <th
                onClick={() => props.handleSort(col.dataIndex)}
                key={i}
                className={`p-3 border-b border-gray-300 text-blue-900 text-left ${
                  col.title === "aksi" ? "text-center" : ""
                }`}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slice.length > 0 ? (
            slice.map((item, i) => (
              <tr key={i} className="hover:bg-blue-50 transition">
                <td className="p-2 border-b border-gray-300 text-blue-800">
                  {page > 1 ? i + 1 + Number(props.rowPerPage) : i + 1}
                </td>
                {column.map((col, i2) => (
                  <td
                    className="p-2 border-b border-gray-300 text-blue-800"
                    key={i2}
                  >
                    {col.dataIndex ? (
                      <p>{item[col.dataIndex]}</p>
                    ) : col.type === "custom" ? (
                      col.cell(item, i)
                    ) : null}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="p-1 text-blue-900 text-center">
              <td colSpan={props.column.length + 1}>Data tidak ditemukan</td>
            </tr>
          )}
        </tbody>
      </table>
      <div
        className={`${
          props.data.length < props.rowPerPage ? "hidden" : ""
        } rounded-b-md`}
      >
        <Pagination range={range} slice={slice} setPage={setPage} page={page} />
      </div>
    </div>
  );
}
