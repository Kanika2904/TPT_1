
import '../common/Common.css'
import { useNavigate } from 'react-router-dom';

export const Signup =()=>{

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("signup successfull")
        navigate('/login');

      };
    

      return (
        <div className="signup-container">
            <div className="signup-box">
                <h2 className="signup-heading">Signup Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="first">First Name:</label>
                        <input type="text" id="first" name="first" placeholder="John" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last">Last Name:</label>
                        <input type="text" id="last" name="last" placeholder="Doe" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="john.doe@example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="********" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth:</label>
                        <input type="date" id="dob" name="dob" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};