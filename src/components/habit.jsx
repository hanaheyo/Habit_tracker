import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    // 멤버변수 설정 - render에서 반복 발생되는 것 방지
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    }

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }

    render() {
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}
                >
                <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;