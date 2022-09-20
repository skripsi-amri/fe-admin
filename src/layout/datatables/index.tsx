import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Textfield, Typograhpy } from "../../components/atoms";
import { Table } from "../../components/molecules";

export default function DataTable(props: {
  column: any[];
  data: any[];
  rowsPerPage: number[];
  addData?: boolean;
}) {
  const router = useRouter();
  const rowsPerPage = props.rowsPerPage || [5, 10, 25, 50, 100];
  const [databody, setdataBody] = useState(props.data);
  const [limit, setLimit] = useState(rowsPerPage[0]);
  const [sorted, setSorted] = useState("");

  useEffect(() => {
    setdataBody(props.data);
  }, [props]);

  const handleSearch = (e: any) => {
    const i = props.column.length;
    const search = e.target.value;
    const newdata = props.data.filter((item: any) => {
      for (let j = 0; j < i; j++) {
        if (typeof item[props.column[j].dataIndex] === "string") {
          if (
            item[props.column[j].dataIndex]
              .toLowerCase()
              .includes(search.toLowerCase())
          ) {
            return true;
          }
        }
      }
    });
    setdataBody(newdata);
  };

  const handleSort = (dataIndex: string) => {
    if (sorted === dataIndex) {
      setdataBody(databody.reverse());
      setSorted("");
    } else {
      setdataBody(
        databody.sort((a, b) => {
          if (a[dataIndex] < b[dataIndex]) {
            return -1;
          }
          if (a[dataIndex] > b[dataIndex]) {
            return 1;
          }
          return 0;
        })
      );
      setSorted(dataIndex);
    }
  };

  return (
    <div className="rounded-md">
      <div
        className={`mb-5 flex justify-between px-1 flex-col md:flex-row items-center`}
      >
        <div className={`flex items-center`}>
          <Typograhpy other={"select-none"} child="Baris Per Halaman" />
          <select
            onChange={(e: any) => setLimit(e.target.value)}
            className="border-none ml-3 font-medium bg-white rounded"
            name="limit"
          >
            {props.rowsPerPage.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full md:w-auto">
          <div className="flex mt-1 md:mt-0">
            <Textfield
              other="mr-2 w-full md:w-auto"
              type="search"
              onInput={handleSearch}
              placeholder="Pencarian..."
            />
            {/* <IconButton other={"mr-2"} icon="fa:search" /> */}
          </div>
          <Button
            onClick={() => router.push(`${router.pathname}/form`)}
            other={props.addData === false ? "hidden" : ""}
            child={"Tambah Data"}
          />
        </div>
      </div>
      <Table
        handleSort={handleSort}
        rowPerPage={limit}
        column={props.column}
        data={databody}
      />
    </div>
  );
}
