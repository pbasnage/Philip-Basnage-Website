import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

export class MainInfo extends React.Component<{}> {
    constructor(props: any) {
        super(props);
        document.title = 'Philip Basnage';
    }
    render(): JSX.Element {
        return (
            <div>
                <div className="main-header">Philip Basnage</div>
                <div className="main-summary">
                    Welcome to my website! I&apos;m a multi-talented professional with a wide range of interests and
                    skills. This website is hand-coded by myself using ReactJS and Typescript. If you&apos;re interested
                    in my resume or hiring, please click &apos;Professional&apos;. Otherwise feel free to check out my
                    side projects, which I&apos;m equally passionate about.
                </div>
                <div className="column-wrapper">
                    <div className="column-option twitch">Content Creator</div>
                    <div className="column-option pro" onClick={this.goTo.bind(this, '/professional')}>Professional</div>
                    <div className="column-option music">Musician</div>
                </div>
            </div>
        );
    }

    goTo(url: string): void {
        window.location.assign(url);
    }
}

ReactDOM.render(<MainInfo />, document.getElementById('root'));
