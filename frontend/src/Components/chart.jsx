import Chart from 'react-apexcharts'
const Barchart=()=>{
 
    return(
        <>
       <Chart 
       type='bar'
       width='100%'
         height='100%'
         series={[{
              name:'Hours',
              data:[1,2,1,3,2,1,4],
         }]}
         options={
            {
                colors:['#1E2A5E'],
                xaxis:{
               
                    categories:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
                  
                },
                yaxis:{
                 labels:{
                     show:false
                 }
                },
                tooltip:{
                    x:{
                        format:'dd MMM yyyy'
                    }
                },
           dataLabels:{
                enabled:false
           }
            }
        }
       >

       </Chart>
        
        </>
    
    )
}
export default Barchart;