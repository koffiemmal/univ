import React, { useState } from "react";
import style from "./Acceuil.module.css";
import Carousel from "react-bootstrap/Carousel";
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Button } from '@chakra-ui/react'

import MOnimage from "../../assets/graduating-time-covid-19-background (1).jpg";

const Acceuil = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={style.mainAcceuil}>
      <div className={style.HomePage}>
        <Carousel
          style={{
            backgroundColor: "red",
            color: "#333",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Carousel.Item>
            <img
              style={{
                height: "81.7vh",
                width: "50vh",
              }}
              className="d-block w-100"
              src={MOnimage}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3
                style={{
                  color: "black",
                }}
              >
                First slide label
              </h3>
              <p
                style={{
                  color: "black",
                }}
              >
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                height: "81.7vh",
                width: "50vh",
              }}
              className="d-block w-100"
              src={MOnimage}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3
                style={{
                  color: "black",
                }}
              >
               second slide label
              </h3>
              <p
                style={{
                  color: "black",
                }}
              >
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                height: "81.7vh",
                width: "50vh",
              }}
              className="d-block w-100"
              src={MOnimage}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3
                style={{
                  color: "black",
                }}
              >
               three slide label
              </h3>
              <p
                style={{
                  color: "black",
                }}
              >
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={style.admission}>

        <div className={style.titleAdmission}>
          <h2>ADMISSION</h2>
          <p>La réalisation de vos projets d'études commence ici.</p>
        </div>
        <div className={style.stepAdmission}>
          <ul>
            <li>
             <section>
              <p className={style.numberAdmission}>1</p> <p className={style.typeStepAdmmmission}>Trouver  <br />votre programme</p>
             </section>
            </li>
            <li>
             <section>
              <p className={style.numberAdmission}>2</p> <p className={style.typeStepAdmmmission}>Preparer  <br />votre dosier</p>
             </section>
            </li>
            <li>
             <section>
              <p className={style.numberAdmission}>3</p> <p className={style.typeStepAdmmmission}>Deposez  <br />votre demande</p>
             </section>
            </li>
            <li>
             <section>
              <p className={style.numberAdmission}>4</p> <p className={style.typeStepAdmmmission}>Faites le suivie <br /> de votre programme</p>
             </section>
            </li>
          
          </ul>
        </div>

      </div>
      <div className={style.gridCommunication}>
      <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>
      </div>
    </div>
  );
};

export default Acceuil;
