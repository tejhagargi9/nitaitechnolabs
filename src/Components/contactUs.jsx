import React from "react";

function contactUs() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6 text-center">
        <h1 className="headerContact text-[4vw] font-bold text-[#28A9A9] ">
          Contact Us
        </h1>
      </div>
      <div className="contactContainer mt-[5vw]">
        <p className="descp text-3xl text-center text-muted-foreground">
          Thank you for reaching us, you will hear from us very shortly!
        </p>

        <form className="mt-9 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="first-name"
                className="block text-md font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                autoComplete="given-name"
                className="block shadow-xl p-2 w-full rounded-md border-gray-300 focus:border-primary focus:ring-0 sm:text-md h-12"
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="last-name"
                className="block text-md font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                autoComplete="family-name"
                className="block shadow-xl p-2 w-full rounded-md border-gray-300 focus:border-primary focus:ring-0 sm:text-sm h-12"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-md font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="block shadow-xl p-2 w-full rounded-md border-gray-300 focus:border-primary focus:ring-0 sm:text-sm h-12"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-md font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={8}
              className="block shadow-xl p-2 w-full rounded-md border-gray-300 focus:border-primary focus:ring-0 sm:text-sm"
              placeholder="Enter your message or comments"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex bg-[#28A9A9] justify-center rounded-md border border-transparent bg-primary text-teal-50 py-2 px-4 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default contactUs;
