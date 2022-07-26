import Image from "next/image"
import Link from "next/link"
import { DAOScheme } from "../lib/types"

export default function DaoCard({ daoItem }: { daoItem: DAOScheme }) {
  return (

    <div className="flex flex-col items-center  gap-4 py-4 hover:border-gray-800 justify-center w-48 bg-white pt-4 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/${daoItem.contract}`}>
        <a>
          <Image className="rounded-t-lg" src={daoItem.logo} alt="" height={64} width={64} />
        </a>
      </Link>
      <div className="flex flex-col items-center">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {daoItem.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {daoItem.symbol}
        </p>
        <Link href={`/${daoItem.contract}`}>
          <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
        </Link>
      </div>
    </div>

  )
}