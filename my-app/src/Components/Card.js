import React from 'react'; // Import React

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className='cardContainer'>
      {data && data.map((curItem, index) => { // Check if data is not null before mapping
      if(!curItem.urlToImage){
        return null
      }
      else{
        return (
            <div className='card' key={index}> {/* Added key for better list rendering */}
              <img src={curItem.urlToImage} alt={curItem.title} /> {/* Added alt attribute for accessibility */}
              <div className='content'>
                <a className='title' href={curItem.url} target="_blank" rel="noopener noreferrer">{curItem.title}</a>
                <p>{curItem.description}</p>
                <button onClick={() => window.open(curItem.url, '_blank')}>Read More</button>
              </div>
            </div>
          );

      }
        
      })}
    </div>
  );
}

export default Card;
