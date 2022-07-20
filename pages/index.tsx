import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import DaoCard from '../components/dao-card'
import { useDashBoardContext } from '../context/state'
import { DAOScheme } from '../lib/types'

const Home: NextPage<{daoList: DAOScheme[]}> = (props) => {

  const { daoList } = props;
  
  //const { msg } = useDashBoardContext();
  return (
    <div className="py-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {
          daoList.map((dao, i) => (
            <DaoCard
              key={i}
              daoItem={dao}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps() {

  const response = await fetch('http://localhost:3000/api/dao/all')
 
  const data = await response.json();
  console.log(data)
  if (!data) {
    return { props: {
      daoList: []
    }}
  } else {
    return {
      props: {
        daoList: data
      }
    }
  }

}