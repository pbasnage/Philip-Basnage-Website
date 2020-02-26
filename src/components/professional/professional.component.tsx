import React from 'react';
import ReactDOM from 'react-dom';
import { ProfessionalProps } from '../../interfaces/professional.interface';
import '../../main.scss';
import './professional.component.scss';

export class Professional extends React.Component {
    constructor(props: ProfessionalProps) {
        super(props);
    }
    render(): JSX.Element {
        return (
            <div>
                <div className="main-header">Philip Basnage: Professional</div>
                <div className="summary">
                    <div className="summary-title">Professional Summary</div>
                    <div className="summary-body">Consumer-focused software engineer with a 
                    demonstrated history of working in the internet industry and over 3 
                    years of professional experience in the field. Skilled in modern web 
                    development, user experience, user interfaces, and responsive design. 
                    Strong, collaborative engineering professional with a Bachelor's 
                    degree in Computer Science from Lehigh University.
                </div>
                </div>
            </div>
        );
    }
}
