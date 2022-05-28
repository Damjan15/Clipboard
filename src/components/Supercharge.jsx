import BlacklistItem from "./BlacklistItem"
import blacklistIcon from "../assets/icon-blacklist.svg"
import textIcon from "../assets/icon-text.svg"
import previewIcon from "../assets/icon-preview.svg"


const Supercharge = () => {
    const items = [
        {
            id: 1,
            title: "Create Blacklists",
            description: "Easily search your snippets by content, category, web address application, and more",
            image: blacklistIcon
        },
        {
            id: 2,
            title: "Plain Text Snippets",
            description: "Remove unwanted formatting from copied text for a consistent look",
            image: textIcon
        },
        {
            id: 3,
            title: "Sneak Preview",
            description: "Quick preview of all snippets on your Clipboard for easy access",
            image: previewIcon
        },
    ]
  return (
    <section>
        <div className="section-container my-20">
            <h3>Supercharge your workflow</h3>
            <p className="section-content text-xl mb-16">We've got the tools to boost your productivity.</p>
        </div>

        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            { items.map((item) => <BlacklistItem title={item.title} description={item.description} image={item.image} key={item.id} />)}
        </div>
    </section>
  )
}

export default Supercharge