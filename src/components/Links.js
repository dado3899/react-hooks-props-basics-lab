function Links({name,link}){
    return(
        <>
            <h3>{name}</h3>
            <a href={link}>{link}</a>
        </>
    )
}
export default Links