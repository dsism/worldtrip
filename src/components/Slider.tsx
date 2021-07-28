import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Slider() {
    return (
        <Flex w="100%" h={["250px", "450px"]} maxW="1240px" mx="auto" mb={["5", "10"]}>
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                style={{ width: '100%', flex: '1' }}
            >
                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url('/europe.png')"
                        bgPosition="100% 30%"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                    >
                        <Link href={`/continent/europe`}>
                            <a>
                                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">Europa</Heading>
                                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>O continente mais antigo.</Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url('https://sites.google.com/site/turismoenelmundoofimatica/_/rsrc/1433717683978/turismo-en-asia/asia.jpg')"
                        bgPosition="100% 30%"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                    >
                        <Link href={`/continent/europe`}>
                            <a>
                                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">Ásia</Heading>
                                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>Lorem ipsum dolor sit</Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url('https://www.passagenspromo.com.br/blog/wp-content/uploads/2020/07/america-do-norte-capa-740x415.jpg')"
                        bgPosition="100% 30%"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                    >
                        <Link href={`/continent/europe`}>
                            <a>
                                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">América do Norte</Heading>
                                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>Lorem ipsum dolor sit</Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url('https://www.terra.com.br/turismo/infograficos/30-maravilhas-america-latina/img/foto-09-619x464.jpg')"
                        bgPosition="100% 30%"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                    >
                        <Link href={`/continent/europe`}>
                            <a>
                                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">América do Sul</Heading>
                                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>Lorem ipsum dolor sit</Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url('/europe.png')"
                        bgPosition="100% 30%"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                    >
                        <Link href={`/continent/europe`}>
                            <a>
                                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">Oceania</Heading>
                                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>Lorem ipsum dolor sit</Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url('https://traveljoybrasil.com/wp-content/uploads/2021/04/banner.png')"
                        bgPosition="100% 30%"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                    >
                        <Link href={`/continent/europe`}>
                            <a>
                                <Heading fontSize={["3xl", "5xl"]} color="gray.100" fontWeight="bold">Africa</Heading>
                                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "2xl"]} mt={["2", "4"]}>O continente mais quente.</Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>
            </Swiper >
        </Flex >
    )
}