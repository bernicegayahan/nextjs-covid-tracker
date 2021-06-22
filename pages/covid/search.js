import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Head from 'next/head';
import DoughnutChart from '../../components/DoughnutChart'

//lets initialize a state hook to bind our form components with their respective values. 

export default function Search({ newData }) {

    //create a checker to see the data 
    console.log(newData);


    const [targetCountry, setTargetCountry] = useState("")
    //declare another component that will display the country that was found
    const [name, setName] = useState("")
    return (
        <>
            <Head>
                <title>
                    COVID-19 Country Search
                </title>
            </Head>
            <Form>
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

            <h1> Country: {name}</h1>
            <Alert variant="info">Search for a country using the name</Alert>
            <DoughnutChart />
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
