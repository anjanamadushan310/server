import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobilenumber, setMobilenumber] = useState("");
    const [address, setAddress] = useState("");
    
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false); // For loading state
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true); // Set loading to true

        axios.post('http://localhost:3001/register', { name, email, mobilenumber, password, category, address,  })
            .then(result => {
                setLoading(false); // Set loading to false once request is done
                console.log(result);
                if (result.data === "Already registered") {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/login');
                } else {
                    alert("Registered successfully! Please Login to proceed.");
                    navigate('/login');
                }
            })
            .catch(err => {
                setLoading(false); // Set loading to false in case of error
                console.log(err);
                alert("An error occurred. Please try again.");
            });
    }

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center vh-100"
                style={{
                    backgroundImage: "linear-gradient(#006400, #224B22, rgba(34, 75, 34, 0.8))"
                }}>
                <div className="bg-white p-3 rounded" style={{ width: '40%', backgroundColor: '#f1f1f1' }}>
                    {/* Ensure Register Title is visible */}
                    <h2 className="mb-3 text-success" style={{ fontWeight: 'bold' }}>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputName" className="form-label">
                                <strong>Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="form-control"
                                id="exampleInputName"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="form-control"
                                id="exampleInputEmail1"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputMobilenumber" className="form-label">
                                <strong>Mobile Number</strong>
                            </label>
                            <input
                                type="tel"
                                placeholder="Enter Mobile Number"
                                className="form-control"
                                id="exampleInputMobilenumber"
                                value={mobilenumber}
                                onChange={(event) => setMobilenumber(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="form-control"
                                id="exampleInputPassword1"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="categorySelect" className="form-label">
                                <strong>Participant Category</strong>
                            </label>
                            <select
                                className="form-select"
                                id="categorySelect"
                                value={category}
                                onChange={(event) => setCategory(event.target.value)}
                                required
                            >
                                <option value="" disabled>Select Category</option>
                                <option value="host">Host</option>
                                <option value="co-host">Co-Host</option>
                                <option value="participant">Participant</option>
                            </select>
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="addressInput" className="form-label">
                                <strong>Address</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Address"
                                className="form-control"
                                id="addressInput"
                                value={address}
                                onChange={(event) => setAddress(event.target.value)}
                                required
                            />
                        </div>
                       
                        <button
                            type="submit"
                            className="btn"
                            style={{ backgroundColor: '#006400', borderColor: '#004d00', color: 'white' }}
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? 'Registering...' : 'Register'}
                        </button>
                    </form>
                    <p className='container my-2'>Already have an account?</p>
                    <Link to='/login' className="btn" style={{ backgroundColor: '#224B22', borderColor: '#1e3a1e', color: 'white' }}>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
