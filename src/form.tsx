import React from 'react';
import './form.css';

function Form() {
    return (
        <div id="container">
            <div className="form-wrap">
                <form>
                    <div className="form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" name="firstName" id="first-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" name="lastName" id="last-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2">Confirm Password</label>
                        <input type="password" name="pasword2" id="password2" />
                    </div>
                    <button type="submit" className="btn">Sign Up</button>
                    <p className="bottom-text">
                        By clicking the Sign Up button, you agree to our
      <a href="#">Terms & Conditions</a> and
      <a href="#">Privacy Policy</a>
                    </p>
                </form>
            </div>
        </div>
    );
}


export default Form;