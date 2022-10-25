import Color from "./Color";

const colors = [
  {
    hex: "Orange",
    name: "Dev Ops",
    text: `DevOps is the combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organizations using traditional software development and infrastructure management processes. This speed enables organizations to better serve their customers and compete more effectively in the market`
  },
  {
    hex: "Orange",
    name: "How Dev Ops Works",
    text: `Under a DevOps model, development and operations teams are no longer “siloed.” Sometimes, these two teams are merged into a single team where the engineers work across the entire application lifecycle, from development and test to deployment to operations, and develop a range of skills not limited to a single function.
    In some DevOps models, quality assurance and security teams may also become more tightly integrated with development and operations and throughout the application lifecycle. When security is the focus of everyone on a DevOps team, this is sometimes referred to as DevSecOps.
    These teams use practices to automate processes that historically have been manual and slow. They use a technology stack and tooling which help them operate and evolve applications quickly and reliably. These tools also help engineers independently accomplish tasks (for example, deploying code or provisioning infrastructure) that normally would have required help from other teams, and this further increases a team’s velocity.`
  },
  {
    hex: "Orange",
    name: "Benefits of DevOps",
    text: `Speed - Move at high velocity so you can innovate for customers faster, adapt to changing markets better, and grow more efficient at driving business results. The DevOps model enables your developers and operations teams to achieve these results. For example, microservices and continuous delivery let teams take ownership of services and then release updates to them quicker.`
  },
  {
    hex: "Orange",
    name: "Why DevOps Matters",
    text: `Software and the Internet have transformed the world and its industries, from shopping to entertainment to banking. Software no longer merely supports a business; rather it becomes an integral component of every part of a business. Companies interact with their customers through software delivered as online services or applications and on all sorts of devices. They also use software to increase operational efficiencies by transforming every part of the value chain, such as logistics, communications, and operations. In a similar way that physical goods companies transformed how they design, build, and deliver products using industrial automation throughout the 20th century, companies in today’s world must transform how they build and deliver software.`
  }
];

export default function ColorRenderer() {
  return (
    <div className="colorDisplay">
      {colors.map((colors) => (
        <Color
          key={colors.hex}
          hex={colors.hex}
          name={colors.name}
          text={colors.text}
          button={
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://aws.amazon.com/devops/what-is-devops/";
              }}
            >
              {" "}
              Learn More{" "}
            </button>
          }
        />
      ))}
    </div>
  );
}
