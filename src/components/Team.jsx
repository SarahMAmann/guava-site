import { SparkleIcon } from "./SparkleIcon"
import Image from "next/Image"

const people = [
    {
      name: 'Aaron McGrean',
      role: 'Co-Founder',
      imageUrl:
        '/aaron1.jpg',
    },
    {
      name: 'Sarah Benson',
      role: 'Co-Founder',
      imageUrl:'/sarah.jpg'
    },
    {
      name: 'Mars',
      role: 'Mascot',
      imageUrl:'/mars.jpg'
    },
    {
      name: 'Sally',
      role: 'Chief Canine Officer',
      imageUrl:'/sally.jpg'
    },
  ]
  
  export function Team() {
    return (
      <div className="">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8 xl:grid-cols-2">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex">
              <SparkleIcon className="h-7 w-7 pr-2"/>Core team</h2>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p> */}
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name} className="list-none">
                <div className="flex items-center gap-x-6">
                  <Image className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" width={150} height={150} />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-lime-400">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  