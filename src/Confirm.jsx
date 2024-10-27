import React from 'react';

function Confirm({ data }) {
  return (
    <div >
      <div className='confirm'>
        <div>
          <h3>Personal Information</h3>
          <p><strong>Full Name:</strong> {data.Name}</p>
          <p><strong>Birthday:</strong> {data.Birthday}</p>
          <p><strong>Email:</strong> {data.Email}</p>
          <p><strong>Phone:</strong> {data.Phone}</p>
          <p><strong>Address:</strong> {data.Address}</p>
        </div>
        <div>
          <h3>Insurance Information</h3>
          <p><strong>Type of Insurance:</strong> {data.InsuranceType}</p>
          <p><strong>Coverage Start Date:</strong> {data.StartDate}</p>
          <p><strong>Preferred Coverage Amount:</strong> {data.PreferredAmount}</p>
          <p><strong>Existing Insurance:</strong> {data.ExistingInsurance}</p>
          <p><strong>Current Insurer:</strong> {data.CurrentInsurer}</p>
        </div>
      </div>
      <div className='agree'>
        <label>
          <input type="checkbox" id="termsCheckbox" required />
          I agree to the <a href="#">terms and conditions</a>.
        </label>
      </div>
    </div>
  );
}

export default Confirm;
