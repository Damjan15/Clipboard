import googleLogo from "../assets/logo-google.png"
import hpLogo from "../assets/logo-hp.png"
import ibmLogo from "../assets/logo-ibm.png"
import microsoftLogo from "../assets/logo-microsoft.png"
import vectorLogo from "../assets/logo-vector-graphics.png"

const References = () => {
  return (
    <section>
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
            <img src={googleLogo} alt="Logo" />
            <img src={hpLogo} alt="Logo" />
            <img src={ibmLogo} alt="Logo" />
            <img src={microsoftLogo} alt="Logo" />
            <img src={vectorLogo} alt="Logo" />
        </div>
    </section>
  )
}

export default References