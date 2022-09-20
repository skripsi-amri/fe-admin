import { useEffect, useState } from "react";
import { Button } from "../../atoms";
import styles from "./Stepper.module.css";

export default function Stepper(props: {
  main: any;
  step: string[];
  active: number;
  handleFinish: () => void;
  handleNext: () => void;
  handlePrev: () => void;
}) {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    setActiveStep(props.active);
  }, [activeStep, props]);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full relative z-10">
        <ul className={styles.progressbar}>
          {props.step.map((item, index) => {
            return (
              <li
                style={{ width: `${100 / props.step.length}%` }}
                key={index}
                className={index < activeStep ? `${styles.active}` : ``}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-10 w-full">{props.main}</div>
    </div>
  );
}
