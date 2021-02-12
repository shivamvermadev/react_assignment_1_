import React from 'react';
import './App.css';
import Form from './form';
import * as data from './mock.json';

function App() {
  let word = data.todo;
  let word1 = data.inprogress
  let word2 = data.done;

  const ans = word.map((curElement: any, index: any) => {
    return (
      <div className="card box-shadow" key={index}>
        <div className="card-inner-data">
          <div className="py-2"> ID: {curElement.id} </div>
          <div className="py-2 primary-light">{curElement.date} </div>
        </div>
        <h3>{curElement.heading}</h3>
        <p className="primary-light"> {curElement.p}</p>
        <div className="card-inner-data">
          <div>
            <p>Assignee</p>
            <p>{curElement.name} </p>
          </div>
          <div>
            <p>Status</p>
            <p className="high-priority">{curElement.status} </p>
          </div>
        </div>
      </div>
    )
  });


  const ans2 = word1.map((curElement: any) => {
    return (
      <div className="card box-shadow">
        <div className="card-inner-data">
          <div className="py-2"> ID: {curElement.id} </div>
          <div className="py-2 primary-light">{curElement.date} </div>
        </div>
        <h3>{curElement.heading}</h3>
        <p className="primary-light"> {curElement.p}</p>
        <div className="card-inner-data">
          <div>
            <p>Assignee</p>
            <p>{curElement.name} </p>
          </div>
          <div>
            <p>Status</p>
            <p className="in-progress">{curElement.status} </p>
          </div>
        </div>
      </div>
    )
  });

  const ans3 = word2.map((curElement: any) => {
    return (
      <div className="card box-shadow">
        <div className="card-inner-data">
          <div className="py-2"> ID: {curElement.id} </div>
          <div className="py-2 primary-light">{curElement.date} </div>
        </div>
        <h3>{curElement.heading}</h3>
        <p className="primary-light"> {curElement.p}</p>
        <div className="card-inner-data">
          <div>
            <p>Assignee</p>
            <p>{curElement.name} </p>
          </div>
          <div>
            <p>Status</p>
            <p className="done">{curElement.status} </p>
          </div>
        </div>
      </div>
    )
  });

  let form = (
    <div id="container">
      <div className="form-wrap">
        <form className="form">
          <div className="form-flex-items">
            <div className="form-group">
              <label htmlFor="components">Componets/s:</label>
              <input type="text" name="firstName" id="components" />
            </div>
            <div className="form-group">
              <label htmlFor="label">Label:</label>
              <input type="text" name="lastName" id="label" />
            </div>
            <div className="form-group">
              <label htmlFor="sprint">Sprint:</label>
              <input type="email" name="email" id="sprint" />
            </div>
            <div className="form-group">
              <label htmlFor="story-points">Story Points:</label>
              <input type="password" name="password" id="story-points" />
            </div>
          </div>
          <div className="form-flex-items">
            <div className="form-group">
              <label htmlFor="assignee">Assignee:</label>
              <input type="password" name="pasword2" id="assignee" />
            </div>
            <div className="form-group">
              <label htmlFor="reporter">Reporter:</label>
              <input type="password" name="pasword2" id="reporter" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <input type="password" name="pasword2" id="description" />
            </div>
            <div className="form-group">
              <label htmlFor="Attatchment">Attatchment:</label>
              <input type="password" name="pasword2" id="Attatchment" />
            </div>
            <button type="submit" className="btn">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div>
      <div className="content-grid">
        <div id="content-grid-item-1">
          <h2>To do {word.length}</h2>
          {ans}
        </div>
        <div id="content-grid-item-2">
          <h2>In Progress {word1.length}</h2>
          {ans2}
        </div>
        <div id="content-grid-item-3">
          <h2> Done {word2.length}</h2>
          {ans3}
        </div>
      </div>
      <div className="form-container">
        {form}
      </div>
      {Form}
    </div>
  );
}

export default App;
