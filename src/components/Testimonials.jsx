import Image from "next/image"

export function Testimonials() {
    return (
      <section className="bg-transparent py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
              {/* <img className="h-12 self-start" src="https://tailwindui.com/img/logos/tuple-logo-white.svg" alt="" /> */}
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-white">
                  <p>
                    “They [guava team] are extremely informative... Definitely going to be my go to.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <Image
                    className="h-14 w-14 rounded-full bg-gray-800"
                    src="/astro.jpg"
                    alt=""
                    height={150}
                    width={150}
                  />
                  <div className="text-base">
                    <div className="font-semibold text-white">Justin Bottillier</div>
                    <div className="mt-1 text-gray-400">CPA</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
              {/* <img className="h-12 self-start" src="https://tailwindui.com/img/logos/reform-logo-white.svg" alt="" /> */}
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-white">
                  <p>
                    “The team is extremely knowledgeable - it&apos;s obvious they live and breathe Web3. 
                    If you have any, ANY, ideas that might need some Web3 tech, they are the ones to talk to. 
                    Thank you so much for the time and wisdom!”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <Image
                    className="h-14 w-14 rounded-full bg-gray-800"
                    src="/character.jpg"
                    alt=""
                    height={200}
                    width={200}
                  />
                  <div className="text-base">
                    <div className="font-semibold text-white">Rick Plautz</div>
                    <div className="mt-1 text-gray-400">Motion Designer</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    )
  }
  