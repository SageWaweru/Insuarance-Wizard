import React from 'react'

function Details({data,setData}) {
  return (
    <div className='detail'>
      <label htmlFor="insuarance">Type of Insuarance</label> <br />
      <input type="text"  value={data.InsuranceType}
        onChange={(event) => setData({ ...data, InsuranceType: event.target.value })}/> <br />
      <label htmlFor="startDate">Coverage Start Date</label> <br />
      <input type="date" name="" id="" value={data. StartDate}
        onChange={(event) => setData({ ...data,  StartDate: event.target.value })} /> <br />
      <label htmlFor="amount">Preferred Coverage Amount</label> <br />
      <input type="number" name="" id="" value={data. PreferredAmount}
        onChange={(event) => setData({ ...data, PreferredAmount : event.target.value })}/> <br />
      <label htmlFor="existing">Any Existing Insuarance?</label> <br />
      <div id='radio'>
        <label htmlFor="">Yes</label>
        <input type="radio" name="existing" value="yes" checked={data.ExistingInsurance === "yes"}
            onChange={(event) => setData({ ...data, ExistingInsurance: event.target.value })}  />
        <label htmlFor="">No</label>
        <input type="radio" name="existing" value="no"   checked={data.ExistingInsurance === "no"}
            onChange={(event) => setData({ ...data, ExistingInsurance: event.target.value })} />
      <br />
      </div> 
      <label htmlFor="current">Current Insurer</label> <br />
      <input type="text" placeholder='If Applicable'value={data.CurrentInsurer}
        onChange={(event) => setData({ ...data, CurrentInsurer: event.target.value })}/>
    </div>
  )
}

export default Details