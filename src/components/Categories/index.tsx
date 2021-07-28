import { Grid, GridItem } from "@chakra-ui/layout";
import Category from "./Category";

export default function Categorys() {
    return (
        <Grid
            templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
            w="100%"
            justify="space-between"
            align="center"
            mt={["10", "32"]}
            mx="auto"
            maxW="1160px"
            flexWrap="wrap"
            gap={[1, 5]}
        >

            <GridItem>
                <Category icon="nightlife" text="vida noturna" />
            </GridItem>
            <GridItem>
                <Category icon="beach" text="praia" />
            </GridItem>
            <GridItem>
                <Category icon="modern" text="moderno" />
            </GridItem>
            <GridItem>
                <Category icon="classic" text="clássico" />
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
                <Category icon="more" text="e mais..." />
            </GridItem>
        </Grid>
    )
}