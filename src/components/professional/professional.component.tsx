import React from 'react';
import { ProfessionalProps } from '../../interfaces/professional.interface';
import '../../main.scss';
import './professional.component.scss';
import LehighCrest from '../../images/lehighcrest.png';
import ProfilePic from '../../images/proftmp.png';

export class Professional extends React.Component<ProfessionalProps> {
    render(): JSX.Element {
        return (
            <div className="professional-wrapper"> 
                <div className="main-header">
                    Philip Basnage: Software Engineer
                    <div className="back-button" onClick={this.goToMain}>
                        &lt;&nbsp;
                        <div className="home">HOME</div>
                        </div>
                </div>
                <div className="main-info">
                    <img src={ProfilePic} alt="" className="profile"/>
                    <div className="contact-info">
                        <div className="title">Contact Information</div>
                        <div>Email: pbasnage@gmail.com</div>
                        <div>LinkedIn: https://www.linkedin.com/in/philipbasnage/</div>
                        <div>Github: https://github.com/pbasnage/Philip-Basnage-Website</div>
                        <div>San Francisco, California</div>
                    </div>
                </div>
                <div className="resume-row">
                    <div className="resume-button" onClick={this.goToResume}>
                        Click Here to View and Download My Latest Resume
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel">
                        <div className="panel-title">
                            Professional Summary
                        </div>
                        <div className="panel-body">
                            Consumer-focused software engineer with a 
                            demonstrated history of working in the internet industry and over 3 
                            years of professional experience in the field. Skilled in modern web 
                            development, user experience, user interfaces, and responsive design. 
                            Strong, collaborative engineering professional with a Bachelor's 
                            degree in Computer Science from Lehigh University.
                        </div>
                    </div>
                    <div className="panel">
                        <div className="panel-title">
                            Education
                        </div>
                        <div className="panel-body">
                            <div>
                                Graduated from Lehigh University in May 2017 with a Bachelor's
                                of Science degree in Computer Science from the PC Rossin College of
                                Engineering and Applied Science. Concentration in Japanese;
                                Awarded Dean's List multiple semesters.
                            </div>
                            <img src={LehighCrest} alt="" className="lehigh-crest"/>
                        </div>
                    </div>
                    <div className="panel work">
                        <div className="panel-title">
                            Work Experience
                        </div>
                        <div className="panel-body vert">
                            <div className="subtitle">Software Engineer at MyTime (Contract)</div>
                            <i>September – November 2019, San Francisco, California</i>
                            <div>
                                Remote contract position where I created functional webpages from design mockups and specs. 
                                Refactored AngularJS &amp; Embedded Ruby files to Angular7 + Typescript; Wrote tests
                                for existing APIs and classes.
                            </div>
                            <div className="subtitle">Software Engineer at TreeRing</div>
                            <i>June 2016 – September 2019, San Mateo, California</i>
                            <div>  
                                Created the foundation for the HTML5/Angular2+ overhaul of their existing Flash-based product.
                                Directly influenced creation of product-level software; spearheaded a responsive-first restructure for the entire application.
                                Worked closely with the CEO and CTO to revise a successful product to incorporate modern programming standards and techniques.
                                Advised senior engineering team on new technologies.
                                Collaborated with multi-disciplinary team in a full-stack environment.
                                Worked directly with every level of company including webpage design, UI, UX, and engineering.
                            </div>
                            <div className="subtitle">Research Intern at Taiho Pharmaceutical</div>
                            <i>June – August 2015, Tokushima, Japan</i>
                            <div>  
                                Selected for proficient Japanese language skills and academic excellence to study abroad in Tokushima, Japan through Lehigh University’s prestigious Iacocca Internship Program.
                                Shadowed researchers and invented new tablet formulations.
                                Created and delivered presentations on project progress to company leadership.
                            </div>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="panel-title">
                            Skills &amp; Technologies
                        </div>
                        <div className="panel-body vert">
                            <div>
                                <div className="subtitle">Expert:&nbsp;</div>
                                Typescript, Javascript, ES6, Angular2+, HTML5, CSS, SASS, Flexbox,
                                Bootstrap, Responsive Layout, Agile, Scrum, Trello, Git, Github
                            </div>
                            <div>
                                <div className="subtitle">Experience With:&nbsp;</div>
                                ReactJS, NodeJS, PHP, SQL, Bash, ExpressJS, MongoDB, Mongoose, jQuery,
                                AWS, Sentry, Splunk, REST, Docker, CI, Jenkins, Python, C, C++, Ruby,
                                Assembly
                            </div>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="panel-title">
                            Projects
                        </div>
                        <div className="panel-body vert">
                            <div className="subtitle clickable" onClick={this.openTrelloClone}>Trello Clone (link)</div>
                            <div>
                                Developed RESTful CRUD APIs to manage a Trello-like application
                                with boards, columns, and tasks. Designed an Angular8-based UI that
                                allows a user to communicate with these APIs using NodeJS and ExpressJS,
                                and these changes persist to the Mongoose/MongoDB database.
                            </div>
                            <div className="subtitle">UStocks</div>
                            <div>  
                                Created a web application that aggregates stock information and scrapes relevant
                                internet articles to give an average sentiment for any NYSE/NASDAQ listed stock.
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        );
    }

    goToResume(): void {
        window.open("https://drive.google.com/open?id=1mr1UXvWbdgBcsiQjjZGUpy5f248zUplm", "_blank");
    }

    openTrelloClone(): void {
        window.open("https://github.com/pbasnage/Trello-Clone");
    }

    goToMain(): void {
        window.location.assign("/");
    }
}
