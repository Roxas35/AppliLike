import React from "react"

export const Profile = ({user}) => {

    const [selected, setSelected] =React.useState(0)

    return(
        <div>
            {user.photo.map((url, i) => {
                return <div><img hidden={selected !== i} src={irl} alt={`photo${i + 1}`} />
                <button onClick={() => setSelected(i)}></button>
                </div>
                })}
            <div className="description"></div> 
        </div>
    )
}