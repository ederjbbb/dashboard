import { Box, Flex, SimpleGrid, Text, theme} from '@chakra-ui/react'
import { Header } from '../components/Header/index'
import  { SideBar }  from '../components/SideBar/index'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options={
    chart :{
        toolbar :{
            show : false
        }
    },
    zoom :{
        enable : false
    },
    foreColor : theme.colors.gray[5000],

    grid : {
        show : false
    },
    dataLabels : {
        enabled : false,
    },
    tooltip : {
        enabled : false
    },
    xaxis : {
        type : 'datetime',
        axisBorder : {
            color : theme.colors.gray[600]
        },
        xaxisTicks :{
            color : theme.colors.gray[600]
        },
        categories : [
            '2022-02-25T00:00:00.000Z',
            '2022-02-23T00:00:00.000Z',
            '2022-02-22T00:00:00.000Z',
            '2022-02-21T00:00:00.000Z'
        ]
    },
    fill:{
        opacity : 0.3,
        type: 'gradient',
        gradient :{
            shade : 'dark',
            opacityFrom : 0.7,
            opacityTo : 0.3
        },
    }
};

const series = [
    { name: 'series1', data:[31, 120, 10, 128]}
]

export default function Dashboard(){
    return(

        <Flex direction='column' h='100vh'>
            <Header/>

            <Flex w='100%' maxW={1480} my='6' px='6' mx='auto'>
                <SideBar/>

                <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start' mr='66' >
                
                    <Box p={['4', '8']} bg='gray.800' borderRadius={'8'}  >
                        <Text fontSize={'large'} mb='4'> Inscritos da semana</Text>
                        <Chart options={options} series={series} type='area' height={160}/>
                    </Box>


                    <Box p={['4', '8']} bg='gray.800' borderRadius={'8'} >
                        <Text fontSize={'large'} mb='4'>Taxa de abertura</Text>
                        <Chart options={options} series={series} type='area' height={160}/>
                    </Box>
                    


                </SimpleGrid>


            </Flex>
        </Flex>
    )
}