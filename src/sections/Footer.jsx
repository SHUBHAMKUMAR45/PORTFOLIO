const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-5 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 select-none font-spacegrotesk">
      <div className="text-white-500 flex gap-2 text-sm">
        <p className="hover:text-cyber-blue cursor-pointer transition-colors">Terms & Conditions</p>
        <p>|</p>
        <p className="hover:text-cyber-pink cursor-pointer transition-colors">Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon border border-cyber-blue/10 hover:border-cyber-blue hover:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all">
          <a href="https://www.linkedin.com/in/-shubham-kumar/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
            <img src="/assets/lina.svg" alt="linkedin" className="size-5 invert brightness-[0.05] hover:filter-none" />
          </a>
        </div>
        <div className="social-icon border border-cyber-purple/10 hover:border-cyber-purple hover:shadow-[0_0_10px_rgba(189,0,255,0.3)] transition-all">
          <a href="https://github.com/SHUBHAMKUMAR45" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
            <img src="/assets/github.svg" alt="github" className="size-5 invert brightness-[0.05] hover:filter-none" />
          </a>
        </div>
      </div>

      <p className="text-white-500 text-sm">© 2026 SHUBHAM KUMAR. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
