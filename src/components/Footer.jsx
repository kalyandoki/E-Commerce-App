const Footer = () => {
  return (
    <div className="bg-white py-5">
      <hr className="text-muted" />
      <div className="container">
        <div className="row mb-4">
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <h5 className="text-secondary fw-bold mb-3">Product</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Overview</li>
              <li className="mb-2">Features</li>
              <li className="mb-2">
                Solutions{" "}
                <span className="badge bg-success text-light ms-2">New</span>
              </li>
              <li className="mb-2">Tutorials</li>
              <li className="mb-2">Pricing</li>
              <li className="mb-2">Releases</li>
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <h5 className="text-secondary fw-bold mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2">About us</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Press</li>
              <li className="mb-2">News</li>
              <li className="mb-2">Media kit</li>
              <li className="mb-2">Contact</li>
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <h5 className="text-secondary fw-bold mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Blog</li>
              <li className="mb-2">Newsletter</li>
              <li className="mb-2">Events</li>
              <li className="mb-2">Help center</li>
              <li className="mb-2">Tutorials</li>
              <li className="mb-2">Support</li>
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <h5 className="text-secondary fw-bold mb-3">Use cases</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Startups</li>
              <li className="mb-2">Enterprise</li>
              <li className="mb-2">Government</li>
              <li className="mb-2">SaaS center</li>
              <li className="mb-2">Marketplaces</li>
              <li className="mb-2">Ecommerce</li>
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <h5 className="text-secondary fw-bold mb-3">Social</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Twitter</li>
              <li className="mb-2">LinkedIn</li>
              <li className="mb-2">Facebook</li>
              <li className="mb-2">GitHub</li>
              <li className="mb-2">AngelList</li>
              <li className="mb-2">Dribbble</li>
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <h5 className="text-secondary fw-bold mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Terms</li>
              <li className="mb-2">Privacy</li>
              <li className="mb-2">Cookies</li>
              <li className="mb-2">Licenses</li>
              <li className="mb-2">Settings</li>
              <li className="mb-2">Contact</li>
            </ul>
          </div>
          <hr className="text-muted" />
        </div>

        <div className=" w-100% d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="d-flex align-items-center mb-3 mb-md-0">
            <img
              src="https://i.imgur.com/FaKmFsN.jpeg"
              alt="Logo"
              className="rounded"
              style={{ width: "150px", height: "40px" }}
            />
          </div>
          <p className="text-muted mb-0">
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
