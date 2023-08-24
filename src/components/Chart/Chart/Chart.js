import "./style/Chart.css";
import ChartBar from "../ChartBar/ChatBar";

export default function Chart(props) {
  const valueArray = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });

  const totalMaximun = Math.max(...valueArray);

  return (
    <>
      <div className="chart">
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.id}
            value={dataPoint.value}
            maxValue={totalMaximun}
            label={dataPoint.label}
          />
        ))}
      </div>
    </>
  );
}
