import React from "react";
import style from "./Acceuil.module.css";
import Carousel from "react-bootstrap/Carousel";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider
} from "@chakra-ui/react";

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

import MOnimage from "../../assets/graduating-time-covid-19-background (1).jpg";

const Acceuil = () => {
  
  return (
    <div className={style.mainAcceuil}>
      <div className={style.HomePage}>
        <Carousel
          style={{
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
                <p className={style.numberAdmission}>1</p>{" "}
                <p className={style.typeStepAdmmmission}>
                  Trouver <br />
                  votre programme
                </p>
              </section>
            </li>
            <li>
              <section>
                <p className={style.numberAdmission}>2</p>{" "}
                <p className={style.typeStepAdmmmission}>
                  Preparer <br />
                  votre dosier
                </p>
              </section>
            </li>
            <li>
              <section>
                <p className={style.numberAdmission}>3</p>{" "}
                <p className={style.typeStepAdmmmission}>
                  Deposez <br />
                  votre demande
                </p>
              </section>
            </li>
            <li>
              <section>
                <p className={style.numberAdmission}>4</p>{" "}
                <p className={style.typeStepAdmmmission}>
                  Faites le suivie <br /> de votre programme
                </p>
              </section>
            </li>
          </ul>
        </div>
      </div>

      <div className={style.gridCommunication}>
        <article className={style.behindCard}></article>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          style={{
            position: "relative",
            bottom: "15vh",
            height: "40vh",
            boxShadow: "0px 5px 5px rgba(128, 128, 128, 0.435)",
            width: "130vh",
          }}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
            style={{
              width: "80%",
            }}
          />

          <Stack
            style={{
              backgroundColor: "white",
              padding: "25px",
              width: "50%",
            }}
          >
            <CardBody>
              <Heading
                size="md"
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "38px",
                  fontWeight: "bolder",
                  position: "relative",
                  bottom: "2vh",
                }}
              >
                29 fevrier 2024
              </Heading>

              <Text
                py="2"
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "30px",
                  fontWeight: "bolder",
                }}
              >
                l’U.S <br />
                totalement rénover,
                <br />
                est prête à acceuillir ces nuvaux
                <p
                  style={{
                    fontSize: "20px",
                    position: "relative",
                    top: "3vh",
                  }}
                >
                  lorem ipsu.....
                </p>
                <h3
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "30px",
                    fontWeight: "bolder",
                    position: "relative",
                    top: "2.5vh",
                  }}
                >
                  Université SENGHOR
                </h3>
              </Text>
            </CardBody>

            <CardFooter></CardFooter>
          </Stack>
        </Card>
        <div className={style.secondeGridCommunication}>
          <section className={style.communication}>
            <Card
              maxW="sm"
              style={{
                width: "35vh",
                height: "62vh",
                border: "1px solid rgba(128, 128, 128, 0.387)",
                boxShadow: "9px 8px 9px rgba(128, 128, 128, 0.387)",
              }}
            >
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  style={{
                    height: "25vh",
                    width: "35vh",
                  }}
                />
                <Stack mt="6" spacing="3">
                  <Heading
                    size="md"
                    style={{
                      fontWeight: "lighter",
                      position: "relative",
                      left: "2.8vh",
                    }}
                  >
                    27 mars 2023
                  </Heading>
                  <Text
                    style={{
                      fontWeight: "bolder",
                      fontSize: "25px",
                      padding: "10px",
                      position: "relative",
                      left: "1vh",
                    }}
                  >
                    Pour des services à la clientèle <br /> plus près des <br />{" "}
                    gens, plus simples et davantage peronnalisés
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "7vh",

                  position: "relative",
                  bottom: "4vh",
                }}
              >
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "18px",

                    fontWeight: "lighter",
                    position: "relative",
                    left: "2vh",
                  }}
                >
                  lorem ipsu ......
                </Text>

                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "30px",
                    fontWeight: "bolder",
                    position: "relative",
                    left: "1vh",

                    bottom: "1.5vh",
                  }}
                >
                  Université SENGHOR
                </Text>
              </CardFooter>
            </Card>
            <Card
              maxW="sm"
              style={{
                width: "35vh",
                height: "62vh",
                border: "1px solid rgba(128, 128, 128, 0.387)",
                boxShadow: "9px 8px 9px rgba(128, 128, 128, 0.387)",
              }}
            >
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  style={{
                    height: "25vh",
                    width: "35vh",
                  }}
                />
                <Stack mt="6" spacing="3">
                  <Heading
                    size="md"
                    style={{
                      fontWeight: "lighter",
                      position: "relative",
                      left: "2.8vh",
                    }}
                  >
                    27 mars 2023
                  </Heading>
                  <Text
                    style={{
                      fontWeight: "bolder",
                      fontSize: "25px",
                      padding: "10px",
                      position: "relative",
                      left: "1vh",
                    }}
                  >
                    Pour des services à la clientèle <br /> plus près des <br />{" "}
                    gens, plus simples et davantage peronnalisés
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "7vh",

                  position: "relative",
                  bottom: "4vh",
                }}
              >
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "18px",

                    fontWeight: "lighter",
                    position: "relative",
                    left: "2vh",
                  }}
                >
                  lorem ipsu ......
                </Text>

                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "30px",
                    fontWeight: "bolder",
                    position: "relative",
                    left: "1vh",

                    bottom: "1.5vh",
                  }}
                >
                  Université SENGHOR
                </Text>
              </CardFooter>
            </Card>
            <Card
              maxW="sm"
              style={{
                width: "35vh",
                height: "62vh",
                border: "1px solid rgba(128, 128, 128, 0.387)",
                boxShadow: "9px 8px 9px rgba(128, 128, 128, 0.387)",
              }}
            >
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  style={{
                    height: "25vh",
                    width: "35vh",
                  }}
                />
                <Stack mt="6" spacing="3">
                  <Heading
                    size="md"
                    style={{
                      fontWeight: "lighter",
                      position: "relative",
                      left: "2.8vh",
                    }}
                  >
                    27 mars 2023
                  </Heading>
                  <Text
                    style={{
                      fontWeight: "bolder",
                      fontSize: "25px",
                      padding: "10px",
                      position: "relative",
                      left: "1vh",
                    }}
                  >
                    Pour des services à la clientèle <br /> plus près des <br />{" "}
                    gens, plus simples et davantage peronnalisés
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "7vh",

                  position: "relative",
                  bottom: "4vh",
                }}
              >
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "18px",

                    fontWeight: "lighter",
                    position: "relative",
                    left: "2vh",
                  }}
                >
                  lorem ipsu ......
                </Text>

                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "30px",
                    fontWeight: "bolder",
                    position: "relative",
                    left: "1vh",

                    bottom: "1.5vh",
                  }}
                >
                  Université SENGHOR
                </Text>
              </CardFooter>
            </Card>
          </section>
          <article className={style.btnGridCommunication}>
            <button>toutes les nouvelles</button>
          </article>
          <section className={style.threeGridCommunication}>
            <Card
              maxW="sm"
              style={{
                width: "35vh",
                height: "60vh",
                border: "1px solid rgba(128, 128, 128, 0.387)",
                boxShadow: "9px 8px 9px rgba(128, 128, 128, 0.387)",
              }}
            >
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  style={{
                    height: "25vh",
                    width: "35vh",
                  }}
                />
                <Stack
                  mt="6"
                  spacing="3"
                  style={{
                    fontWeight: "bolder",
                    fontSize: "25px",
                    padding: "10px",
                    position: "relative",
                    top: "5vh",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bolder",
                      fontSize: "25px",
                      padding: "10px",
                      position: "relative",
                      left: "1vh",
                    }}
                  >
                    RESPECT DE LA <br /> PERSONNE
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "7vh",

                  position: "relative",
                  bottom: "4vh",
                }}
              >
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "18px",

                    fontWeight: "lighter",
                    position: "relative",
                    left: "3.4vh",
                    top: "3.5vh",
                  }}
                >
                  lorem ipsu ......
                </Text>
              </CardFooter>
            </Card>
            <Card
              maxW="sm"
              style={{
                width: "35vh",
                height: "60vh",
                border: "1px solid rgba(128, 128, 128, 0.387)",
                boxShadow: "9px 8px 9px rgba(128, 128, 128, 0.387)",
              }}
            >
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  style={{
                    height: "25vh",
                    width: "35vh",
                  }}
                />
                <Stack
                  mt="6"
                  spacing="3"
                  style={{
                    fontWeight: "bolder",
                    fontSize: "25px",
                    padding: "10px",
                    position: "relative",
                    top: "5vh",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bolder",
                      fontSize: "25px",
                      padding: "10px",
                      position: "relative",
                      left: "1vh",
                    }}
                  >
                    RESPECT DE LA <br /> PERSONNE
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "7vh",

                  position: "relative",
                  bottom: "4vh",
                }}
              >
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "18px",

                    fontWeight: "lighter",
                    position: "relative",
                    left: "3.4vh",
                    top: "3.5vh",
                  }}
                >
                  lorem ipsu ......
                </Text>
              </CardFooter>
            </Card>
            <Card
              maxW="sm"
              style={{
                width: "35vh",
                height: "60vh",
                border: "1px solid rgba(128, 128, 128, 0.387)",
                boxShadow: "9px 8px 9px rgba(128, 128, 128, 0.387)",
              }}
            >
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  style={{
                    height: "25vh",
                    width: "35vh",
                  }}
                />
                <Stack
                  mt="6"
                  spacing="3"
                  style={{
                    fontWeight: "bolder",
                    fontSize: "25px",
                    padding: "10px",
                    position: "relative",
                    top: "5vh",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bolder",
                      fontSize: "25px",
                      padding: "10px",
                      position: "relative",
                      left: "1vh",
                    }}
                  >
                    RESPECT DE LA <br /> PERSONNE
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "7vh",

                  position: "relative",
                  bottom: "4vh",
                }}
              >
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "18px",

                    fontWeight: "lighter",
                    position: "relative",
                    left: "3.4vh",
                    top: "3.5vh",
                  }}
                >
                  lorem ipsu ......
                </Text>
              </CardFooter>
            </Card>
            <Card
              maxW="sm"
              style={{
                width: "35vh",
                height: "60vh",
                border: "1px solid rgba(128, 128, 128, 0.387)",
                boxShadow: "9px 8px 9px rgba(128, 128, 128, 0.387)",
              }}
            >
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  style={{
                    height: "25vh",
                    width: "35vh",
                  }}
                />
                <Stack
                  mt="6"
                  spacing="3"
                  style={{
                    fontWeight: "bolder",
                    fontSize: "25px",
                    padding: "10px",
                    position: "relative",
                    top: "5vh",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bolder",
                      fontSize: "25px",
                      padding: "10px",
                      position: "relative",
                      left: "1vh",
                    }}
                  >
                    RESPECT DE LA <br /> PERSONNE
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "7vh",

                  position: "relative",
                  bottom: "4vh",
                }}
              >
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "18px",

                    fontWeight: "lighter",
                    position: "relative",
                    left: "3.4vh",
                    top: "3.5vh",
                  }}
                >
                  lorem ipsu ......
                </Text>
              </CardFooter>
            </Card>
            <Card
              maxW="sm"
              style={{
                width: "35vh",
                height: "60vh",
                border: "1px solid rgba(128, 128, 128, 0.387)",
                boxShadow: "9px 8px 9px rgba(128, 128, 128, 0.387)",
              }}
            >
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  style={{
                    height: "25vh",
                    width: "35vh",
                  }}
                />
                <Stack
                  mt="6"
                  spacing="3"
                  style={{
                    fontWeight: "bolder",
                    fontSize: "25px",
                    padding: "10px",
                    position: "relative",
                    top: "5vh",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bolder",
                      fontSize: "25px",
                      padding: "10px",
                      position: "relative",
                      left: "1vh",
                    }}
                  >
                    RESPECT DE LA <br /> PERSONNE
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "7vh",

                  position: "relative",
                  bottom: "4vh",
                }}
              >
                <Text
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "18px",

                    fontWeight: "lighter",
                    position: "relative",
                    left: "3.4vh",
                    top: "3.5vh",
                  }}
                >
                  lorem ipsu ......
                </Text>
              </CardFooter>
            </Card>
          </section>
        </div>
      </div>
      <footer className={style.footer}>
        <MDBFooter
          bgColor="light"
          className="text-center text-lg-start text-muted"
        >
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              {/*    <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a> */}
            </div>
          </section>

          <section className="">
            <MDBContainer
              className="text-center text-md-start mt-5"
              style={{
                width: "200vh",
              }}
            >
              <MDBRow
                className="mt-3"
                style={{
                  width: "180vh",
                  position: "relative",
                  right: "15vh",
                }}
              >
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4" style={{
                    fontSize:"50px"
                  }}>
                    <MDBIcon color="secondary" icon="gem" className="me-3" style={{
                      
                    }} />
                    UNIVERSITE SENGHOR
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Laravel
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Help
                    </a>
                  </p>
                </MDBCol>

                <MDBCol
                  md="4"
                  lg="3"
                  xl="3"
                  className="mx-auto mb-md-0 mb-4"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <section className={style.iconQuestion}>
                    <article className={style.IconsList}>
                      <ul>
                        <li>
                          {" "}
                          <Linkedin color="black" strokeWidth={2} />
                        </li>
                        <li>
                          <Facebook color="black" />{" "}
                        </li>
                        <li>
                          {" "}
                          <Youtube color="black" />{" "}
                        </li>
                        <li>
                          {" "}
                          <Twitter color="black" />
                        </li>
                        <li>
                          <Instagram color="black" />{" "}
                        </li>
                      </ul>
                    </article>
                    <article className={style.btnQuestions}>
                      <button>Des questions?</button>
                    </article>
                  </section>
                  <section className={style.logoParts}>
                    <article className={style.logo}></article>
                  </section>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </MDBFooter>
      </footer>
    </div>
  );
};

export default Acceuil;
