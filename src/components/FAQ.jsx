import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { SparkleIcon } from "./SparkleIcon"

// const faqs = [
//   {
//     question: "Can you help me build my DAO?",
//     answer:
//       "Yes! Help with DAOs is probably our most common request, and we're happy to get your project rolling. We may start off with a consultation period to help you explore and identify the best tools and technologies to use for your organization.",
//   },
//   {
//     question: "How much do you cost?",
//     answer:
//       "Every project is different, so please drop us a message and we'll get you an estimate ASAP. The more detail you can provide, the more quickly we can get back to you!",
//   },
//   // More questions...
// ]

export function FAQ() {
  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white flex pb-5">
          <SparkleIcon className="h-7 w-7 pr-2"/>Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {/* {faqs.map((faq) => ( */}
              <Disclosure as="div" key={1} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">Can you help me build my DAO?</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">Yes! Help with DAOs is probably our most common request, 
                      and we're happy to get your project rolling. We may start off with a consultation period to help you explore 
                      and identify the best tools and technologies to use for your organization.
                      In the meantime, check out our <a target="_blank" href="https://app.guavatech.io/">Web3 Tool Explorer</a> app to 
                      get you started.</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" key={2} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">How much do you cost?</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">Every project is different, so please drop us a message and we'll get you an estimate ASAP. The more detail you can provide, the more quickly we can get back to you!</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            {/* ))} */}
          </dl>
        </div>
      </div>
    </div>
  )
}
