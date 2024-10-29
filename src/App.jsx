import { useState } from 'react'
import './App.css'
import Personal from './Personal';
import Confirm from './Confirm';
import Details from './Details';

function App() {
  const initialData={
    Name:"",
    Birthday:"",
    Email:"",
    Phone:"",
    Address:"",
    InsuranceType:"",
    StartDate:"",
    PreferredAmount:"",
    ExistingInsurance:"",
    CurrentInsurer:"None",
  }

  const [page, setPage] = useState(0);
  const [data, setData] = useState(initialData);
  
  const validateFields = () => {
    if (page === 0) {
      return data.Name && data.Birthday && data.Email && data.Phone && data.Address;
    } else if (page === 1) {
        return data.InsuranceType && data.StartDate && data.PreferredAmount && data.ExistingInsurance;
    }
    return true;
  };

  const handleNext = () => {
    if (validateFields()) {
      if (page === Titles.length - 1) {
        const checkbox = document.getElementById('termsCheckbox');
        if (checkbox && checkbox.checked) {
          alert('Form Submitted Successfully!');
          setData(initialData);
          setPage(0);
        } else {
          alert('Please agree to the terms and conditions before submitting.');
        }
      } else {
        setPage((page) => page + 1); 
      }
    } else {
      alert("Please fill in all required fields before proceeding.");
    }
  };

  const Titles=[
    "Personal Details",
    "Insuarance Information",
    "Review and Confirm Your Details"
  ]

  const bodyDisplay =()=>{
    if(page===0){
    return <Personal data={data} setData={setData}/>;
    }
    else if(page===1){
      return <Details data={data} setData={setData}/>;
      }
    else{
        return <Confirm data={data} setData={setData}/>;
        }
  };

  return (
    <div className='page'>
      <div className='form'>
        <div className='progressbar'>
          <div style={{width: page===0?"33.3%":page===1?"66.6%":"100%"}}></div>
        </div>
        <div className='form-container'>
          <div className='Header'>
            <h2>{Titles[page]}</h2>
          </div>
          <div className='body'>
            {bodyDisplay()}
          </div>
          <div className='footer'>
          <button onClick={() => setPage((page) => page - 1)} disabled={page===0}>Back</button>
          <button onClick={handleNext}>{page===Titles.length-1? "Submit": "Next"}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
