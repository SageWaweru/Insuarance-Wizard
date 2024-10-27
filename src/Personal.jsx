import React from "react";


function Personal({ data, setData }) {
  return (
    <div className="personal">
      <label htmlFor="name"></label>Full Name
      <br />
      <input
        type="text"
        value={data.Name}
        onChange={(event) => setData({ ...data, Name: event.target.value })}
      />
      <br />
      <label htmlFor="birthday">Date of Birth</label>
      <br />
      <input
        type="date"
        value={data.Birthday}
        onChange={(event) =>
          setData({ ...data, Birthday: event.target.value })
        }
      />
      <br />
      <label htmlFor="email">Email Address </label>
      <br />
      <input
        type="email"
        value={data.Email}
        onChange={(event) =>
          setData({ ...data, Email: event.target.value })
        }
      />
      <br />
      <label htmlFor="phone">Phone Number</label>
      <br />
      <input
        type="number"
        value={data.Phone}
        onChange={(event) => setData({ ...data, Phone: event.target.value })}
      />
      <br />
      <label htmlFor="address">Address</label>
      <br />
      <input
        type="text"
        value={data.Address}
        onChange={(event) => setData({ ...data, Address: event.target.value })}
      />
      <br />
    </div>
  );
}

export default Personal;
