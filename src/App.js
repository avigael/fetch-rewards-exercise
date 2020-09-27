import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: []
    };
  }

  async componentDidMount() {
    // Proxy enables cross-origin requests
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const response = await fetch(proxy + 'https://fetch-hiring.s3.amazonaws.com/hiring.json');
    const data = await response.json();
    this.setState({ loading: false, list: [...data]});
  }

  render() {
    // Filters out null names and sorts by listId then name
    const items = this.state.list
      .filter((item) => item.name)
      .sort(function(a,b){
        return a.listId - b.listId || +a.name.slice(5) - +b.name.slice(5);
      })

    // Group items by listId
    const groupA = items.filter((item) => item.listId === 1);
    const groupB = items.filter((item) => item.listId === 2);
    const groupC = items.filter((item) => item.listId === 3);
    const groupD = items.filter((item) => item.listId === 4);

    const columns = [
      { field: 'listId', headerName: 'ListId', width: 70 },
      { field: 'name', headerName: 'Name', width: 130 },
    ];
    
    return (
      // Displays items in separate tables
      <div style={{ height: 400, width: '50%', paddingLeft: '25%'}}>
        <h1>ListId: 1</h1>
        <DataGrid rows={groupA} columns={columns} pageSize={5} loading={this.state.loading} />
        <h1>ListId: 2</h1>
        <DataGrid rows={groupB} columns={columns} pageSize={5} loading={this.state.loading} />
        <h1>ListId: 3</h1>
        <DataGrid rows={groupC} columns={columns} pageSize={5} loading={this.state.loading} />
        <h1>ListId: 4</h1>
        <DataGrid rows={groupD} columns={columns} pageSize={5} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
