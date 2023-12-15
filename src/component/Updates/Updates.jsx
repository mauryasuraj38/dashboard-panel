import './Updates.css'
import { UpdatesData } from '../../Data/Data.js'

function Updates() {
  return (
    <div className='Updates'>
      {
          UpdatesData.map((update)=>(
              <div className="update">
                  <img src={update.img} alt="" />
                  <div className="noti">
                      <div style={{marginBottom: "0.5rem"}}>
                          <span>{update.name}</span>&nbsp;
                          <span>{update.order}</span>
                      </div>
                      <span>{update.time}</span> 
                  </div>
              </div>
          ))
      }
    </div>
  )
}

export default Updates
