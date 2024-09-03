import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  title: string;
  count: number;
  percent: number;
};

const CardChart = ({ title, count, percent }: Props) => {
  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [percent, percent - 100],
        backgroundColor: ["#3c5968", "#f2f8ff"],
        hoverBackgroundColor: ["#3c596866", "#3c596806"],
      },
    ],
  };

  const options = {
    cutout: "80%",
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex flex-col gap-1 items-center justify-center bg-white shadow-lg m-2 py-2 px-6 w-1/5">
      <h2>{title}</h2>
      <div className="relative w-24 h-24">
        <Doughnut data={data} options={options} />
        <p className="absolute top-9 w-full text-center text-xl font-bold">
          {`${percent}%`}
        </p>
      </div>
      <h3>{count}</h3>
    </div>
  );
};

export default CardChart;