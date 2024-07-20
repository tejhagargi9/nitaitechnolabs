"use client";
import "@/Styles/st.css";
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
const SoftwareTesting = () => {
  return (
    <div className="stContainer">
      <div className="stbackdrop">
        <div className="stHead">
          <h2>Software Testing</h2>
        </div>
      </div>
      <div className="stImage">
          <img src="/images/stlc.jpg" alt="" />
      </div>
      <div className="aboutst">
        <Card width="80vw">
          <CardBody>
            <Text fontSize={{ base: "4vw", sm: "2.5vw", md: "2vw", lg: "1.5vw", xl: "1.2vw" }}>
            This is the course that covers everything that you need to know about software Testing in the IT industry or everything any software tester should be aware of.
            </Text>
          </CardBody>
        </Card>
      </div>
      <div className="stOutcome">
        <div className="outcomeInter">
        <Code>
          <p className="stPara">In this course you will learn all the fundamentals that you need to know about Software Testing from basics to more advanced concepts, so by the end of the course you will have a thorough idea of what actual software testing is and how software testing is carried out in the Real life IT projects.</p>
        </Code>
        </div>
      </div>
      <div className="stLearn">
        <Card width="80vw" mb="8vw">
          <CardHeader>
            <Heading size="lg">What you’ll learn here is..</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Text pt="1" fontSize="lg">
                Crystal clear understanding on how Software Projects are handled in real time with Live examples.
                </Text>
              </Box>
              <Box>
                <Text pt="1" fontSize="lg">
                In Depth understanding of current Software Testing methodologies with Manual testing tools followed in the Industry.  
                </Text>
              </Box>
              <Box>
                <Text pt="1" fontSize="lg">
                Understand JIRA (Project management tool) and Tester activities in the Jira from Scratch.
                </Text>
              </Box>
              <Box>
                <Text pt="1" fontSize="lg">
                Thorough knowledge on latest Practices like Agile scrum, SDLC, Testdriven, Behaviour driven approaches.
                </Text>
              </Box>
              <Box>
                <Text pt="1" fontSize="lg">
                In Depth knowledge on writing test cases in Jira using Xray app on Live Project.
                </Text>
              </Box>
              <Box>
                <Text pt="1" fontSize="lg">
                Strong exposure on designing test cases and defect life cycle process.
                </Text>
              </Box>
              <Box>
                <Text pt="1" fontSize="lg">
                Complete knowledge on QA process starting from requirement gathering to Project delivery.
                </Text>
              </Box>
              <Box>
                <Text pt="1" fontSize="lg">
                Testing types and their real time usages in Projects at different stages.
                </Text>
              </Box>
              <Box>
                <Text pt="1" fontSize="lg">
                Top 50 Frequently asked Software testing Interview questions with Solutions.
                </Text>
              </Box>
              <Box>
                <Text pt="1" fontSize="lg">
                Basic knowledge of SQL.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default SoftwareTesting;
