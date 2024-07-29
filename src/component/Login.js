
import '../common/Login.css'
import { useNavigate } from 'react-router-dom';

export const Login =()=>{
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
      };
    
      return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-heading">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" />
                    </div>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
};
