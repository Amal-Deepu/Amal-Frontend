import React, { useState } from 'react';
import Modal from 'react-modal'; // Corrected import statement

const Header = () => {
    const [visible, setVisible] = useState(false); // Corrected useState call

    return (
        <div>
            <div className="header">
                <div className="logo">
                    <h1>Library Attendance</h1>
                </div>
                <nav className="navigation">
                    <ul />
                </nav>
                <div className="btn">
                    <button type="button" onClick={() => setVisible(true)}>Login</button>
                </div>
            </div>

            <Modal
                isOpen={visible}
                onRequestClose={() => setVisible(false)}
                contentLabel="Login Modal"
                className="Modal">

                <h2 className="h2">Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Log In</button>
                    <button type="button" onClick={() => setVisible(false)} className="btn btn-secondary">Close</button>
                </form>
            </Modal>
        </div>
    );
};

export default Header;
