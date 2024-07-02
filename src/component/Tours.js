import React from 'react'
import Title from './Title'
import { Tour } from '../data';

const Tours = () => {
  return (
    <React.Fragment>
         <section className="section" id="tours">
            <Title title="featured" subTitle="tours" />
      

      <div className="section-center featured-center">
        {Tour.map((tour)=>{
            const {id, image, date, title, info, location, duration, cost} = tour;
            return(
                <article className="tour-card" key={id}>
                    <div className="tour-img-container">
                        <img src={image} className="tour-img" alt="" />
                        <p className="tour-date">{date}</p>
                    </div>
                    <div className="tour-info">
                        <div className="tour-title">
                        <h4>{title}</h4>
                        </div>
                        <p>
                       {info}
                        </p>
                        <div className="tour-footer">
                        <p>
                            <span><i className="fas fa-map"></i></span> {location}
                        </p>
                        <p>{duration} days</p>
                        <p>from ${cost}</p>
                        </div>
                    </div>
                </article>
            )
        })}

       
      </div>
    </section>
    </React.Fragment>
  )
}

export default Tours