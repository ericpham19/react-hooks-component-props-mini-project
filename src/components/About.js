
function aboutMe ({source ="https://via.placeholder.com/215" , about }) {
    return (
     <aside>
        <img src= {source} alt = "blog logo"></img>

        <p>{about}</p>
   
        </aside>
    )
   
}

export default aboutMe;