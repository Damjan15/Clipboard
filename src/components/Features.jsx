import Item from "./Item"
import computerCover from "../assets/image-computer.png"

const Features = () => {
  const items = [
    {
      id: 1,
      title: "Quick Search",
      description: "Easily search your snippets by content, category, web address, application, and more. ",
    },
    {
      id: 2,
      title: "iCloud Sync",
      description: "Instantly saves and syncs snippets accross all your devices.",
    },
    {
      id: 3,
      title: "Completely History",
      description: "Retrieve any snippets from the first moment you started using the app.",
    },
  ]
  return (
    <section>
      <div className="section-container my-20">
        <div className="relative flex flex-col md:flex-row md:space-x-32">
          <div className="md:w-1/2">
            <img src={computerCover} className="md:absolute top-0 right-[50%]" alt="Computer Cover" />
          </div>

          {/* Items Container */}
          <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
            { items.map((item) => <Item title={item.title} description={item.description} key={item.id} />)}
          </div> 
        </div>
      </div>
    </section>
  )
}

export default Features