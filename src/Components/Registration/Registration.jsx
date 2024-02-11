import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import './Registration.scoped.css'
import axios from 'axios';



const Registration = () => {
  const [isUserRegistration, setIsUserRegistration] = useState(true);

  const toggleRegistrationType = () => {
    setIsUserRegistration(!isUserRegistration);
  };

  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Address: '',
    Phone: '',
    Password: '',
    ConfirmPassword: '',
    birthdate: '',
    RoleId: 0
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7214/User_Acounts/Create_User', formData);
      console.log('Registration successful', response.data); // Log the response data for debugging
    } catch (error) {
      console.error('Registration failed:', error.message); // Log the error message
    }
  };


  return (
    <>
      <section style={{ height: "100vh" }} class="bg-light py-4 py-md-3 py-xl-8">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-7 col-lg-9 col-xl-8 col-xxl-7">
              <div class="mb-5">
                <h4 class="text-center mb-4">Registration</h4>
              </div>
              <div class="card border border-light-subtle rounded-4">
                <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-4">
                  <label className={`switch bootstrap-switch ${isUserRegistration ? "user" : "company"}`}>
                    <input
                      className="switch__input bootstrap-switch-input"
                      type="checkbox"
                      role="switch"
                      onChange={toggleRegistrationType}
                      checked={isUserRegistration}
                    />
                    <span className="switch__slider bootstrap-switch-slider"></span>
                  </label>
                  <span className="registration-label">
                    Register as <span>{isUserRegistration ? " User" : "Company Manager"}</span>
                  </span>
                </div>
                <div class="card-body p-3 p-md-4">
                  {isUserRegistration ? (
                    <form onSubmit={handleSubmit}>
                      <div class="row gy-2 overflow-hidden">
                        <div class="col-md-6">
                          <div class="form-floating mb-3">
                            <input
                              type="text"
                              class="form-control"
                              name="FirstName"
                              id="FirstName"
                              placeholder="First Name"
                              required
                              value={formData.FirstName}
                              onChange={handleChange}
                            />
                            <label for="FirstName" class="form-label">
                              First Name
                            </label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-floating mb-3">
                            <input
                              type="text"
                              class="form-control"
                              name="LastName"
                              id="LastName"
                              placeholder="First Name"
                              required
                              value={formData.LastName} onChange={handleChange}
                            />
                            <label for="LastName" class="form-label">
                              Last Name
                            </label>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-floating mb-3">
                            <input
                              type="email"
                              class="form-control"
                              name="Email"
                              id="Email"
                              placeholder="name@example.com"
                              required
                              value={formData.Email}
                              onChange={handleChange}
                            />
                            <label for="Email" class="form-label">
                              Email
                            </label>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-floating mb-3">
                            <input
                              type="text"
                              class="form-control"
                              name="Address"
                              id="Address"
                              placeholder="name@example.com"
                              required
                              value={formData.Address}
                              onChange={handleChange}
                            />
                            <label for="Address" class="form-label">
                              Address
                            </label>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-floating mb-3">
                            <input
                              type="tel"
                              class="form-control"
                              name="Phone"
                              id="Phone"
                              placeholder="Your Phone"
                              required
                              value={formData.Phone}
                              onChange={handleChange}
                            />
                            <label for="Phone" class="form-label">
                              Phone
                            </label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-floating mb-3">
                            <input
                              type="password"
                              class="form-control"
                              name="Password"
                              id="Password"
                              required
                              placeholder="Password"
                              value={formData.Password} onChange={handleChange}
                            />
                            <label for="Password" class="form-label">
                              Password
                            </label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-floating mb-3">
                            <input
                              type="password"
                              class="form-control"
                              name="ConfirmPassword"
                              id="ConfirmPassword"
                              required
                              placeholder="Confirm Password"
                              value={formData.ConfirmPassword} onChange={handleChange}
                            />
                            <label for="ConfirmPassword" class="form-label">
                              Confirm Password
                            </label>
                          </div>
                        </div>
                        <div class="col-md-8">
                          <div class="form-floating mb-3">
                            <input
                              type="date"
                              class="form-control"
                              name="birthdate"
                              id="date"
                              required
                              value={formData.birthdate} onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-floating mb-3">
                            <select name="RoleId" class="form-control" value={formData.RoleId} onChange={handleChange} required>
                              <option value="" >Select Role</option>
                              <option value="1">Role 1</option>
                              <option value="2">Role 2</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <form>
                      {/* Company Manager Registration Form */}
                      <div className="row gy-3 overflow-hidden">
                        <div className="col-12">
                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className="form-control"
                              name="companyName"
                              id="companyName"
                              placeholder="Company Name"
                              required
                            />
                            <label htmlFor="companyName" className="form-label">
                              Company Name
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className="form-control"
                              name="address"
                              id="address"
                              placeholder="Address"
                              required
                            />
                            <label htmlFor="address" className="form-label">
                              Address
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating mb-3">
                            <input
                              type="tel"
                              className="form-control"
                              name="phone"
                              id="phone"
                              placeholder="Phone"
                              required
                            />
                            <label htmlFor="phone" className="form-label">
                              Phone
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating mb-3">
                            <input
                              type="url"
                              className="form-control"
                              name="companyWebsite"
                              id="companyWebsite"
                              placeholder="Company Website"
                              required={!isUserRegistration}
                              disabled={isUserRegistration}
                            />
                            <label htmlFor="companyWebsite" className="form-label">
                              Company Website
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className="form-control"
                              name="status"
                              id="status"
                              placeholder="Status"
                              required={!isUserRegistration}
                              disabled={isUserRegistration}
                            />
                            <label htmlFor="status" className="form-label">
                              Status
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                  <div class="col-12">
                    <div class="d-grid">
                      <button class="btn btn-primary btn-lg" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-4">
                <p class="m-0 text-secondary text-center">
                  Already have an account?
                  <Link to="/login" class="link-primary text-decoration-none">
                    Login Now!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
