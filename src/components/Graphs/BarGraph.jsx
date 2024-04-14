import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineGraph = (props) => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-1/3 flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold my-2 text-white">{props.title}</h1>
      </div>
      <div className="charts w-full h-2/3 px-4">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={props.chartData}>
            <XAxis dataKey={props.dataKey} stroke="white" />
            <YAxis stroke="white" />
            <Tooltip
              cursor={{ fill: "transparent" }}
              labelFormatter={(value) => {
                return `Level: ${value}`;
              }}
              formatter={(value) => ["Played: " + value + " Times"]}
            />
            <Bar dataKey={props.dataValueKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="bg-white w-10">
        <p>Level {payload[0].value}</p>
        <p>{label}</p>
      </div>
    );
  }
}

export default LineGraph;
