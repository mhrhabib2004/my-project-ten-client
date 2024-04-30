import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfSNG0hsb6txV-Di13nDgGM7YpwtZKjpQBjv6MZDLzqw&s)' } }  className="mt-7 bg-no-repeat bg-cover bg-center rounded-xl ">
      <footer   data-aos="fade-up" className="px-4 divide-y   text-[#fff]">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
              <span className="self-center text-2xl font-semibold">
                <button  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="btn text-4xl btn-outline h-auto border-none bg-slate-600 p-2 btn-secondary">TRIP TREKKER</button></span>
            </a>
          </div>
          <div className="grid animate__animated animate__fadeInDown grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-yellow-50 font-medium text-lg">Product</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">Features</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">Integrations</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">Pricing</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-yellow-50 font-medium text-lg">Company</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">Privacy</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase text-yellow-50 font-medium text-lg">Developers</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">Public API</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">Documentation</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">Guides</a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase text-yellow-50 font-medium text-lg">Social media</div>
              <div className="flex justify-center space-x-3">
                <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                  <button className="btn btn-outline  border-none bg-slate-700 w-12 btn-secondary"><FaFacebook /></button>
                </a>
                <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                  <button className="btn btn-outline  border-none bg-slate-700 w-12 btn-secondary"><FaTwitter /></button>
                </a>
                <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                  <button className="btn btn-outline  border-none bg-slate-700 w-12 btn-secondary"><BsInstagram /></button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center animate__animated animate__bounce text-yellow-50 font-medium ">© 2000 Company Co. All rights reserved.</div>
      </footer >
    </div >

  );
};

export default Footer;