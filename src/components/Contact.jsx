import React from "react";
import { useState } from "react";

export const Contact = () => {
  
  const [email,setEmail]=useState('')
  const [feedback,setFeedback]=useState('')
  const handelSubmit= (e) => {
    e.preventDefault()
    const formData={email,feedback,timestamp:Date.now()}
    console.log(formData)}
  
  
  return (
    <div className="container p-5 ">
      <section>
        <h2>Provide feedback</h2>
        <form onSubmit={handelSubmit}>
          <div className="mb-3">
            <label className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={ (e) => setEmail (e.target.value)}
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Feedback
            </label>
            <textarea
              className="form-control"
              value={feedback}
              onChange={ (e) => setFeedback (e.target.value)}
              rows="3"
            ></textarea>
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
};
