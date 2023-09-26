import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const DonationCard = ({donate}) => {
  const {id,image,title,card_bg,text_color,button_bg,category_bg, category, price} = donate || {};
  return (
    <div className='h-52 sm:h-full rounded-lg overflow-hidden flex gap-6' style={{backgroundColor: `${card_bg}`}}>
      <div className='w-2/5'><img className='h-full w-full rounded-l-lg scale-105' src={image} alt={`image of ${title}`} /></div>
      <div className='py-3 sm:py-6 flex-1 flex flex-col'>
        <h4><span className='text-sm py-1 px-[10px] rounded' style={{backgroundColor: `${category_bg}`, color: `${text_color}`}}>{category}</span></h4>
        <h2 className='text-xl sm:text-2xl font-semibold grow text-[#0B0B0B] mt-3'>{title}</h2>
        <h3 className='mt-2 text-base font-semibold mb-4 md:mb-7' style={{color: `${text_color}`}}>${price}</h3>
        <Link to={`/donationDetails/${id}`} state={title}>
        <button className='px-6 py-3 text-base sm:text-xl font-semibold text-white rounded active:scale-95' style={{backgroundColor: `${button_bg}`}}>View Details</button>
        </Link>
      </div>
    </div>
  )
}

DonationCard.propTypes = {
  donate: PropTypes.object.isRequired,
}

export default DonationCard