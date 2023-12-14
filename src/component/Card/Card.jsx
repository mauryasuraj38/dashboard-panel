import "./Card.css"
import { motion, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from "react-apexcharts";

function Card(props) {

    const [expanded, setExpanded] = useState(false)

  return (
    <AnimateSharedLayout>
        {
            expanded? 
            <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>:
            <CompactCard param={props} setExpanded={()=>setExpanded(true)}/>
        }
    </AnimateSharedLayout>
  )
}

// CompactCard
function CompactCard({param, setExpanded}){
    return (
        <motion.div 
        className="CompactCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}
        onClick={setExpanded}
        layoutId='expandablCard'
        >
            <div className="radialbar">
                <CircularProgressbar value={param.barValue} text={`${param.barValue}%`} />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <i className={param.icon}></i>
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    )
}

// ExpandedCard
function ExpandedCard({param, setExpanded}){

    const data = {
        options: {
            chart: {
              type: "area",
              height: "auto",
            },
            dropShadow:{
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke:{
                curve: "smooth",
                colors: ["white"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                }
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
              categories: [
                  "2018-09-19T00:00:00.000Z",
                  "2018-09-19T01:30:00.000Z",
                  "2018-09-19T02:30:00.000Z",
                  "2018-09-19T03:30:00.000Z",
                  "2018-09-19T04:30:00.000Z",
                  "2018-09-19T05:30:00.000Z",
                  "2018-09-19T06:30:00.000Z",
              ]
            }
        }
    }

    return(
        <motion.div 
        className="ExpandedCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
        }}
        layoutId='expandablCard'
        >
            <div style={{alignSelf: 'flex-end'}}>
                <i class="uil uil-times" onClick={setExpanded}></i>
            </div>
            <span>{param.title}</span>
            <div className="chartContainer">
                <Chart
                options={data.options}
                series={param.series}
                type="area"
                />
            </div>
            <span>Last 24 Hours</span>

        </motion.div>
    )
}

export default Card
