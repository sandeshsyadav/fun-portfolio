import React, { Component } from 'react';

export class AboutSandesh extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Experience />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about sandesh" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="sandesh' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Progressional Experience</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="sandesh' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>

                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="sandesh' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="sandesh's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutSandesh;

export const displayAboutSandesh = () => {
    return <AboutSandesh />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Sandesh Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Sandesh Yadav</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Principal Software Engineering Manager!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a Seasoned Technical Leader with 17+ years of industry experience in managing, leading, designing, implementing, and delivery of enterprise-level and incubator solutions to support growing needs of technology industry. A visionary who translates business requirements into strategic technical solutions with focus on functionality, technicality, and scalability. Expert in HTML, CSS and CSS preprocessors, Typescript, GraphQL, React, and designing technical design documentation. Exceptional people management skills including integrating UX Design, technical architecture, and product teams to plan and execute technology strategies while staying abreast of engineering trends in the industry. Leading a $7.5M project to implement proprietary ﬁnancial solutions to help customers make better ﬁnancial decisions.
                    A strong believer of diversity & inclusion and has mentored many professionals to achieve their goals. Certified Scrum Master and a Product Owner with a Masters in Computer Science.
                </li>
            </ul>
        </>
    )
}

function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">front-end development, React.js & javascript!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="sandesh javascript" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="sandesh python" />
                        <img className='m-1' src="https://img.shields.io/badge/Java-ED8B00?logo=openjdk&logoColor=white" alt="sandesh java" />
                        <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="sandesh HTML" /></a>
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="sandesh git" className="m-1" />
                        <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff" alt="sandesh firebase" className="m-1" />
                        <img src="https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white" alt="sandesh nodejs" className='m-1' />
                        <img src="https://img.shields.io/badge/google%20analytics-green?logo=google%20analytics&logoColor=white" alt="sandesh google analytics" className='m-1' />
                        <img src="https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&logoColor=white" alt='sandesh css' className='m-1' />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff" alt="sandesh next" />
                        <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="sandesh react" />
                        <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?logo=amazon-aws&logoColor=white" alt="sandesh aws" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white" alt="sandesh flutter" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="sandesh tailwind css" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="sandesh node.js" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/angular-purple?logo=angular&logoColor=yellow" alt="sandesh angular" />
                        <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white" alt="sandesh jquery" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white" alt="sandesh redux" />
                        <img className='m-1' src="https://img.shields.io/badge/-ApolloGraphQL-311C87?logo=apollo-graphql" alt="sandesh graphql" />
                        <img className='m-1' src="https://img.shields.io/badge/azure-%230072C6.svg?logo=microsoftazure&logoColor=white" alt="sandesh azure" />
                        <img className='m-1' src="https://img.shields.io/badge/Material--UI-0081CB?logo=material-ui&logoColor=white" alt="sandesh material-ui" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="sandesh linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Experience() {
    const project_list = [
        {
            name: "Principal Software Engineering Manager - Level 20",
            date: "Apr 2021",
            link: "https://www.level20.com",
            description: ["Defined Most viable product (MVP) / Most viable experience (MVE) scope by collaborating with business through risk and cost tradeoff",
                "Developed a prioritized technical roadmap by collaborating with business leaders and technical teams to identify dependencies and phased implementation of product features",
                "Designed proof of concepts for beta releases using React, Typescript, GraphQL and AWS with CI/CD workflow to evaluate the complexity of the technical build and identify the building components and established an architectural framework for the product",
                "Evaluated several technical and operational vendors to assist in building a robust product by benchmarking against various data points like ease of integration, cost of operation and support based on the use case",
                "Studied and analyzed 4000+ transactional record to develop a pattern to feed into our proprietary prediction algorithm",
                "Led benchmarking initiatives to identify trends and opportunities, leading to the development of the new financial management product line",
                "Conducted over 30+ target user interviews and identified potential enhancement opportunities in the competitive market",
                "Architected predictions algorithm and maintained a code base for reusability and scalability",
                "Increased competitive edge of the proprietary product by automating customer financial management model",
                "Reduced defects by 30% by creating architecture designs and QA blueprints for the projects",
                "Maintained code standard and quality by establishing standards for linting, unit testing, pull request, code reviews, and end-end testing",
                "Developed technical and business use cases to evaluate and onboard vendors to expedite project execution to meet go-to-market timeline", "Increased operational efficiency by 17% by developing technical descriptions of operations and process workflows", "Conducted ideation workshops with subject matter experts to gather out of the box ideas to align on the target state of the financial product", "Implemented CI/CD processes for efficient development and testing of web technologies using React", "Established and maintained strong vendor relationships to drive transparency, high-quality service, and cost-effectiveness"],
            domains: ["javascript", "Angular",  "React", "GraphQL", "NodeJs", "Python", "HTML5", "CSS", "AWS", "GIT"]
        },
        {
            name: "Senior Software Engineering Manager - Progressive Insurance",
            date: "Apr 2021",
            link: "https://www.level20.com",
            description: ["Created and managed a design system to unify the design of UI across various Progressive platforms to create consistency in development and UX experience",
                "Responsible for creating analytics library with a team of 6 resources consisting of QA, developers, and data analytics to track user behavior and logging application data which helped in improving application performance and architecture",
                "Designed custom dashboards in Google Analytics and Splunk to centralize log management. Enabled efficiency in debugging issues by 20%",
                "Designed and implemented several proofs of concepts in Angular and Nodejs to identify potential enhancement opportunities and support advanced technology in Progressive's infrastructure",
                "Led initiative to implement Git branching strategy to deliver and maintain production code resulting in quick turnaround",
                "Integrated IBM tealeaf with Angular application to monitor and track user interaction on customer facing web pages",
                "Conducted multiple training sessions on Angular technology including key features, design concepts, best coding practices to maintain and enhance the Angular applications"],
            domains: ["Angular", "JavaScript", "JAVA", "Nodejs", "RESTAPI", "HTML5", "CSS", "AZURE"]
        }
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Professional Experience
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <>
                            <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                                <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                    <div className="flex flex-wrap justify-between items-center">
                                        <div className='flex justify-center items-center'>
                                            <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        </div>
                                        <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                    </div>
                                    <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                        {
                                            project.description.map((desc, index) => {
                                                return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                            })
                                        }
                                    </ul>
                                    <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                        {
                                            (project.domains ?
                                                project.domains.map((domain, index) => {
                                                    const borderColorClass = `border-${tag_colors[domain]}`
                                                    const textColorClass = `text-${tag_colors[domain]}`

                                                    return <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                                })

                                                : null)
                                        }
                                    </div>
                                </div>
                            </a>
                        </>
                    )
                })
            }
        </>
    )
}

function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        SUNY Binghamton
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2028 - 2009</div>
                    <div className=" text-sm md:text-base">Computer Science</div>
                </li>
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        University Of Mumbai
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2002 - 2006</div>
                    <div className=" text-sm md:text-base">Information Technnology</div>
                </li>
            </ul>
        </>
    )
}

function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/SandeshYadavResume.pdf" title="sandesh yadav resume" frameBorder="0"></iframe>
    )
}