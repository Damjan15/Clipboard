import devicesCover from "../assets/image-devices.png"

const AccessAnywhere = () => {
  return (
    <section>
        <div className="section-container">
            <h3>Access Clipboard Anywhere</h3>
            <p className="section-content mb-10">
                Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few clicks.
            </p>

            <img src={devicesCover} className="mx-auto" alt="mx-auto" />
        </div>
    </section>
  )
}

export default AccessAnywhere