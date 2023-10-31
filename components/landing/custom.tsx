const Custom = () => {
  return (
    <div className="">
      <div className="content py-24">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-5">
              Bespoke Web Development Solutions
            </h2>
            <p className="text-lg lg:text-2xl mx-auto w-full md:w-8/12 text-gray-500 leading-7">
              Elevate your online presence with our custom web development
              services. Tailored to your unique needs, we craft dynamic,
              user-centric websites that drive success.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="p-6">
              <h3 className="text-xl lg:text-4xl font-medium tracking-tight mb-5 text-black">
                Tailored Management Web App Development
              </h3>
              <p className="text-gray-500 text-lg">
                Discover tailored solutions with our management web app development. We craft efficient, scalable, and user-friendly apps to streamline operations, enhance decision-making, and empower your management processes for lasting success.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="p-6">
              <img
                className="rounded-3xl h-96 w-full object-cover"
                src="https://cdn.dribbble.com/userupload/8200345/file/original-15317cef5eb44f8524f3c5dc723d8e61.png?resize=2048x1536"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom;
