import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities() {
    return (
        <>
            <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">Cidades +100</Heading>
            <Grid templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={['20px', '45px']} alignItems="center" justifyContent="center" px={["30px", "0"]}>
                <City
                    name='Londres'
                    country='Reino Unido'
                    flag='/flag_london.png'
                    image='/london.png'
                />
                <City
                    name='Paris'
                    country='França'
                    flag='/flag_france.png'
                    image='/paris.png'
                />
                <City
                    name='Roma'
                    country='Itália'
                    flag='/flag_italy.png'
                    image='/rome.png'
                />
                <City
                    name='Praga'
                    country='República Tcheca'
                    flag='/flag_czechia.png'
                    image='/praga.png'
                />
                <City
                    name='Amsterdã'
                    country='Holanda'
                    flag='/flag_netherlands.png'
                    image='/amsterdam.png'
                />
            </Grid>
        </>
    )
}