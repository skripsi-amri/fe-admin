import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart(props: {
  data: number[];
  labels: string[];
  colors: string[];
}) {
  return (
    <div className="w-full h-full">
      <Pie
        data={{
          labels: props.labels,
          datasets: [
            {
              data: props.data,
              backgroundColor: props.colors,
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
}
