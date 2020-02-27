import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import { MainProps, MainState } from './interfaces/main.interface';
import ProfilePic from './images/proftmp.png';

export class MainInfo extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);
        document.title = 'Philip Basnage';
        this.state = {
            twitchHovered: false,
            musicHovered: false,
        };
    }

    render(): JSX.Element {
        return (
            <div>
                <div className="main-header">Philip Basnage</div>
                <div className="main-summary">
                    <div className="pic-container">
                        <img src={ProfilePic} alt="" className="profile"/>
                    </div>
                    <div className="text">
                        &nbsp;&nbsp;&nbsp;&nbsp;Welcome to my website! I&apos;m a multi-talented professional with a wide range of interests and
                        skills. This responsive website is hand-coded by myself using ReactJS and Typescript. If you&apos;re interested
                        in my resume or hiring, please click &apos;Professional&apos;. Otherwise feel free to check out my
                        side projects, which I&apos;m equally passionate about.
                    </div>
                </div>
                <div className="column-wrapper">
                    <div className='column-option twitch'
                        onMouseEnter={() => this.setTwitchHovered(true)}
                        onMouseLeave={() => this.setTwitchHovered(false)}>
                            Content Creator
                            <div className={this.state.twitchHovered ? 'coming-soon show' : 'coming-soon'}>
                                Coming Soon!
                            </div>
                    </div>
                    <div className="column-option pro" onClick={this.goTo.bind(this, '/professional')}>
                        Professional
                    </div>
                    <div className="column-option music" 
                        onMouseEnter={() => this.setMusicHovered(true)}
                        onMouseLeave={() => this.setMusicHovered(false)}>
                            Musician
                            <div className={this.state.musicHovered ? 'coming-soon show' : 'coming-soon'}>
                                Coming Soon!
                            </div>
                    </div>
                </div>
            </div>
        );
    }

    setTwitchHovered(hovering: boolean): void {
        this.setState({
            twitchHovered: hovering,
        });
    }

    setMusicHovered(hovering: boolean): void {
        this.setState({
            musicHovered: hovering,
        });
    }

    goTo(url: string): void {
        window.location.assign(url);
    }
}

ReactDOM.render(<MainInfo />, document.getElementById('root'));
