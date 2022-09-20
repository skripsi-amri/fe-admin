import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function colorize(opacity: boolean) {
  return (ctx: any) => {
    const v = ctx.parsed.y;
    const c = v < 5 ? "#A1E8CB" : "#13C57C";

    return opacity ? c : "rgba(0,0,0,0)";
  };
}

(ChartJS.defaults.font.family = "Nunito Sans"), "sans-serif";

export default function VerticalBar(props: {
  data: number[];
  labels: string[];
}) {
  return (
    <div className="w-full h-full">
      <Bar
        data={{
          labels: props.labels,
          datasets: [
            {
              data: props.data,
              borderRadius: 5,
              borderSkipped: false,
              backgroundColor: colorize(true),
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
}
