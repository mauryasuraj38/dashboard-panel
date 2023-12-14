import "./Card.css"
import { AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Card(props) {

    const [expanded, setExpanded] = useState(false)

  return (
    <AnimateSharedLayout>
        {
            expanded? (
                'ExpandedCard'
            ):
            <CompactCard param={props} />
        }
    </AnimateSharedLayout>
  )
}

// CompactCard
function CompactCard({param}){
    return (
        <div className="CompactCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}
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
        </div>
    )
}

export default Card
