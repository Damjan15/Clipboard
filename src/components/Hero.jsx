import logo from "../assets/logo.svg"

const Hero = () => {
  return (
    <section>
        <div className="section-container mb-40 pt-16">
            <img src={logo} className="mx-auto my-16" alt="Clipboard Logo" />

            <h3>A history of everything you copy</h3>
            <p className="section-content mb-10 text-2xl">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>

            {/* Button Container */}
            <div className="button-container">
                <a href="/" className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">Download for IOS</a>
                <a href="/" className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">Download for MAC</a>
            </div>
        </div>
    </section>
  )
}

export default Hero