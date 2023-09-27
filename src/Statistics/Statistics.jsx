/* eslint-disable no-unused-vars */
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useLoaderData } from 'react-router-dom';
import { getStoredData } from '../Components/LocalStorage/LocalStorage';


const Statistics = () => {

  const StatisticDataMain = useLoaderData()

  const TotalDonation = StatisticDataMain.length;
  
  const StatisticDataDonation = getStoredData()

  const YourDonation = StatisticDataDonation.length;

  const TotalDonationLeft = TotalDonation - YourDonation;
  
  
  
  // const seriesData = [100, 100]
  const seriesData = [TotalDonationLeft, YourDonation]
  const labelsData = ['Total Donation Left', 'Your Donation']

  
  
  
  return (
    <div>
      <div className='lg:flex hidden justify-center'>

        <ReactApexChart

          options={{
            labels: labelsData,
            legend: {
              position: 'bottom'
            },
            colors: ['#FF444A', '#00C49F']

          }}
          series={seriesData}
          type="pie"
          width={600}
          height={600}
        />

      </div>
      <div className='hidden md:flex justify-center lg:hidden '>

        <ReactApexChart


          options={{
            labels: labelsData,
            legend: {
              position: 'bottom'
            },
            colors: ['#FF444A', '#00C49F'],
            responsive:[
              {
                breakpoint:undefined,
                options:{
                  colors: [ '#00C49F', '#FF444A'],
                }
              }
            ]
          }}
          series={seriesData}
          type="pie"
          width={500}
        />

      </div>

      <div className='flex justify-center sm:hidden mx-4 '>

        <ReactApexChart

          options={{
            labels: labelsData,
            legend: {
              position: 'bottom'
            },
            colors: ['#FF444A', '#00C49F']

          }}
          series={seriesData}
          type="pie"
          width={200}
          height={300}

        />

      </div>
    </div>


  );
};

export default Statistics;