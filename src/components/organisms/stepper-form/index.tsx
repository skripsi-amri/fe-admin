import React from "react";
import { Button } from "../../atoms";
import { Stepper } from "../../molecules";

const StepperForm = (props: {
  step: string[];
  activeStep: number;
  setActiveStep: (step: number) => void;
  main: any;
  handleSubmit: any;
}) => {
  const handleNext = () => {
    props.setActiveStep(props.activeStep + 1);
  };

  const handlePrev = () => {
    props.setActiveStep(props.activeStep - 1);
  };

  return (
    <div>
      <Stepper
        main={
          <form
            onSubmit={(e: any) => {
              e.preventDefault();
              // seharusnya di sini akan di lakukan validasi tapi masih bingung
            }}
            className="w-full"
          >
            <div className="w-full">{props.main}</div>
            <div
              className={`mt-8 flex justify-between ${
                props.activeStep === props.step.length ? "" : "hidden"
              }`}
            >
              <Button
                backgroundColor="yellow"
                onClick={handlePrev}
                child="&laquo; Sebelumnya"
              />
              <Button
                onClick={props.handleSubmit}
                backgroundColor="teal"
                child="Simpan Data"
              />
            </div>
            <div
              className={`mt-8 flex justify-between ${
                props.activeStep !== 1 && props.activeStep !== props.step.length
                  ? ""
                  : "hidden"
              }`}
            >
              <Button
                backgroundColor="yellow"
                onClick={handlePrev}
                child="&laquo; Sebelumnya"
              />
              <Button
                backgroundColor="yellow"
                onClick={handleNext}
                child="Selanjutnya &raquo;"
                type="submit"
              />
            </div>
            <div
              className={`mt-8 flex justify-end ${
                props.activeStep === 1 ? "" : "hidden"
              }`}
            >
              <Button
                backgroundColor="yellow"
                onClick={handleNext}
                child="Selanjutnya &raquo;"
                type="submit"
              />
            </div>
          </form>
        }
        step={props.step}
        active={props.activeStep}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleFinish={props.handleSubmit}
      />
    </div>
  );
};

export default StepperForm;
