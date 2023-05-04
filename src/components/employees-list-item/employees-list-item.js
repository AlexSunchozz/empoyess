import { Component } from 'react';
import './employees-list-item.css'

class EmployeesListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            increase: false,
            liked: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    likeUser = () => {
        this.setState(({liked}) => ({
            liked: !liked
        }))
    }

    render() {
        const {name, salary} = this.props;
        const {increase, liked} = this.state

        let classNames = 'list-group-item d-flex justify-content-between like'
        if (increase) {
            classNames += ' increase';
        }

        if (liked) {
            classNames += ' like';
        }


        return (
            <li className={classNames}>
                <span onClick={this.likeUser} className="list-group-item-label">{name}</span>
                <input className="list-group-item-input" defaultValue={salary + '$'} type="text"/>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-cookie btn-sm" type="button"
                    onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button className="btn-cookie btn-sm" type="button">
                        <i className="fas fa-cookie"></i>
                    </button>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;