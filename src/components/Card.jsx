import React from 'react'

const Card = (props) => {
    return (

        <>
            <center>
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full rounded-full"  src={props.img} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.description}</div>
                        <div className="font-bold text-xl mb-2">{props.name}</div>
                        

                    </div>

                </div>
            </center>

        </>
    )
}

export default Card