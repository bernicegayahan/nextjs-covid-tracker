export default function top(){
    return(
        <>
            <h1> Top 10 Countries with the Highest Number of COVID-19 Cases</h1>
        </>
    )
}
//getStaticProps gets called on evert called on evry request
export async function getStaticProps() {
    //desribe the procedure that you want to happen.
    //send a request to get tha data/info from our resources.

    //we have to identify the location where to send the request
    const response = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x- rapidapi-key": "6085b628a5msh12b4765569d1427p1188bbjsnd3c4dc348539"
        }
    })

}