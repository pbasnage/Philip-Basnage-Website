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
                    <div className="back-button" onClick={this.goToMain}>&lt;&nbsp;HOME</div>
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
                    <div className="panel-edu">
                        <div className="flex-column">
                            <div className="panel-title">
                                Education
                            </div>
                            <div className="panel-body">
                                Graduated from Lehigh University in May 2017 with a Bachelor's
                                of Science degree in Computer Science from PC Rossin College of
                                Engineering and Applied Science. Awarded Dean's List multiple semesters.
                            </div>
                        </div>
                        <img src={LehighCrest} alt="" className="lehigh-crest"/>
                    </div>
                </div>
            </div>
        );
    }

    goToResume(): void {
        window.open("https://drive.google.com/open?id=1mr1UXvWbdgBcsiQjjZGUpy5f248zUplm", "_blank");
    }

    goToMain(): void {
        window.location.assign("/");
    }
}
