import React, { useEffect, useState } from "react";
import Button from "../component/Button";
import Layout from "../component/Layout";

const Contact = () => {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    email: "",
    mobile: "",
    gender: "",
  });

  const [interest, setInterest] = useState([]);

  //   console.log(user);
  useEffect(() => {
    const keydownRefs = document.addEventListener(
      "keydown",
      (e) => e.code === "Enter" && console.log(this.state)
    );

    return () => {
      console.log("component unmount");
      document.removeEventListener("keydown", keydownRefs);
    };
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user, interest);
  };

  //   const handleInterestChange = (e) => {
  //     setInterest([...interest, e.target.value]);
  //   };
  const handleInterestChange = (e) => {
    if (interest.includes(e)) {
      setInterest(interest.filter((c) => c.e !== e));
    } else {
      setInterest([...interest, e.target.value]);
    }
  };

  return (
    <Layout>
      <form className="contact" onSubmit={handleFormSubmit}>
        <section className="input__container">
          <label>First Name</label>
          <input
            type="text"
            value={user.fName}
            name="fName"
            onChange={(e) => handleChange(e)}
          />
        </section>
        <section className="input__container">
          <label>Last Name</label>
          <input
            type="text"
            value={user.lName}
            name="lName"
            onChange={(e) => handleChange(e)}
          />
        </section>
        <section className="input__container">
          <label>Mobile Number</label>
          <input
            type="text"
            value={user.mobile}
            name="mobile"
            onChange={(e) => handleChange(e)}
          />
        </section>
        <section className="input__container">
          <label>Email</label>
          <input
            type="email"
            value={user.email}
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </section>
        <section className="input__container">
          <label>Gender </label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            onChange={handleChange}
          />
          Other
        </section>
        <section className="input__container">
          <label>Interest </label>
          <input
            type="checkbox"
            name="interest"
            value="Football"
            onChange={handleInterestChange}
          />
          Football
          <input
            type="checkbox"
            name="interest"
            value="Cricket"
            onChange={handleInterestChange}
          />
          Cricket
          <input
            type="checkbox"
            name="interest"
            value="other"
            onChange={handleInterestChange}
          />
          Others
        </section>
        <section className="input__container">
          <Button type="submit" buttonText="Submit Contact" />
        </section>
      </form>
    </Layout>
  );
};

export default Contact;
