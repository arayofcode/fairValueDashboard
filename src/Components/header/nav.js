import './nav.css'

const Nav = () => {
  return (
    <div className='navigation-bar'>
      <span className='navItem'>
        <a href='https://www.safe.security/' rel='noreferrer noopener' target='_blank'>
          <img src='/safe-logo.png' alt='Safe Logo' />
        </a>
      </span>
      <span className='navItem' id='introduction'>Threat Research Project </span>
    </div>
  )
}

export default Nav