import {Link} from "react-router-dom"
const About = () => {
  return (
    <div className="pt-24 h-full w-full">
      <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="bg-zinc-100 rounded-xl p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-black md:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>

          <p className="hidden text-black/90 sm:mt-4 sm:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
            sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
            volutpat quisque ut interdum tincidunt duis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
            sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
            volutpat quisque ut interdum tincidunt duis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
            sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
            volutpat quisque ut interdum tincidunt duis.
          </p>

          <div className="mt-4 md:mt-8">
            <Link
              to="/pricing"
              className="inline-block btn2 rounded border  px-12 py-3 text-sm font-medium transition  "
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2  gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
          className="h-40 rounded-xl w-full object-cover sm:h-56 md:h-full"
        />

        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="h-40 rounded-xl w-full object-cover sm:h-56 md:h-full"
        />
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About
