import React from 'react'
import Title from './Title'
import { Service } from '../data'
const Services = () => {

  return (
    <React.Fragment>
        <section className="section services" id="services">
            <Title title="our" subTitle="services" />
            
            <div className="section-center services-center">
                {
                    Service.map((services) =>{
                        const { id, icon, title, text } = services;
                        return(
                            <article className="service" key={id}>
                                <span className="service-icon"><i className={icon}></i></span>
                                <div className="service-info">
                                    <h4 className="service-title">{title}</h4>
                                    <p className="service-text">
                                    {text}
                                    </p>
                                </div>
                            </article>
                        )
                    })
                }
      </div>
    </section>
    </React.Fragment>
  )
}

export default Services