import React from 'react'

const TestimonialsContent = () => {
  const testimonials = [
    {
      quote:
        '"We promise our clients targeted, quality links. They care about bang for buck—but they also scrutinize and ask questions. I can defend Loganix\'s work—and because they deliver, so can we."',
      author: 'Jerry Zheng - Senior SEO Specialist at OneLocal',
    },
    {
      quote:
        '"Our agency relies on Loganix to deliver links to clients. We love that Loganix presents you a list of the sites ahead of time, so we\'re able to evaluate each and make sure it\'s a perfect fit for our clients."',
      author: 'Ryan Stewart, Founder, The Blueprint & Webris',
    },
  ];

  return (
   
    <div className="testimonials-content">
      {/* Display testimonials dynamically */}
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <p>{testimonial.quote}</p>
          <p className="author">{testimonial.author}</p>
        </div>
      ))}
    </div>
  )
}

export default TestimonialsContent