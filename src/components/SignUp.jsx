import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

function SignUp() {
  // Use State For Active And Unactive Buttons Starts
    const [activeSection, setActiveSection] = useState('patient');
  // Use State For Active And Unactive Buttons Ends
  // Usestate for Admin Data Starts
    const [adminData, setAdminData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
      });
    // Handling Changes on the Forms Starts
      const handleAdminChange = (e) => {
        const { name, value } = e.target;
        setAdminData({ ...adminData, [name]: value });
      };
    // Handling Changes on the Forms Ends
    // Handling Not To Referesh The Page When User Enters Submit Button
      const handleAdminSubmit = (e) => {
        e.preventDefault();
      };
      // Handling Not To Referesh The Page When User Enters Submit Button Ends
      // Usestate for Admin Data Ends
      // Usestate for Doctor Data Starts
    const [doctorData, setDoctorData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        specialization: '',
        licenseNumber: '',
        experience: '',
        medicalSchool: '',
        clinicName: '',
        clinicAddress: ''
      });
    // Handling Change on Doctor Documents Starts
      const handleDoctorChange = (e) => {
        const { name, value } = e.target;
        setDoctorData({ ...doctorData, [name]: value });
      };
      // Handling Change on Doctor Documents Ends
    // Handling 
      const handleDoctorSubmit = (e) => {
        e.preventDefault();
      };
      // Usestate for Doctor Data Ends
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        bloodGroup: '',
        allergies: '',
        medications: '',
        medicalHistory: '',
        insuranceProvider: '',
        policyNumber: '',
        groupNumber: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
      };
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <>
            <div className='flex items-center pointer-events-auto justify-center'>
                <div className='flex gap-x-5'>
                    <button
                        className={`mb-10 ${activeSection === 'patient' ? 'button-34' : 'button-33'}`}
                        onClick={() => handleSectionChange('patient')}
                    >
                        Patient
                    </button>
                    <button
                        className={`mb-10 ${activeSection === 'doctor' ? 'button-34' : 'button-33'}`}
                        onClick={() => handleSectionChange('doctor')}
                    >
                        Doctor
                    </button>
                    <button
                        className={`mb-10 ${activeSection === 'admin' ? 'button-34' : 'button-33'}`}
                        onClick={() => handleSectionChange('admin')}
                    >
                        Admin
                    </button>
                </div>
            </div>
            <div className='xl:flex relative pointer-events-auto xl:items-center xl:justify-center w-full flex flex-col items-center justify-center gap-5'>
                <div
                    id='patient'
                    className={`w-[400px] sm:w-[400px] xl:w-[60%] pointer-events-auto h-[360vh]  ${activeSection === 'patient' ? 'z-50 opacity-100' : 'z-0 opacity-0'}`}
                >
                    {/* Patient Sign Up Start */}
                    {/* Patient Sign Up Start */}
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Patient Signup</h2>

      <label className="block mb-2" htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="dob">Date of Birth</label>
      <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="gender">Gender</label>
      <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label className="block mb-2" htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="password">Password</label>
      <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <h3 className="text-xl font-bold mb-4">Contact Information</h3>

      <label className="block mb-2" htmlFor="phoneNumber">Phone Number</label>
      <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="address">Address</label>
      <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="city">City</label>
      <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="state">State</label>
      <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="zipCode">Zip Code</label>
      <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="country">Country</label>
      <select id="country" name="country" value={formData.country} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required>
        <option value="">Select Country</option>
        <option value="us">United States</option>
        {/* Add other countries as options */}
      </select>

      <h3 className="text-xl font-bold mb-4">Medical Information</h3>

      <label className="block mb-2" htmlFor="bloodGroup">Blood Group</label>
      <select id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required>
        <option value="">Select Blood Group</option>
        <option value="a+">A+</option>
        <option value="a-">A-</option>
        <option value="b+">B+</option>
        <option value="b-">B-</option>
        <option value="ab+">AB+</option>
        <option value="ab-">AB-</option>
        <option value="o+">O+</option>
        <option value="o-">O-</option>
      </select>

      <label className="block mb-2" htmlFor="allergies">Known Allergies</label>
      <input type="text" id="allergies" name="allergies" value={formData.allergies} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" />

      <label className="block mb-2" htmlFor="medications">Current Medications</label>
      <input type="text" id="medications" name="medications" value={formData.medications} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" />

      <label className="block mb-2" htmlFor="medicalHistory">Medical History</label>
      <textarea id="medicalHistory" name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded"></textarea>

      <h3 className="text-xl font-bold mb-4">Insurance Information (Optional)</h3>

      <label className="block mb-2" htmlFor="insuranceProvider">Insurance Provider</label>
      <input type="text" id="insuranceProvider" name="insuranceProvider" value={formData.insuranceProvider} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" />

      <label className="block mb-2" htmlFor="policyNumber">Policy Number</label>
      <input type="text" id="policyNumber" name="policyNumber" value={formData.policyNumber} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" />

      <label className="block mb-2" htmlFor="groupNumber">Group Number</label>
      <input type="text" id="groupNumber" name="groupNumber" value={formData.groupNumber} onChange={handleChange} className="w-full p-2 mb-4 border border-gray-300 rounded" />
     <div className='flex items-center justify-center'>
     <button type='submit' className="button-86 w-full pointer-events-auto p-2 bg-blue-500 text-white rounded" role="button">Submit</button>
     </div>
     
    </form>
                    {/* Patient Sign Up Ends */}
                </div>
                <div
                    id='doc'
                    className={`w-[400px] sm:w-[400px] md:h-[600px] xl:w-[60%] h-[330vh]  absolute top-0 ${activeSection === 'doctor' ? 'z-50 opacity-100' : 'z-0 opacity-0'}`}
                >
                    <form onSubmit={handleDoctorSubmit} className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Doctor Signup</h2>

      <label className="block mb-2" htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" value={doctorData.firstName} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" value={doctorData.lastName} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="dob">Date of Birth</label>
      <input type="date" id="dob" name="dob" value={doctorData.dob} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="gender">Gender</label>
      <select id="gender" name="gender" value={doctorData.gender} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label className="block mb-2" htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={doctorData.email} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="password">Password</label>
      <input type="password" id="password" name="password" value={doctorData.password} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" name="confirmPassword" value={doctorData.confirmPassword} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <h3 className="text-xl font-bold mb-4">Contact Information</h3>

      <label className="block mb-2" htmlFor="phoneNumber">Phone Number</label>
      <input type="tel" id="phoneNumber" name="phoneNumber" value={doctorData.phoneNumber} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="address">Address</label>
      <input type="text" id="address" name="address" value={doctorData.address} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="city">City</label>
      <input type="text" id="city" name="city" value={doctorData.city} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="state">State</label>
      <input type="text" id="state" name="state" value={doctorData.state} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="zipCode">Zip Code</label>
      <input type="text" id="zipCode" name="zipCode" value={doctorData.zipCode} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="country">Country</label>
      <select id="country" name="country" value={doctorData.country} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required>
        <option value="">Select Country</option>
        <option value="us">United States</option>
        {/* Add other countries as options */}
      </select>

      <h3 className="text-xl font-bold mb-4">Professional Information</h3>

      <label className="block mb-2" htmlFor="specialization">Specialization</label>
      <input type="text" id="specialization" name="specialization" value={doctorData.specialization} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="licenseNumber">License Number</label>
      <input type="text" id="licenseNumber" name="licenseNumber" value={doctorData.licenseNumber} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="experience">Years of Experience</label>
      <input type="number" id="experience" name="experience" value={doctorData.experience} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="medicalSchool">Medical School</label>
      <input type="text" id="medicalSchool" name="medicalSchool" value={doctorData.medicalSchool} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="clinicName">Clinic/Hospital Name</label>
      <input type="text" id="clinicName" name="clinicName" value={doctorData.clinicName} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="clinicAddress">Clinic/Hospital Address</label>
      <input type="text" id="clinicAddress" name="clinicAddress" value={doctorData.clinicAddress} onChange={handleDoctorChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <div className='flex items-center justify-center z-[99999] pointer-events-auto'>
     <button type='submit' className="button-86 w-full pointer-events-auto p-2 bg-blue-500 text-white rounded" role="button">Submit</button>
     </div>
    </form>
                </div>
                <div
                    id='admin'
                    className={`w-[400px] sm:w-[400px]  xl:w-[60%] h-[250vh]  absolute top-0 ${activeSection === 'admin' ? 'z-50 opacity-100' : 'z-0 opacity-0'}`}
                >
                    <form onSubmit={handleAdminSubmit} className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Signup</h2>

      <label className="block mb-2" htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" value={adminData.firstName} onChange={handleAdminChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" value={adminData.lastName} onChange={handleAdminChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="dob">Date of Birth</label>
      <input type="date" id="dob" name="dob" value={adminData.dob} onChange={handleAdminChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="gender">Gender</label>
      <select id="gender" name="gender" value={adminData.gender} onChange={handleAdminChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label className="block mb-2" htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={adminData.email} onChange={handleAdminChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="password">Password</label>
      <input type="password" id="password" name="password" value={adminData.password} onChange={handleAdminChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" name="confirmPassword" value={adminData.confirmPassword} onChange={handleAdminChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <h3 className="text-xl font-bold mb-4">Contact Information</h3>

      <label className="block mb-2" htmlFor="phoneNumber">Phone Number</label>
      <input type="tel" id="phoneNumber" name="phoneNumber" value={adminData.phoneNumber} onChange={handleAdminChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="address">Address</label>
      <input type="text" id="address" name="address" value={adminData.address} onChange={handleAdminChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="city">City</label>
      <input type="text" id="city" name="city" value={adminData.city} onChange={handleAdminChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="state">State</label>
      <input type="text" id="state" name="state" value={adminData.state} onChange={handleAdminChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="zipCode">Zip Code</label>
      <input type="text" id="zipCode" name="zipCode" value={adminData.zipCode} onChange={handleAdminChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required />

      <label className="block mb-2" htmlFor="country">Country</label>
      <select id="country" name="country" value={adminData.country} onChange={handleAdminChange} className="w-full p-2 mb-4 border border-gray-300 rounded" required>
        <option value="">Select Country</option>
        <option value="us">United States</option>
        {/* Add other countries as options */}
      </select>

      <div className='flex items-center justify-center z-[99999] pointer-events-auto'>
     <button type='submit' className="button-86 w-full pointer-events-auto p-2 bg-blue-500 text-white rounded" role="button">Submit</button>
     </div>
    
    </form>
    
                </div>
                
                <Marquee>
                    <h1 className='xl:text-[4vw]  text-[19vw]'>
                        Welcome! Access personalized health tips, book appointments, and manage health records. Sign up for a free consultation. Stay hydrated, exercise, and eat well. Contact our 24/7 support team for help.
                    </h1>
                </Marquee>
            </div>
        </>
    );
}

export default SignUp;
