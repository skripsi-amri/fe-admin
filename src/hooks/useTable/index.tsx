import { useState, useEffect } from "react";

const calculateRange = (data: any[], rowsPerPage: number) => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = (data: any[], page: number, rowsPerPage: number) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data: any[], page: number, rowsPerPage: number) => {
  const [tableRange, setTableRange] = useState([] as number[]);
  const [slice, setSlice] = useState([] as any[]);

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage);
    setTableRange([...range]);

    const slice = sliceData(data, page, rowsPerPage);
    setSlice([...slice]);
  }, [data, page, rowsPerPage]);

  return { slice, range: tableRange };
};

export default useTable;