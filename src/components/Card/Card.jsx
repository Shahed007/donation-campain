
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
  const {id,image,title,category,card_bg,text_color,category_bg} = item || {};
  return (
    <Link state={title} to={`/donationDetails/${id}`} style={{backgroundColor: `${card_bg}`}} className='rounded-lg group overflow-hidden shadow-md border-2 border-gray-200'>
      <div >
      <img src={image} alt={`image of ${category}`}  className='mb-5 w-full object-cover group-hover:scale-105 duration-150' />
      <dir className="px-4 pb-3">
        <span className='py-2 px-3 rounded text-base font-medium ' style={{color: `${text_color}`, backgroundColor: `${category_bg}`}}>{category}</span>
        <h2 className='mt-4 text-xl font-semibold' style={{color:`${text_color}`}}>{title}</h2>
      </dir>
      </div>
    </Link>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Card