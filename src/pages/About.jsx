import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the my differnt projects.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Created By: <span className='text-white'>Jigar Patel</span>
      </p>
      <Link to='/' className='btn btn-primary btn mt-5'>
        <FaHome className='mr-2' />
        Back To Home
      </Link>
    </>
  )
}

export default About
