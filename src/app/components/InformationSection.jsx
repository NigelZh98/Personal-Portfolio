import React from 'react';

const ResumeSection = () => {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Education Section */}
        <div className='text-black'>
          <h2 className="text-2xl font-bold  mb-2">Education</h2>
          <hr className="mt-2" />
          <ul>
            <li className="mb-2">
              <p className="font-semibold">New Jersey Institute of Technology (Newark, NJ)</p>
              <p>Bachelor of Science – Information System | 01/2023 – Present</p>
            </li>
            <li>
              <p className="font-semibold">Middlesex County College (Edison, NJ)</p>
              <p>AAS Degree – Computer and Information System | 01/2021 – 12/2022</p>
            </li>
          </ul>
        </div>

        {/* Experience Section */}
        <div className='text-black'>
          <h2 className="text-2xl font-bold mb-2">Experience</h2>
          <hr className="mt-2" />

          <ul>
            <li className="mb-2">
              <p className="font-semibold">Lyft/Doordash/Instacart (New Brunswick, NJ)</p>
              <p>Lyft Driver/Doordash/Shopper | 10/2019 – Present</p>
              <ul className="list-disc ml-5">
                <li>Communicate with passengers and transport them to and from their desired destinations</li>
                <li>Maintain vehicle cleanliness and in excellent condition</li>
                <li>Resolve any customer problematic issues</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Paris Baguette (West New York, NJ)</p>
              <p>Baker & Cashier | 05/2023 – Present</p>
              <ul className="list-disc ml-5">
                <li>Assisted with the flow of guests by taking orders</li>
                <li>Maintained a cheerful, friendly attitude towards customers</li>
                <li>Accompanied chefs regularly and ensured availability of food supplies</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className='text-black'>
          <h2 className="text-2xl font-bold mb-2">Skills</h2>
          <hr className="mt-2" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold  mb-2">Technical</h3>
              <ul className="list-none space-y-1">
                <li>Java</li>
                <li>Python</li>
                <li>HTML</li>
                <li>PHP</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold  mb-2">Organizational</h3>
              <ul className="list-none space-y-1">
                <li>Organization</li>
                <li>Time Management</li>
                <li>Customer Service</li>
                <li>Teamwork</li>
                <li>Problem Solving</li>
                <li>Negotiation</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResumeSection;
