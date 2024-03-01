import {
  FaGithub,
  FaFilePdf,
  FaLinkedinIn,
} from "react-icons/fa";

function App() {
  return (
      <div className="py-4 m-auto max-w-4xl">
        <main className="py-36">
          <div className="flex flex-row gap-x-5">
            <div className="flex-col">
              <div>
                <h1 className="text-6xl font-medium">
                  Karen Hong
                </h1><br></br>
              </div>
              <p className="text-lg font-medium">
                I’m a full-stack developer with 3+ years of industry experience working with large-scale distributed systems. I am currently an SDE II at Amazon Web Services on the Simple Notification Service team. 
              </p>
              <div className="flex py-8 font-bold">
                <a href="/KarenHongResume.pdf" className="button">
                  <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#4A314D] text-[#fff]  hover:text-[#4A314D] hover:bg-[#fff] m-2 p-2">
                    <FaFilePdf /> Resume
                  </button>
                </a>
                <a href="https://github.com/karenhong" className="button">
                  <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#10151a] text-[#fff] hover:text-[#10151a] hover:bg-[#fff] m-2 p-2">
                    <FaGithub /> GitHub
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/karen-z-hong/" className="button">
                  <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#0072b1] text-[#fff]  hover:text-[#0072b1] hover:bg-[#fff] m-2 p-2">
                    <FaLinkedinIn />
                    LinkedIn
                  </button>
                </a>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-medium">Featured Work</h1>
          <ul>
          <li>
            <a href="https://aws.amazon.com/blogs/compute/token-based-authentication-for-ios-applications-with-amazon-sns/" >
              <h3 className="text-l font-medium">Blog Post for Amazon SNS token-based authentication</h3>
            </a>
            <p>While I was leading the project to launch SNS support for token-based authentication for Apple Push Notification service (APNs) endpoints, I co-wrote this blog post to help customers get set up with testing.</p>
          </li>
          <li>
            <a href="https://github.com/karenhong/prusti-dev/commits/external_specs/" >
              <h3 className="text-l font-medium">Code Contributions to the Prusti Project</h3>
            </a>
            <p>As an undergraduate research assistant, I made some contributions to the Prusti Project (a code verification tool for Rust programs). I worked on adding a mechanism for adding specifications on externally defined methods and top-level functions.</p>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1WcgqcMB7KcftKIWVMPQI9b-_r8M8xQkR/view?usp=sharing" >
              <h3 className="text-l font-medium">Trailer to a cool game I made - Dragon Adventure Bonanza!</h3>
            </a>
            <p>I created Dragon Adventure Bonanza (DAB) as a part of a video game programming course where we worked in groups, building everything from the game engine and rendering system to a fully featured multi-level platform game. DAB was elected as the best in the class by an industry panel and most fun by popular vote!</p>
          </li>
          <li>
            <a href="https://ubcsailing.org/" >
              <h3 className="text-l font-medium">What I love to do in my free time</h3>
            </a>
            <p>I like to spend most of my free time sailing and I also spent a couple years volunteering in my sailing club leadership and also built and maintained their IT systems. I re-designed and launched their website in 2021!</p>
          </li>
          </ul>  
        </main>
      </div>
  );
}

export default App;
