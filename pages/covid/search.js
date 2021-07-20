import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Head from 'next/head';
import DoughnutChart from '../../components/DoughnutChart'
import toNum from '../../helpers/toNum';

//lets initialize a state hook to bind our form components with their respective values. 

export default function Search({ newData }) {

    //create a checker to see the data 
    console.log(newData);

    //lets get the status of the countries by acquiring the countries_stat array which holds the collection/record of each country
    const countryCollection = newData.countries_stat

    //lets create 3 components that will decribe the information  that we will acquire from the records
    const [deathCount, setDeathCount]= useState(0)
    const [criticalCount, setCriticalCount]= useState(0)
    const [recoveryCount, setRecoveryCount]= useState(0)    

        const [targetCountry, setTargetCountry] = useState("")
    //declare another component that will display the country that was found
    const [name, setName] = useState("")

    //lets create a function that will query to search for a specific country insude our record
    const search = (e) => {
        e.preventDefault()// to avoid page redirection
        const countryMatch = countryCollection.find(country => country.country_name.toLowerCase() === targetCountry.toLowerCase())
        //there are 2possible scenarios

        if (!countryMatch || countryMatch === null || countryMatch === 'undefined') {
            alert("Country Does Not Exist, use another name")
            setName("")
            setTargetCountry("")
        } else {
            console.log(countryMatch)//checker
            setName(countryMatch.country_name)
             //before we feed/inject the data inside our diagram the information must be converted into numerical data type first. 
            setDeathCount(toNum(countryMatch.deaths))
            setCriticalCount(toNum(countryMatch.serious_critical))
            setRecoveryCount(toNum(countryMatch.total_recovered))
        }
    }
    return (
        <>
            <Head>
                <title>
                    COVID-19 Country Search
                </title>
            </Head>
            <Form onSubmit={e => search(e)}>
                <Form.Group controlId="country">
                    <Form.Label>
                        Country
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Search for your desired country"
                        className="mt-3 mb-3"
                        value={targetCountry}
                        onChange={e => setTargetCountry(e.target.value)}
                    />
                </Form.Group>
                <Button className="mb-3" variant="success" type="submit">
                    Search for Country
                </Button>
            </Form>


            {name !== ""? 
                <>
                <h1> Country: {name}</h1>
                 <DoughnutChart criticals={criticalCount} deaths={deathCount} recoveries={recoveryCount} />
                 </>
            :
            
            
            <Alert variant="info">Search for a country using the name</Alert>
            }
            </>
    )
}

export async function getStaticProps() {
    //fetch the data from our api documentation.
    const fetchedResponse = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
        "method": "GET",
        "headers": {
            //identify who is the author/owner of the api from our cms
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            //identify the authorization key that will grant access to the information provided by the documentation
            "x-rapidapi-key": "6085b628a5msh12b4765569d1427p1188bbjsnd3c4dc348539"
        }
    })
    const newData = await fetchedResponse.json()
    return {
        props: {
            newData
        }
    }
}
