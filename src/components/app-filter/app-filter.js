import "./app-filter.css";

const AppFilter = ({filter, onFilterSelect}) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'like', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'},
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? "btn btn-light" : "btn btn-outline-light"
        
        return (
            <button type="button"
                    key={name}
                    className={clazz}
                    onClick={() => onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;