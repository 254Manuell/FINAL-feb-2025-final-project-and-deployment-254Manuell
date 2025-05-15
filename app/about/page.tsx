import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "About Us | Plugins Hub",
  description: "Learn about Plugins Hub and our mission to provide high-quality developer tools",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">About Plugins Hub</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-4">
              Plugins Hub was founded in 2020 with a simple mission: to create a marketplace where developers can find
              high-quality, reliable plugins to enhance their projects.
            </p>
            <p className="text-lg mb-4">
              Our team of experienced developers carefully reviews each plugin before it's listed on our platform,
              ensuring that only the best tools make it to our marketplace.
            </p>
            <p className="text-lg mb-6">
              Whether you're building a website, mobile app, or enterprise software, we have plugins that can help you
              save time and add powerful functionality to your projects.
            </p>
            <Link href="/shop">
              <Button size="lg">Browse Our Plugins</Button>
            </Link>
          </div>
          <div className="bg-slate-100 rounded-lg p-8 flex items-center justify-center">
            <Image
              src="/images/plugins-hub-logo.png"
              alt="About Plugins Hub"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Quality",
              description:
                "We believe in quality over quantity. Every plugin on our platform undergoes rigorous testing to ensure it meets our high standards.",
            },
            {
              title: "Innovation",
              description:
                "We encourage developers to push the boundaries and create innovative solutions that solve real-world problems.",
            },
            {
              title: "Community",
              description:
                "We foster a supportive community where developers can share ideas, collaborate, and help each other grow.",
            },
            {
              title: "Accessibility",
              description:
                "We strive to make our plugins accessible to developers of all skill levels, with clear documentation and support.",
            },
            {
              title: "Transparency",
              description:
                "We believe in being transparent about our processes, pricing, and the capabilities of our plugins.",
            },
            {
              title: "Continuous Improvement",
              description:
                "We're always looking for ways to improve our plugins and platform based on user feedback and emerging technologies.",
            },
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Meet Our Founder</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-sm border">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="rounded-lg overflow-hidden w-64 h-auto">
              <Image
                src="/images/emmanuel-ngunnzi.jpeg"
                alt="Emmanuel Ngunnzi"
                width={400}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold mb-2">Emmanuel Ngunnzi</h3>
            <p className="text-slate-600 font-medium mb-4">Founder, Developer & CEO</p>
            <p className="text-lg mb-4">
              Emmanuel founded Plugins Hub with a vision to create a marketplace that connects developers with
              high-quality tools to enhance their projects. With a strong background in software development and a
              passion for creating efficient solutions, he has led the company from its inception to becoming a trusted
              resource for developers across Kenya and beyond.
            </p>
            <p className="text-lg mb-4">
              His expertise in plugin development and commitment to quality has established Plugins Hub as a platform
              known for its reliable, well-documented, and innovative developer tools.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://linkedin.com/in/emmanuel-ngunnzi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/emmanuel-ngunnzi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/emmanuel_ngunnzi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 rounded-lg p-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Join Our Developer Program</h2>
          <p className="text-lg text-slate-600 mb-6">
            Are you a developer with a great plugin idea? Join our developer program and start selling your plugins on
            our platform.
          </p>
          <Button size="lg">Apply Now</Button>
        </div>
      </section>
    </div>
  )
}
