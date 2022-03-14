function Phone(props) {
  return ( 
    <div className="phone">
      <div className="phone__header">
        <div className="phone__header__avatar">
          <svg className="phone__header__back-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>

          <img src="assets/avatar.jpg" alt="Avatar" />
          <h2>Samuel Green</h2>
          <p>Available to Walk</p>
        </div>

        <svg className="phone__header__menu-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>
      </div>

      <div className="phone__main">
        <div className="message-flex">
          <div className="message message--there">
            That sounds great. I'd be
            happy to discuss more.
          </div>
          <div className="message message--there">
            Could you send over some
            picture of your dog. please?
          </div>
          <div className="message message--your message--photo">
            <img src="assets/dog-image-1.jpg" alt="Dog Image1" />
            <img src="assets/dog-image-2.jpg" alt="Dog Image2" />
            <img src="assets/dog-image-3.jpg" alt="Dog Image3" />
          </div>
          <div className="message message--your">
            Here are a few picture. She's
            a happy girl!
          </div>
          <div className="message message--your">
            Can you make it?
          </div>
          <div className="message message--there">
            She looks so happy! The time
            we discussed works. How
            long shall I take her out for?
          </div>
          <div className="message message--there message--price">
            <div className="input">
              <span className="input-checkbox"></span>
              <p>30 minutes walk</p>
            </div>

            <span>$29</span>
          </div>
          <div className="message message--there message--price">
            <div className="input">
              <span className="input-checkbox"></span>
              <p>1 hour walk</p>
            </div>

            <span>$49</span>
          </div>
        </div>
        <div className="message-input">
          <input type="text" name="message" id="message" placeholder="Type a message..." />
          <svg className="message-input__send-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"/></svg>
        </div>
      </div>
    </div>
  );
}

export default Phone;