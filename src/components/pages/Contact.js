import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>If you would like to contact me, here are a few ways to do so.</p>
      <p>My preffered method is email adamkuemmel@gmail.com</p>
      <p>You can also contact me on github </p>
      <p>or Linkedin</p>

      <form
        action="https://mailthis.to/adamkuemmel@gmail.com"
        method="POST"
        encType="multipart/form-data"
      >
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="_replyto" placeholder="Your email" />
        <textarea
          name="message"
          placeholder="Enter your message here"
        ></textarea>
        <input type="file" name="file" placeholder="Attachments (optional)" />
        <input type="hidden" name="_subject" value="Contact form submitted" />
        <input type="hidden" name="_after" value="https://localhost:3000" />
        <input type="hidden" name="_honeypot" value="" />
        <input type="hidden" name="_confirmation" value="" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
