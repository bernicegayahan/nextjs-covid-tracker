import { Doughnut } from 'react-chartjs-2'
//similar to piechart
import toNum from '../../helpers/toNum'
import { Button, Container } from 'react-bootstrap'

//create a function that will describe the contents of the page
export default function top({ convertedData }) {

    //let's see what the information looks like, so that we will be able to describe what data do we want to display or get
    console.log(convertedData)

    const countryStatus = convertedData.countries_stat

    //our next task is to render each item inside an array as an individual element. 
    const country = countryStatus.map(countryStat => {
        //we will now return an object that will contian both the name and cases of each country
        return {
            //inside this object, decribe the anatomy of the data
            name: countryStat.country_name,
            cases: toNum(countryStat.cases)
            //the diagram needs to create a visual representation of the information by represenating the ratio of each cases
            //CREATE a logic that will convert strings to numerical data type
        }
    })


    //let's sanitize the data in order to view the countries with least number of covid cases

    //sort() method -> sort the elements inside the array in place and returns the sorted array
    //inside the sort method, let's describe how the elements inside the array will be evaluated
    country.sort((firstEl, secondEl) => {
        //let's create a control structure that will compare the cases per country according to the sequence they were fetched from the provider
        //the comparison between the 2 elements can lead to 3 possible scenarios
        //1. true (a<b)
        //2. false (a>b)
        //3. equal (a=b)
        if (firstEl.cases < secondEl.cases) {
            return -1
        } else if (firstEl.cases > secondEl.cases) {
            return 1
        } else {
            return 0
        }
    })


    return (
        <>
            <Container className="mt-3">
                <Button className="w-50 p-1" variant="danger" size="sm" href="/covid/top">Top 10 Countries with the Highest Number of Cases</Button>
                <Button className="w-50 p-1" variant="warning" size="sm" href="/covid/least">Top 10 Countries with the Lowest Number of Cases</Button>
            </Container>
            <h1 className="text-center">Top 10 Countries with the LOWEST Number of COVID-19 Cases</h1>
            {/*feed info to the diagram using the data={} attribute*/}
            {/*the value expect an object that will describe the anatomy of the diagram*/}
            <Doughnut data={
                //take note that we have multiple objects that describes the variable
                {
                    // let's display the name of each country
                    labels: [country[0].name, country[1].name, country[2].name, country[3].name, country[4].name, country[5].name, country[6].name, country[7].name, country[8].name, country[9].name],
                    datasets: [{
                        data: [country[0].cases, country[1].cases, country[2].cases, country[3].cases, country[4].cases, country[5].cases, country[6].cases, country[7].cases, country[8].cases, country[9].cases],
                        backgroundColor: ['#f768b8', '#fe8fc4', '#ffc0d3', '#ffe297', '#8fe9d7', '#44d0cc', '#00ccff', '#abafe8', '#7a6ea1', '#cc99cc']
                        //the diagram needs to create a visual representation of the information by representing the ration of each cases
                    }]
                }
            } />
        </>
    )
}

//before moving forward, let's discuss data retrieval first.
//take note that during development, getStaticProps gets called on every request.
export async function getStaticProps() {
    //describe the procedure that your want to happen
    //send a request to get the data/info from our resources

    //we have to identify the location
    const response = await fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php', {
        'method': 'GET',
        'headers': {
            //identifies who is the author of the api from our CMS
            'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
            //identify the authorization key that will grant us access to the information provided by the documentation
            'x-rapidapi-key': '6085b628a5msh12b4765569d1427p1188bbjsnd3c4dc348539'
        }
    })

    //we have to convert the response into a json() format
    const convertedData = await response.json()

    //define the return of getStaticProps()
    return {
        props: {
            convertedData
        }
    }
}