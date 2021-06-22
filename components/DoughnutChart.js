import { Doughnut } from 'react-chartjs-2';

export default function Chart() {
    return(
        <Doughnut 
            data={{
                labels: ['Criticals', 'Deaths', 'Recoveries']
            }}
            redraw={ false } 

         />
    )
}