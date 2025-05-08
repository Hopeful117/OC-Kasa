import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'


export default function StarRating ({rating}){
    const maxStars = 5;
    return(
        <div className="rating">
        {[...Array(maxStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={solidStar}
          style={{ color: index < rating ? '#ff6060' : '#E3E3E3', marginRight: '5px' }}
          className="star-icon"
        />
      ))}
            
        </div>
    )
}