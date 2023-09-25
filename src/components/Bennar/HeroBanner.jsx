import PropTypes from 'prop-types';

const HeroBanner = ({handleSubmit,handleOnChange}) => {
  return (
    <div className="max-w-3xl mx-auto px-3 flex flex-col justify-center items-center h-full">
    <h1 className="font-bold text-4xl  text-[#0B0B0B] text-center mb-10">I Grow By Helping People In Need</h1>
  
      <form autoCapitalize="off" onSubmit={handleSubmit}  className="flex w-full justify-center">
      <input  defaultValue={''} onChange={handleOnChange} name="search" className="w-1/2  px-4 py-2 border-2 shadow-md shadow-[#FF444A]/30 border-[#FF444A] rounded-l-lg" placeholder="Search hear" type="text" />
      <input className="px-6 py-3 bg-[#FF444A] rounded-r-lg text-white text-base font-semibold"  type="submit" value="Search" />
      </form>
 
    </div>
  )
}

HeroBanner.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
}

export default HeroBanner