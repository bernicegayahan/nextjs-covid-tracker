import { useState } from 'react';
import { Form, Button, Alert }from 'react-bootstrap';
import Head from 'next/head';

//lets initialize a state hook to bind our form components with theit respective values
export default function Search() {

    const [targetCountry, setTargetCountry] = useState("")
    //declare another commponent that will display the country found

    const [name, setName] = useState("")
    return(
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
                    placeholder="Search for desired country"
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
        </>
    )
}