import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './index.scss';
import { MainInfo } from './main';
import { SquareProps } from './interfaces/square.interface';
import { MainProps } from './interfaces/main.interface';
import { BoardProps } from './interfaces/board.interface';
import { GameProps, GameState } from './interfaces/game.interface';
import { Professional } from "./components/professional/professional.component";


function Square(props: SquareProps): JSX.Element {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export class Main extends React.Component {
    constructor(props: MainProps) {
        super(props);
        document.title = 'Philip Basnage';
    }
    render(): JSX.Element {
        return (
            <div>
                <MainInfo />
            </div>
        );
    }
}

class Board extends React.Component<BoardProps> {
    renderSquare(i: number): JSX.Element {
        return <Square value={this.props.squares[i]} onClick={(): void => this.props.onClick(i)} />;
    }

    render(): JSX.Element {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

function calculateWinner(squares: string[]): string | null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

// eslint-disable-next-line
class Game extends React.Component<GameProps, GameState> {
    constructor(props: GameProps) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null),
                },
            ],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i: number): void {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([
                {
                    squares: squares,
                },
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        } as Pick<GameState, keyof GameState>);
    }

    jumpTo(step: number): void {
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0,
        });
    }

    render(): JSX.Element {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((_step: any, move: number) => {
            const desc = move ? 'Go to move #' + move : 'Go to game start';
            return (
                <li key={move}>
                    <button onClick={(): void => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i): void => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/main" exact component={Main} />
            <Route path="/" exact component={Main} />
            <Route path="/professional" exact component={Professional} />
        </Switch>
    </Router>
, document.getElementById('root'));
