import { Doughnut } from 'react-chartjs-2';

//describe the props that we want to pass down in this component
export default function Chart({criticals, deaths, recoveries}){
    return(
        <Doughnut 
            data={{
                datasets: [
                    {
                        data: [criticals, deaths, recoveries],
                        backgroundColor: ["red", "black", "green"]
                    }
                ],
                labels: ['Criticals', 'Deaths', 'Recoveries']
            }}
            redraw={ false } 

         />
    )
}