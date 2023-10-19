const About = () => {
  return (
    <>
      <div className='flex flex-wrap justify-center items-center gap-2 sm:gap-x-6'>
        <h1 className='text-4xl font-bold leading-none tracking-tight'>
          About
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <h1 className='stat-title text-primary-content text-3xl  uppercase font-bold tracking-wide'>
              Comfy
            </h1>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        That night, driving back to the hotel, was an out-of-body experience.
        You’re numb. You can’t really process what just happened. But we looked
        at each other knowing that we’d not only survived The Tank, but that
        we’d realized our own version of the fabled American Dream. We’re just a
        couple of brothers from the desert who had a crazy idea. The only
        difference between us and so many others who have great ideas is that
        wedid somethingabout it. We took action. We didn’t take no for an
        answer. And getting back to where this story started - to whyyoushould
        consider doing the same things we’ve done - we remembered those three
        simple words our mother always told us: “Why not you?” Yes, mom:Why not
        us, indeed. We hear you. We’ve heard you for all these years. And after
        hearing our story we hope it’s you who will now be asking yourself…’Why
        not me?’
      </p>
    </>
  );
};
export default About;
