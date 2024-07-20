"use client";
import "@/Styles/sd.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  MdSettings,
  Code,
  Stack,
  StackDivider,
  Box,
  MdCheckCircle,
  List,
  ListIcon,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
const SoftwareDevelopment = () => {
  return (
    <div className="sdContainer">
      <div className="backdrop">
        <div className="sdHead">
          <h2>Software Development</h2>
        </div>
      </div>
      <div className="sdImage">
        <div className="container">
          <h2>Full-Stack Development</h2>
          <img src="/images/sd.png" alt="" />
        </div>
      </div>
      <div className="aboutsd">
        <Card width="80vw">
          <CardBody>
            <Text fontSize={{ base: "4vw", sm: "2.5vw", md: "2vw", lg: "1.5vw", xl: "1.2vw" }}>
                <b>About the course</b> <br />
                This Full Stack Java Developer program will help you master both
                front-end and back-end Java technologies and accelerate your
                career as a Full Stack Software Developer. This course will
                expose you to basic and advanced concepts of web development.
                You will get hands-on experience with ReactJS, Spring Boot,
                Servlets, JSPs, web services, and other critical skills. You
                will learn how to use JavaScript, and Node.js to build dynamic
                and interactive websites; write APIs; build web applications
                using Java; test and deploy code using DevOps; store data using
                MongoDB; and much more. This course will help advance your
                career as a full stack developer and help you learn some of the
                most high-demand skills in the industry.
            </Text>
          </CardBody>
        </Card>
      </div>
      <div className="sdOutcome">
        <div className="outcomeInter">
          <Code>
            <p>
              {/* {" "} */}
              <b>Program Outcome : </b>
              <br />
              At the end of this program, you will be able to Learn the
              fundamentals of software development to create outstanding apps
              Clone, then begin modifying a live repository Build scalable
              back-end infrastructure, Test features with minimal effort and
              deploy them seamlessly to production. Become an Agile practitioner
              with the capacity to join a project in progress in your sector
              rapidly and Create fantastic front-end features. Choose your own
              stack based on the delivery schedule and requirements. From
              scratch, create a functioning industrial application.
            </p>
          </Code>
        </div>
      </div>
      <div className="sdLearn">
        <Card width="80vw" mb="8vw">
          <CardHeader>
            <Heading size="lg">What you’ll learn here is..</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Text pt="2" fontSize="lg">
                  Go from Zero skills to building Powerful Web Applications on a
                  highly professional level using the latest Web Technologies.
                </Text>
              </Box>
              <Box>
                <Text pt="2" fontSize="lg">
                  Create real life mobile apps and upload them to the IOS App
                  Store and Google Play.
                </Text>
              </Box>
              <Box>
                <Text pt="2" fontSize="lg">
                  Use HTML5, CSS3, Flexbox, Grid & SASS to build website content
                  and add stunning styling and decoration.
                </Text>
              </Box>
              <Box>
                <Text pt="2" fontSize="lg">
                  Use Javascript, jQuery & jQuery User Interface to create
                  Interactive Websites and Games.
                </Text>
              </Box>
              <Box>
                <Text pt="2" fontSize="lg">
                  Use Back End Technologies like NodeJS, PHP, AJAX, JSON to
                  build dynamic database-driven websites.
                </Text>
              </Box>
              <Box>
                <Text pt="2" fontSize="lg">
                  Use advanced skills to connect your websites to APIs like
                  Google Maps, Facebook, Google plus and Twitter.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
