contact_us_section = 
`
<section id="contact_us" class="py-5">
  <div class="container">
    <h2 class="text-center mb-4">Contact Us</h2>
    <p class="text-center mb-5">
      Drop us a line!
    </p>

    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your name" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="4" placeholder="How can we help you?" required></textarea>
          </div>
          <div class="text-center">
            <button id="send_message_btn" type="submit" class="btn">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

`
document.body.insertAdjacentHTML('beforeend', contact_us_section);