
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
  const {id,image,title,category,card_bg_color,card_text_color,card_category_bg_color} = item || {};
  return (
    <Link style={{backgroundColor: `${card_bg_color}`}} className='rounded-lg'>
      <div >
      <img src={image} alt={`image of ${category}`}  className='mb-5 w-full object-cover' />
      <dir className="px-4 pb-3">
        <span className='py-2 px-3 rounded text-base font-medium ' style={{color: `${card_text_color}`, backgroundColor: `${card_category_bg_color}`}}>{category}</span>
        <h2 className='mt-4 text-xl font-semibold' style={{color:`${card_text_color}`}}>{title}</h2>
      </dir>
      </div>
    </Link>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Card