// import SectionTitle from "../Common/SectionTitle";

// const LocationMap = () => {
//   return (
//     <section id="location" className="py-16 md:py-20 lg:py-28">
//       <div className="container">
//         <SectionTitle
//           title="Our Location"
//           paragraph="Visit us at our office or reach out to us using the details below. We are here to serve you."
//           center
//         />
//         <div className="mt-8">
//           <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509491!2d-122.41941538468169!3d37.77492977975825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2f749d1f%3A0x8e7e1f7d8aaf8d99!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1635908231485!5m2!1sen!2sus"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen={true}
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Google Maps Location"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LocationMap;

import React from 'react';
import SectionTitle from '../Common/SectionTitle';

interface LocationInfo {
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
}

interface LocationMapProps {
  locationInfo: LocationInfo;
}

const LocationMap: React.FC<LocationMapProps> = ({ 
  locationInfo = {
    address: "123 Business Street",
    city: "New York, NY 10001",
    country: "United States",
    phone: "+1 (555) 123-4567",
    email: "contact@yourcompany.com"
  }
}) => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50">
      <div className="container">
        <SectionTitle
          title="Our Location"
          paragraph="Visit Our Office or Get in Touch with Us"
          center
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Map Container */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden border-2 border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596974663!2d-74.25986548595792!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1656241513650!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Visit Our Office
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>{locationInfo.address}</p>
                  <p>{locationInfo.city}</p>
                  <p>{locationInfo.country}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Contact Information
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-medium">Phone: </span>
                    <a 
                      href={`tel:${locationInfo.phone}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {locationInfo.phone}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Email: </span>
                    <a 
                      href={`mailto:${locationInfo.email}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {locationInfo.email}
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;