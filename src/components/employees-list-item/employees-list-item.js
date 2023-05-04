import './employees-list-item.css'

const EmployeesListItem = (props) => {
    const {name, salary, onDelete, onToggleProp, increase, rise} = props;

    let classNames = 'list-group-item d-flex justify-content-between like'
    if (increase) {
        classNames += ' increase';
    }

    if (rise) {
        classNames += ' like';
    }


    return (
        <li className={classNames}>
            <span onClick={onToggleProp} data-togle="rise" className="list-group-item-label">{name}</span>
            <input className="list-group-item-input" defaultValue={salary + '$'} type="text"/>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-cookie btn-sm" type="button"
                onClick={onToggleProp} 
                data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button className="btn-cookie btn-sm" type="button"
                        onClick={onDelete}>
                    <i className="fas fa-cookie"></i>
                </button>
            </div>
        </li>
    )
}

export default EmployeesListItem;