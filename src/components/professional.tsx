import React from 'react';
import ReactDOM from 'react-dom';
import { ProfessionalProps } from '../interfaces/professional.interface';

export class Professional extends React.Component {
    constructor(props: ProfessionalProps) {
        super(props);
    }
    render(): JSX.Element {
        return (
            <div>
                Professional Landing Page
            </div>
        );
    }
}
