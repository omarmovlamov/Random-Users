import { useEffect, useState } from "react";
import axios from "axios";

function Api() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [picture, setPicture] = useState("");
  const [gender, setGender] = useState("");

  const getRandomUser = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api");
      setFirstName(response.data.results[0].name.first);
      setLastName(response.data.results[0].name.last);
      setPicture(response.data.results[0].picture.large);
      setGender(response.data.results[0].gender);
      setEmail(response.data.results[0].email);
      setPhone(response.data.results[0].phone);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getRandomUser();
  }, []);
  return (
    <div>
      <div className="card">
        <img src={picture} alt="profile-photo" />
        {gender == "male" ? (
          <h1>{`Mr.${firstName} ${lastName}`}</h1>
        ) : (
          <h1>{`Ms.${firstName} ${lastName}`}</h1>
        )}
        <p>{email}</p>
        <p>Phone : {phone}</p>
      </div>

      <button onClick={getRandomUser}>Click for Random Profile</button>
    </div>
  );
}
export default Api;
