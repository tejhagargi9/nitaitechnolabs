import "@/styles/cyber.css";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
const CyberSecurity = () => {
  return (
    <div className="cyberContainer">
      <div className="cyberBackdrop">
        <div className="cyberHead">
          <h2>Cyber Security</h2>
        </div>
      </div>
      <div className="cyberImage">
        <img src="/images/cybersecurity.jpg" alt="" />
      </div>
      <div className="cardContainer">
        {/* <div className="cyberCard">
          <p>
            A vulnerability is a weakness in the design, implementation,
            operation, or internal control of a computer or system. Most of the
            vulnerabilities that have been discovered are documented in the
            Common Vulnerability and Exposures (CVE) database. An exploitable
            vulnerability is one for which at least one working attack or
            exploit exists. Vulnerabilities can be researched,
            reverse-engineered, hunted, or exploited using automated tools or
            customized script.
          </p>
        </div> */}
        <Card width="80vw">
          <CardBody>
            <Text fontSize={{ base: "4vw", sm: "2.5vw", md: "2vw", lg: "1.5vw", xl: "1.2vw" }}>

            A vulnerability is a weakness in the design, implementation,
            operation, or internal control of a computer or system. Most of the
            vulnerabilities that have been discovered are documented in the
            Common Vulnerability and Exposures (CVE) database. An exploitable
            vulnerability is one for which at least one working attack or
            exploit exists. Vulnerabilities can be researched,
            reverse-engineered, hunted, or exploited using automated tools or
            customized script.
            </Text>
          </CardBody>
        </Card>
      </div>
      <div className="cyberManage">
        <Card width="80vw">
          <CardHeader>
            <Heading size="lg">
              To manage the information security culture, five steps should be
              taken: pre-evaluation, strategic planning, operative planning,
              implementation, and post-evaluation.
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Text pt="2" fontSize="lg">
                  Pre-evaluation: To identify the awareness of information
                  security within employees and to analyze the current security
                  policies.
                </Text>
              </Box>
              <Box>
                <Text pt="2" fontSize="lg">
                  Strategic planning: To come up with a better awareness
                  program, clear targets need to be set. Assembling a team of
                  skilled professionals is helpful to achieve it.
                </Text>
              </Box>
              <Box>
                <Text pt="2" fontSize="lg">
                  Operative planning: A good security culture can be established
                  based on internal communication, management buy-in, security
                  awareness and a training program.
                </Text>
              </Box>
              <Box>
                <Text pt="2" fontSize="lg">
                  Implementation: Four stages should be used to implement the
                  information security culture. They are:
                </Text>
              </Box>
              <UnorderedList p={0}>
                <ListItem>Commitment of the management</ListItem>
                <ListItem>Communication with organizational members</ListItem>
                <ListItem>Courses for all organizational members</ListItem>
                <ListItem>Commitment of the employees</ListItem>
              </UnorderedList>
              <Box>
                <Text pt="2" fontSize="lg">
                  Post-evaluation: To assess the success of the planning and
                  implementation, and to identify unresolved areas of concern.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
      <div className="cyberLearn">
        <Card width="80vw" mb="8vw">
          <CardHeader>
            <Heading size="lg">What you’ll learn here is..</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Text pt="2" fontSize="lg">
                  Summarize the main purpose of cyber security as a discipline
                </Text>
              </Box>
              <Box>
                <Text pt="2" fontSize="lg">
                  Summarize the basics of identification and authentication in
                  cyber security
                </Text>
              </Box>
              <Box>
                <Text pt="2" fontSize="lg">
                  Explain the pros and cons of security through obscurity
                </Text>
              </Box>
              <Box>
                <Text pt="2" fontSize="lg">
                  Develop a lifelong learning plan for potential careers in
                  cyber security
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default CyberSecurity;
