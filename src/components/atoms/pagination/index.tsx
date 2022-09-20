import { useEffect } from "react";
import { Button } from "../button";

const Pagination = (props: {
  range: any;
  setPage: any;
  page: number;
  slice: any;
}) => {
  useEffect(() => {
    if (props.slice.length < 1 && props.page !== 1) {
      props.setPage(props.page - 1);
    }
  }, [props]);
  return (
    <div className={'p-2 flex justify-center items-center rounded-b-md'}>
      {props.range.map((el: any, index: number) => (
        <Button
          child={el}
          key={index}
          backgroundColor={props.page === el ? "teal" : "transparent"}
          color={props.page === el ? "white" : "black"}
          other={"rounded-full"}
          onClick={() => props.setPage(el)}
        />
      ))}
    </div>
  );
};

export default Pagination;
