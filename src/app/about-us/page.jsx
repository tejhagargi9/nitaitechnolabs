import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import "@/Styles/aboutus.css";
const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
      <h1 id="aboutUsHeading">About Us</h1>
      <p class="aboutUsPara">
        At our training institute, we offer a diverse range of programs to cater
        to various needs and interests. We are one of the institutes providing
        assistance and training over different technologies and domains and to
        different level of expertise candidates. Here is an overview of the
        training programs we provide:
      </p>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="aboutListHead"
              >
                1. Full Stack Development:
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Our comprehensive full stack development training equips students
            with the skills required to develop both the front-end and back-end
            components of web applications. From HTML, CSS, and JavaScript to
            server-side programming languages and frameworks, our course covers
            the entire stack, ensuring students have a holistic understanding of
            web development.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="aboutListHead"
              >
                2. Final Year Academic Project Assistance Programs:
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            In addition to IT-focused training, we also offer programs for final
            year students. These programs cater to students looking for guidance
            over final year projects in the academic span. We provide complete
            assistance over the preparation and development of projects to
            documentation and explorations of relevant technologies.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="aboutListHead"
              >
                3. Corporate Training:
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            We understand the importance of continuous learning and development
            within organizations. Our corporate training programs are tailored
            to meet the specific needs of businesses, providing customized
            training solutions to enhance the skills and productivity of
            employees. We offer training in various areas, including software
            development, project management, and emerging technologies.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="aboutListHead"
              >
                4. Industrial Orientation Programme:
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Our industrial orientation program is designed to bridge the gap
            between academic knowledge and industry requirements. Through this
            program, students gain practical exposure to real-world projects,
            industry best practices, and the latest technologies. It helps them
            develop the necessary skills and mindset to thrive in a professional
            work environment.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="aboutListHead"
              >
                5. Pre-Placement Programs:
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            We understand the importance of preparing students for the job
            market. Our pre-placement programs focus on enhancing employability
            skills, interview preparation, resume building, and overall
            professional development. We aim to equip students with the
            necessary skills and confidence to secure their desired job
            opportunities.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="aboutListHead"
              >
                6. Non-IT Software Programs:
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            In addition to IT-focused training, we also offer programs in non-IT
            software domains. These programs cater to individuals interested in
            areas such as graphic design, UI/UX design, digital marketing, data
            analysis, and more. Our courses provide a solid foundation and
            practical skills in these non-IT software fields.
          </AccordionPanel>
        </AccordionItem>
        <div className="aboutUsParaDiv">
          <h2 class="aboutUsPara">
            At <span>NITAI TECHNOLOGICAL TRAINING INSTITUTE</span>, we are
            committed to providing high-quality training, industry-relevant
            curriculum, experienced instructors, and a supportive learning
            environment. We strive to empower individuals with the knowledge and
            skills needed to succeed in their chosen fields.
          </h2>
        </div>
      </Accordion>
    </div>
  );
};

export default AboutUs;
