import {
  Line,
  LineChart,
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
          <LineChart
            data={props.chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey={props.dataKey}
              stroke="white"
              padding={{ left: 30, right: 30 }}
            />
            <YAxis stroke="white" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey={props.dataValueKey}
              stroke={props.color}
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineGraph;
