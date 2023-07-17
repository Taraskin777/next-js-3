import classes from "./newsletter-registration.module.css";
import { useRef, useState } from "react";

function NewsletterRegistration() {
  // const [mail, setMail] = useState("");

  const ref = useRef();

  function registrationHandler(event) {
    event.preventDefault();
    const enteredEmail = ref.current.value;
    // setMail(enteredEmail);

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={ref}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
