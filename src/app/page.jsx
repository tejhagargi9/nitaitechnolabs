import { Button } from "@chakra-ui/react";
import React from "react";
import "@/Styles/home.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className="home">
      <div className="mainSection">
        <h1 id="heading">NITAI TECHNOLOGICAL TRAINING INSTITUTE</h1>
        <p id="para">
          Whether you are a beginner exploring the world of software development
          or an experienced professional looking to specialize in a specific
          technology, NITAI TECHNOLOGICAL TRAINING INSTITUTE is the perfect
          destination for your software training needs. Join us on this journey
          to unlock your full potential and succeed in your professional
          aspirations.
        </p>
        <div className="homeBtnContainer">
          <Button colorScheme="orange">
            <Link href={"#coursesHeading"}>Get Started</Link>
          </Button>
          <Button colorScheme="grey" variant="outline">
            <Link href={"/contact-us"}>Contact Us</Link>
          </Button>
        </div>
        <div className="slideDownContainer">
          <Link href="#coursesHeading">
            <img id="slideDownIcon" src="/images/slideDown.png" alt="" />
          </Link>
        </div>
      </div>
      <h1 id="coursesHeading">Courses</h1>
      <div className="coursesSection" id="coursesSection">
        <div className="courses sd">
          <h1>Software Development</h1>
          <p>
            About the course This Full Stack Java Developer program will help
            you master both front-end and back-end Java technologies and
            accelerate your career as a Full Stack Software Developer. This
            course will expose you to basic and advanced concepts of web
            development. You will get hands-on experience with ReactJS, Spring…
          </p>
          <Link className="courseLinks" href={"/cources/software-development"}>
            Know more
          </Link>
        </div>
        <div className="courses st">
          <h1>Software Testing</h1>
          <p>
            About the course This Full Stack Java Developer program will help
            you master both front-end and back-end Java technologies and
            accelerate your career as a Full Stack Software Developer. This
            course will expose you to basic and advanced concepts of web
            development. You will get hands-on experience with ReactJS, Spring…
          </p>
          <Link className="courseLinks" href={"/cources/software-testing"}>
            Know more
          </Link>
        </div>
        <div className="courses cs">
          <h1>Cyber Security</h1>
          <p>
            About the course This Full Stack Java Developer program will help
            you master both front-end and back-end Java technologies and
            accelerate your career as a Full Stack Software Developer. This
            course will expose you to basic and advanced concepts of web
            development. You will get hands-on experience with ReactJS, Spring…
          </p>
          <Link className="courseLinks" href={"/cources/cyber-security"}>
            Know more
          </Link>
        </div>
      </div>

      <div className="aboutUsSection">
        <div>
          <h1>About Us</h1>
          <p>
            At NITAI TECHNOLOGICAL TRAINING INSTITUTE, we are dedicated to
            providing exceptional software training to individuals who are eager
            to enhance their skills and launch a successful career in the
            ever-evolving field of technology.
          </p>
          <Button colorScheme="orange" variant="solid">
            <Link href={"/about-us"}>Know more</Link>
          </Button>
        </div>
        <div>
          <img src="/images/aboutUs.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
