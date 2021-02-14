import React from 'react';
import './form.css';

function Form() {
    return (
        <div className="container">
            <div className="form-wrap">
                <form>
                    <div className="form-flex-items">
                        <div className="form-group">
                            <label htmlFor="components">Components/s</label>
                            <input type="text" name="firstName" id="components" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="label">Label</label>
                            <input type="text" name="lastName" id="label" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sprint">Sprint</label>
                            <input type="email" name="email" id="sprint" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="story-points">Story Points</label>
                            <input type="password" name="password" id="story-points" />
                        </div>
                    </div>
                    <div className="form-flex-items">
                        <div className="form-group">
                            <label htmlFor="assignee">Assignee</label>
                            <input type="password" name="pasword2" id="assignee" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="reporter">Reporter</label>
                            <input type="password" name="pasword2" id="reporter" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input type="password" name="pasword2" id="description" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="attatchment">Attatchment</label>
                            <input type="password" name="pasword2" id="attatchment" />
                        </div>
                        <button type="submit" className="btn">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default Form;