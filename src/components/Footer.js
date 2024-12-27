import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

export default function Footer() {
  return (
    <div>
     
     <footer style={{ backgroundColor: '#006400' }} className="text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Contact Info */}
          <div className="col-md-4">
            <h5 className="text-uppercase mb-4">Contact Info</h5>
            <p className="mb-1"><strong>RESEARCH UNIT</strong></p>
            <p>Institute of Technology,<br/>
              University of Moratuwa,<br />
              Diyagama,<br />
              Homagama,<br />
              Sri Lanka.
            </p>
            <p>
              
              EMAIL: <a href="mailto:info@itum.mrt.ac.lk" className="text-light">researchunit@itum.mrt.ac.lk</a>
            </p>
           
          </div>

        
          <div className="col-md-4">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              
              <li><a href="https://itum.mrt.ac.lk/" className="text-light text-decoration-none">ITUM</a></li>
              <li><a href="https://itum.mrt.ac.lk/research/itum-research-grants" className="text-light text-decoration-none">Itum Research Grants</a></li>
              <li><a href="https://www.ugc.ac.lk/" className="text-light text-decoration-none">University Grants Commission</a></li>
              <li><a href="https://uom.lk/" className="text-light text-decoration-none">University of Moratuwa</a></li>
            </ul>
          </div>

          <div className="col-md-4">
  <h5 className="text-uppercase mb-4">Find Us</h5>
  <div className="embed-responsive embed-responsive-16by9">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.685704424037!2d79.99045147404772!3d6.8080329197934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24e1a4acef3e7%3A0xb2ef9c84206274fc!2sInstitute%20of%20Technology%2C%20University%20of%20Moratuwa!5e0!3m2!1ssi!2slk!4v1735304265868!5m2!1ssi!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
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
          <a href="/" className="btn btn-light btn-sm">&uarr; Back to Top</a>
        </div>
      </div>
    </footer>


    </div>
  )
}
