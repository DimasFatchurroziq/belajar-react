import React from 'react'
import '../styles/Partners.css'

function Partners(props) {
  return (
    <div className="partner-list">
        {
            props.partnersList.map((item, index) => {
                return (
                    <div className="kartu-partner" key={index}>
                        <img src={item.image} alt="" />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Partners
