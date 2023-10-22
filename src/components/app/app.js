import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data: [
        {name: "Alex R.", salary: 800, increase: true, like: false, id: 1},
        {name: "Shulgin M.", salary: 3000, increase: false, like: false, id: 2},
        {name: "Polyakova E.", salary: 5000, increase: false, like: false, id: 3}
      ],
      term: '',
      filter: 'all'
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
        // const index = data.findIndex(elem => elem.id == id);
        // const before = data.slice(0, index);
        // const after = data.slice(index + 1);
        // const newArr = [...before, ...after];
        // return {data: newArr}

        return {
          data: data.filter(item => item.id !== id)
        }
    })
  }

  addEmployee = (name, salary) => {
    const newEmployee = {
      name: name,
      salary: salary,
      increase: false,
      like: false,
      id: this.state.data.length
    }
    this.setState(({data}) => {
      const newArr = [...data];
      newArr.push(newEmployee);

      return {
        data: newArr
      }
    })
  }

  onToggleProp = (id, prop) => {
    // this.setState(({data}) => {
    //   const index = data.findIndex(elem => elem.id === id);
    //   const old = data[index];

    //   const newItem = {...old, increase: !old.increase};

    //   const newArr = [...data.slice(0, index), newItem, [...data.slice(index + 1)]];
      
    //   return {
    //     data: newArr
    //   }
    // })

    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id == id) return {...item, [prop]: !item[prop]}
        return item
      })
    }))
  }

  searchEmp = (items, term) => {
    if (term.length === 0) return items

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  filterPost = (items, filter) => {
    switch(filter) {
      case "like": 
          return items.filter(item => item.like);
      case "moreThen1000":
          return items.filter(item => item.salary > 1000)
      default: 
          return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }

  render() {
    const {data, term, filter} = this.state;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter)
    
    return (
      <div className="app">
          <AppInfo total={data.length}
                   likeEmployees={data.filter(item => item.increase).length}/>
  
          <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
          </div>
          
          <EmployeesList data={visibleData} 
                        onDelete={this.deleteItem}
                        onToggleProp={this.onToggleProp}/>
          <EmployeesAddForm addEmployee={this.addEmployee}/>
      </div>
    );
  }
}

export default App;