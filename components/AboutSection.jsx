import Image from "next/image";

const skills = [
  { skill: "ReactJS" },
  { skill: "JavaScript" },
  { skill: "HTML5" },
  { skill: "CSS3" },
  { skill: "Redux" },
  { skill: "Tailwind CSS" },
  { skill: "Chakra UI" },
  { skill: "Jest" },
  { skill: "React Testing Library" },
  { skill: "Git" },
  { skill: "NextJS" },
  { skill: "GraphQL" },
  { skill: "NodeJS" },
  { skill: "SpringBoot" },
  { skill: "Java" },
  { skill: "MongoDB" },
  { skill: "Elasticsearch" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="flex flex-col my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi my name is Pratik Valvi and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer.
            </p>
            <br />
            <p>
              I graduated from Rajarambapu Institute of Technology, Islampur in
              2020 with a Bachelor's Degree in Electonics and Telecommunication
              Engineering and have been working in the field ever since.
            </p>
            <br />
            <p>
              I have a proven track record of delivering exceptional results.
              With a deep understanding of the latest technological advancements
              and a strong background in coding and software development, I have
              successfully contributed to the success of numerous projects
              throughout my career.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/skills.svg"
              alt=""
              width={312}
              height={312}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
