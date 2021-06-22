import { Doughnut } from 'react-chartjs-2'
//similar to pie chart 
import toNum from '../../helpers/toNum';

//start by creating a function that will describe the contents of the page.
export default function top({ convertedData }) {

    //lets see what the information looks like, so that we will be able to describe what data do we want to display or get.
    console.log(convertedData);

    const countryStatus = convertedData.countries_stat

    //our next task is to render each item inside array as an individual element. 
    const country = countryStatus.map(countryStat => {
        //we will now return an object that will contain both the name and cases of each country
        return {
            //inside this object describe the anatomy of the data
            name: countryStat.country_name,
            cases: toNum(countryStat.cases)
            //the diagram needs to create a visual representation of the information by representating the ratio of each cases\\

            //CREATE a logic that will convert strings to numerical data type/ 
        }
    })
    //lets sanitize the data in order to view the countries withe the least number of covid cases

    //sort() method ->sort the elements inside the array in place and returns the sorted  array
    //inside the sort method, let's descibe how the elements inside the array will be evaluated

    country.sort((firstEl, secondEl) => {
    //lets create a control structure that will compare the cases per country according to the sequence they were fetched from the provider
    //the comparison between 2 elements can lead to 3 possible scenarios
        //1.true (a < b)
        //2.false (a > b)
        //3. equal (a = b)
        if (firstEl.cases < secondEl.cases) {
            return -1
        } else if (firstEl.cases > secondEl.cases){
            return 1
        } else {
            return 0
        }
    })

    return (
        <>
            <h1> Top 10 Countries with the Lowest Number of COVID-19 Cases</h1>
            {/*we will feed the information to the diagram using the data attribute*/}
            {/* the value expects an object, that will describe the anatomy of the diagram*/}
            <Doughnut data={
                //take note that we have multiple objects that describe the variable
                //visualize the cases of the 1st 10 countries inside the array. (select a unique color for each country).
                //visualize: [{}, {}, {}]
                {
                    //lets display the name of each country
                    //1st individual task make the 1st 10 countries appear send a screenshot in HO
                    labels: [country[0].name, country[1].name, country[2].name, country[3].name, country[4].name, country[5].name, country[6].name, country[7].name, country[8].name, country[9].name],
                    datasets: [{
                        data: [country[0].cases, country[1].cases, country[2].cases, country[3].cases, country[4].cases, country[5].cases, country[6].cases, country[7].cases, country[8].cases, country[9].cases],
                        backgroundColor: ["#C0392B", "#E74C3C", "#9B59B6", "#8E44AD", "#2980B9", "#3498DB ", "#1ABC9C ", "#F1C40F", "#707B7C ", "#273746"]
                    }]
                }
            } />
        </>
    )
}

//before moving forward lets discuss data retrieval first.
//take note that during development, getStaticProps gets called on every called on every request.
export async function getStaticProps() {
    //describe the procedure that you want to happen.
    //send a request to get the data/info from our resources.

    //we have to identify the location where to send the request. 
    const response = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
        "method": "GET",
        "headers": {
            //identify who is the author/owner of the api from our cms
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            //identify the authorization key that will grant access to the information provided by the documentation
            "x-rapidapi-key": "6085b628a5msh12b4765569d1427p1188bbjsnd3c4dc348539"
        }
    })

    //we have to convert the response into a json() format
    const convertedData = await response.json()

    //define the return of the getStaticProps()
    return {
        props: {
            convertedData
        }
    }

}
