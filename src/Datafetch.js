import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

function Datafetch() {
    const [cards, setCards] = useState([]);
    //const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        axios
       .get("https://www.sbir.gov/api/solicitations.json?keyword=sbir")
        
       .then((res) => {
            console.log(res)
            setCards(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    })
    //need to figure out how to add favorite state to the existing item or card


    const makeFav = (index) => {
        console.log("id prop", index);
    
        const allItems = [...cards];
        const itemIndex = allItems.findIndex((item) => item.index === index);
        allItems[itemIndex].fav = !allItems[itemIndex].fav;
        setCards(allItems);
        console.log("itemIndex", itemIndex);
      };
    
    return (
        <div className="App">
            <h1>Grant Details</h1>
            <div>
            
        </div>

        <div className="cards">
        {cards &&
          cards.map((card, index) => {
            const releasedDate = new Date(card.release_date).toDateString();
            var fav = false;
            

            return (
              <div className="card" key={index}>
                <h2>Card {index + 1}</h2>
                <h3> {card.solicitation_title} </h3>
                <div className="details">
                  <p> Branch: {card.branch} </p>
                  <p> Solicitation Number: {card.solicitation_number}</p>
                  <p> Released Date: {releasedDate}</p>
                  <button onClick={() => makeFav(card.index)}>fav</button>
                </div>   
              </div>
            );
          })}
      </div>
      
    </div>

  );
}

export default Datafetch;


/*useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              "https://www.sbir.gov/api/solicitations.json?keyword=sbir"
            );
            const data = await response.json();
            console.log(data);
            setCards(response.data);
          } catch (error) {
            console.log(error.message);
          }
        };
        fetchData();
    }, []);
    */
   /*const apiURL = "https://www.sbir.gov/api/solicitations.json?keyword=sbir";

    const fetchData = async () => {
        const response = await axios.get(apiURL)

        setCards(response.data)
    }*/
    {/* <IconButton aria-label="add to favorites">
                   <FavoriteIcon />
                 </IconButton> */}
                {/* <div> 
                    {favorites.includes(index+1) ? (
                        <span class="material-icons" onClick={this.favoriteClick}>
                        favorite
                        </span>
                    ) : (
                        <span class="material-icons">
                        favorite_border
                        </span>
                    ) }

                </div> */}