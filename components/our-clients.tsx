import React from "react";

const clients = [
  { id: 1, name: "Client 1", logo: "logo.png" },
  { id: 2, name: "Client 2", logo: "logo.png" },
  { id: 3, name: "Client 3", logo: "logo-dark.png" },
  { id: 4, name: "Client 4", logo: "logo.png" },
  { id: 5, name: "Client 5", logo: "logo.png" },
  // Add more clients as needed
];

const OurClients: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex space-x-16 justify-center bg-white p-4 container mx-auto">
        {clients.map((client) => (
          <div key={client.id} className="flex items-center  h-10">
            <img
              src={client.logo}
              alt={client.name}
              className="h-full filter grayscale opacity-50 hover:opacity-100 fill-destructive "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
