import React, { Component } from 'react';
import Folders from './Folders';
import Notes from './Notes';

export default class App extends Component {
  state = {
    folders: [],
    notes: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    fetch('http://localhost:8000/folders')
      .then(response => response.json())
      .then(folders => this.setState({ folders, isLoading: false }))
      .catch(err => this.setState({ error: err.message, isLoading: false }));

    fetch('http://localhost:8000/notes')
      .then(response => response.json())
      .then(notes => this.setState({ notes, isLoading: false }))
      .catch(err => this.setState({ error: err.message, isLoading: false }));
  }

  render() {
    return (
      <div>
        <h1>My App</h1>
        <Folders
          folders={this.state.folders}
          isLoading={this.state.isLoading}
          error={this.state.error}
        />
        <Notes
          notes={this.state.notes}
          isLoading={this.state.isLoading}
          error={this.state.error}
        />
      </div>
    );
  }
}
