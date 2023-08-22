import { useState } from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
    const studentData = [
        {
            id: 1,
            program: "PTB-LN",
            student: 250,
        },
        {
            id: 2,
            program: "PTB-DN",
            student: 150,
        },
        {
            id: 3,
            program: "PBJJ",
            student: 850,
        }
    ];

    const [chartData, setChartData] = useState({
        labels: studentData.map((data) => data.program),
        datasets: [
            {
                label: "Total Awardee",
                data: studentData.map((data) => data.student),
                backgroundColor: [
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            },
        ]
    })


    return (
        <>
            <div className="chart-container">
                <Pie
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: `Total Awardee PLN Scholarship s.d ${new Date().toLocaleString('default', {
                                    month: 'long'
                                })} ${new Date().getFullYear()}`
                            },
                            legend: {
                                display: true,
                                position: "bottom"
                            }
                        }
                    }}
                />
            </div>
        </>
    )
}

export default PieChart;