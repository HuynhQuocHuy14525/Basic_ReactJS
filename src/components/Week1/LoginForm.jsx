import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className="login-container">
            <form className="login-form">
                <h3>Login</h3>
                <div className="input-group">
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Password" />
                </div>
                <button type="button" className="btn-login">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;