import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

export default function Footer() {
  return (
    <div>
     
     <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Contact Info */}
          <div className="col-md-4">
            <h5 className="text-uppercase mb-4">Contact Info</h5>
            <p className="mb-1"><strong>INSTITUTE OF TECHNOLOGY</strong></p>
            <p>University of Moratuwa,<br />
              Diyagama,<br />
              Homagama,<br />
              Sri Lanka.
            </p>
            <p>
              TEL: (+94) 112 124 000<br />
              FAX: (+94) 112 117 040<br />
              EMAIL: <a href="mailto:info@itum.mrt.ac.lk" className="text-light">info@itum.mrt.ac.lk</a>
            </p>
            <p>
              <strong>Student Affairs Division</strong><br />
              TEL: (+94) 113 460 406<br />
              EMAIL: <a href="mailto:ar-welfare@itum.mrt.ac.lk" className="text-light">ar-welfare@itum.mrt.ac.lk</a>
            </p>
            <p>
              <strong>Examination Division</strong><br />
              TEL: (+94) 112 124 004 Ext: 1109<br />
              EMAIL: <a href="mailto:sar-exam@itum.mrt.ac.lk" className="text-light">sar-exam@itum.mrt.ac.lk</a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">University Grants Commission</a></li>
              <li><a href="#" className="text-light text-decoration-none">University of Moratuwa</a></li>
              <li><a href="#" className="text-light text-decoration-none">NDT Alumni</a></li>
              <li><a href="#" className="text-light text-decoration-none">IIESL</a></li>
              <li><a href="#" className="text-light text-decoration-none">Login to Web Mail</a></li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="col-md-4">
            <h5 className="text-uppercase mb-4">Find Us</h5>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sInstitute%20of%20Technology%2C%20University%20of%20Moratuwa!5e0!3m2!1sen!2s!4v0"
                width="100%"
                height="200"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <a href="#top" className="btn btn-light btn-sm">&uarr; Back to Top</a>
        </div>
      </div>
    </footer>


    </div>
  )
}
