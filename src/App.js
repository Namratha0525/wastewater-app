import { useState } from 'react';

export default function WastewaterTreatmentApp() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  
  // Component details with more information
  const components = {
    barScreen: {
      title: "Bar Screen",
      description: "The first physical treatment step where large objects and debris are removed from incoming wastewater using a screen with metal bars. This prevents damage to downstream equipment and improves treatment efficiency.",
      youtubeLink: "https://www.youtube.com/results?search_query=wastewater+treatment+bar+screen",
      additionalInfo: "Bar screens are crucial in preventing blockages in pumps and other machinery. They are usually followed by a washing system to clean the collected debris."
    },
    gritTank: {
      title: "Grit Tank",
      description: "Removes heavy inorganic materials like sand, gravel, and other grit particles through sedimentation. This prevents abrasion and excessive wear on mechanical equipment and reduces deposits in processing units.",
      youtubeLink: "https://www.youtube.com/results?search_query=wastewater+treatment+grit+chamber",
      additionalInfo: "Proper grit removal ensures smooth operation of pumps and other sensitive equipment. Grit chambers are typically designed with a vortex motion to allow for effective sedimentation."
    },
    settlingTank: {
      title: "Settling Tank",
      description: "Also known as primary clarifier, this tank allows suspended solids to settle to the bottom as primary sludge. This reduces the organic load on subsequent biological treatment processes.",
      youtubeLink: "https://www.youtube.com/results?search_query=wastewater+treatment+primary+settling+tank",
      additionalInfo: "In this stage, gravity aids in separating the solid matter from the wastewater. It is a key step in reducing the burden on the biological treatment system."
    },
    digester: {
      title: "Digester",
      description: "Processes organic sludge through anaerobic digestion. Bacteria break down organic matter in the absence of oxygen, producing biogas (methane) that can be captured as an energy source.",
      youtubeLink: "https://www.youtube.com/results?search_query=wastewater+treatment+anaerobic+digester",
      additionalInfo: "Anaerobic digesters are typically used for biosolid stabilization, and the biogas produced can be used as a renewable energy source."
    },
    aerationTank: {
      title: "Aeration Tank",
      description: "The heart of the biological treatment process. Air is pumped through the wastewater to support aerobic bacteria that consume dissolved organic matter, converting it to cell mass, CO2, and water.",
      youtubeLink: "https://www.youtube.com/results?search_query=wastewater+treatment+aeration+tank",
      additionalInfo: "The aeration process promotes the growth of aerobic microorganisms that degrade organic pollutants, essential for wastewater treatment."
    },
    clarifier: {
      title: "Clarifier",
      description: "Also known as secondary clarifier, separates the biological floc (activated sludge) from the treated water. Clear water flows out while the sludge settles at the bottom and is either recycled or sent for further processing.",
      youtubeLink: "https://www.youtube.com/results?search_query=wastewater+treatment+secondary+clarifier",
      additionalInfo: "This stage provides the final separation of solid matter from the liquid effluent before discharge or further treatment."
    },
    disinfectant: {
      title: "Disinfectant",
      description: "Kills or inactivates remaining pathogens in the treated water before final discharge. Common methods include chlorination, UV irradiation, or ozonation.",
      youtubeLink: "https://www.youtube.com/results?search_query=wastewater+treatment+disinfection",
      additionalInfo: "Disinfection is the final barrier to ensure that the effluent is free from harmful pathogens before being released into the environment."
    },
    sandDryingBed: {
      title: "Sand Drying Bed",
      description: "A simple method for dewatering sludge. The sludge is spread over a layer of sand and gravel, allowing water to drain through while solids remain on top and dry through evaporation.",
      youtubeLink: "https://www.youtube.com/results?search_query=wastewater+treatment+sand+drying+beds",
      additionalInfo: "Sand drying beds are often used for small-scale or decentralized wastewater treatment facilities due to their low cost."
    },
    compost: {
      title: "Compost",
      description: "The final product from treated and dried sludge, which can be used as soil conditioner or fertilizer in agriculture, contributing to a circular economy approach to waste management.",
      youtubeLink: "https://www.youtube.com/results?search_query=biosolids+compost+wastewater",
      additionalInfo: "Composting turns biosolids into a valuable resource, closing the loop in wastewater treatment by providing nutrient-rich compost for agricultural use."
    }
  };

  // Sustainable development goals related to this project
  const sustainableGoals = [
    {
      goal: "Clean Water and Sanitation (SDG 6)",
      description: "Ensures availability and sustainable management of water and sanitation for all by treating wastewater effectively."
    },
    {
      goal: "Sustainable Cities and Communities (SDG 11)",
      description: "Makes human settlements inclusive, safe, resilient, and sustainable through proper waste management."
    },
    {
      goal: "Responsible Consumption and Production (SDG 12)",
      description: "Ensures sustainable consumption and production patterns by reclaiming resources from waste."
    },
    {
      goal: "Climate Action (SDG 13)",
      description: "Combats climate change by reducing methane emissions from untreated sewage and capturing biogas as a renewable energy source."
    },
    {
      goal: "Good Health and Well-being (SDG 3)",
      description: "Ensure healthy lives and promote well-being for all at all ages through improved sanitation."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-700 text-white p-6">
        <h1 className="text-3xl font-bold">Wastewater Treatment Prototype</h1>
        <p className="mt-2">Interactive Exploration of Sustainable Water Treatment Technology</p>
      </header>

      <main className="flex-grow p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Prototype Overview</h2>
            <div className="relative">
              {/* Prototype Diagram - Based on the hand-drawn image */}
              <div className="bg-gray-200 p-4 rounded-lg mb-4 h-96 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 1000 500">
                  {/* Bar Screen */}
                  <rect 
                    x="50" y="150" width="80" height="100" 
                    fill={selectedComponent === 'barScreen' ? "#93c5fd" : "#dbeafe"} 
                    stroke="#1d4ed8" strokeWidth="2"
                    onClick={() => setSelectedComponent('barScreen')}
                    className="cursor-pointer"
                  />
                  <text x="90" y="205" textAnchor="middle" fill="#1e3a8a" fontSize="14">Bar Screen</text>
                  
                  {/* Flow line with arrow */}
                  <line x1="130" y1="200" x2="170" y2="200" stroke="#1d4ed8" strokeWidth="3" />
                  <polygon points="170,200 180,195 180,205" fill="#1d4ed8" />

                  {/* Grit Tank */}
                  <rect 
                    x="180" y="150" width="100" height="100" 
                    fill={selectedComponent === 'gritTank' ? "#93c5fd" : "#add8e6"} 
                    stroke="#1d4ed8" strokeWidth="2"
                    onClick={() => setSelectedComponent('gritTank')}
                    className="cursor-pointer"
                  />
                  <text x="230" y="205" textAnchor="middle" fill="#1e3a8a" fontSize="14">Grit Tank</text>
                  
                  {/* Flow line with arrow */}
                  <line x1="280" y1="200" x2="320" y2="200" stroke="#1d4ed8" strokeWidth="3" />
                  <polygon points="320,200 330,195 330,205" fill="#1d4ed8" />
                  
                  {/* Settling Tank */}
                  <rect 
                    x="330" y="150" width="100" height="100" 
                    fill={selectedComponent === 'settlingTank' ? "#93c5fd" : "#add8e6"} 
                    stroke="#1d4ed8" strokeWidth="2"
                    onClick={() => setSelectedComponent('settlingTank')}
                    className="cursor-pointer"
                  />
                  <text x="380" y="205" textAnchor="middle" fill="#1e3a8a" fontSize="14">Settling Tank</text>
                  
                  {/* Flow lines */}
                  <line x1="430" y1="200" x2="470" y2="200" stroke="#1d4ed8" strokeWidth="3" />
                  <polygon points="470,200 480,195 480,205" fill="#1d4ed8" />
                  
                  <line x1="380" y1="250" x2="380" y2="320" stroke="#1d4ed8" strokeWidth="3" />
                  <polygon points="380,320 375,330 385,330" fill="#1d4ed8" />
                  
                  {/* Digester */}
                  <rect 
                    x="330" y="330" width="100" height="100" 
                    fill={selectedComponent === 'digester' ? "#93c5fd" : "#dbeafe"} 
                    stroke="#1d4ed8" strokeWidth="2"
                    onClick={() => setSelectedComponent('digester')}
                    className="cursor-pointer"
                  />
                  <text x="380" y="380" textAnchor="middle" fill="#1e3a8a" fontSize="14">Digester</text>
                  
                  {/* Flow to Sand Drying Bed */}
                  <line x1="380" y1="430" x2="380" y2="470" stroke="#1d4ed8" strokeWidth="3" />
                  <polygon points="380,470 375,480 385,480" fill="#1d4ed8" />
                  
                  {/* Aeration Tank */}
                  <rect 
                    x="480" y="150" width="100" height="100" 
                    fill={selectedComponent === 'aerationTank' ? "#93c5fd" : "#add8e6"} 
                    stroke="#1d4ed8" strokeWidth="2"
                    onClick={() => setSelectedComponent('aerationTank')}
                    className="cursor-pointer"
                  />
                  <text x="530" y="205" textAnchor="middle" fill="#1e3a8a" fontSize="14">Aeration Tank</text>
                  
                  {/* Flow line with arrow */}
                  <line x1="580" y1="200" x2="620" y2="200" stroke="#1d4ed8" strokeWidth="3" />
                  <polygon points="620,200 630,195 630,205" fill="#1d4ed8" />
                  
                  {/* Clarifier */}
                  <rect 
                    x="630" y="150" width="100" height="100" 
                    fill={selectedComponent === 'clarifier' ? "#93c5fd" : "#add8e6"} 
                    stroke="#1d4ed8" strokeWidth="2"
                    onClick={() => setSelectedComponent('clarifier')}
                    className="cursor-pointer"
                  />
                  <text x="680" y="205" textAnchor="middle" fill="#1e3a8a" fontSize="14">Clarifier</text>
                  
                  {/* Flow line with arrow */}
                  <line x1="730" y1="200" x2="770" y2="200" stroke="#1d4ed8" strokeWidth="3" />
                  <polygon points="770,200 780,195 780,205" fill="#1d4ed8" />
                  
                  {/* Disinfectant */}
                  <rect 
                    x="780" y="150" width="100" height="100" 
                    fill={selectedComponent === 'disinfectant' ? "#93c5fd" : "#dbeafe"} 
                    stroke="#1d4ed8" strokeWidth="2"
                    onClick={() => setSelectedComponent('disinfectant')}
                    className="cursor-pointer"
                  />
                  <text x="830" y="205" textAnchor="middle" fill="#1e3a8a" fontSize="14">Disinfectant</text>
                  
                  {/* Sand Drying Bed */}
                  <rect 
                    x="330" y="480" width="200" height="50" 
                    fill={selectedComponent === 'sandDryingBed' ? "#93c5fd" : "#e6e6fa"} 
                    stroke="#1d4ed8" strokeWidth="2"
                    onClick={() => setSelectedComponent('sandDryingBed')}
                    className="cursor-pointer"
                  />
                  <text x="430" y="510" textAnchor="middle" fill="#1e3a8a" fontSize="14">Sand Drying Bed</text>
                  
                  {/* Flow to Compost */}
                  <line x1="330" y1="505" x2="280" y2="505" stroke="#1d4ed8" strokeWidth="3" />
                  <polygon points="280,505 270,500 270,510" fill="#1d4ed8" />
                  
                  {/* Compost */}
                  <rect 
                    x="180" y="480" width="100" height="50" 
                    fill={selectedComponent === 'compost' ? "#93c5fd" : "#dbeafe"} 
                    stroke="#1d4ed8" strokeWidth="2"
                    onClick={() => setSelectedComponent('compost')}
                    className="cursor-pointer"
                  />
                  <text x="230" y="510" textAnchor="middle" fill="#1e3a8a" fontSize="14">Compost</text>
                </svg>
              </div>
              <p className="text-sm text-gray-500 text-center">Click on any component for details</p>
            </div>
          </div>
        </div>

        {selectedComponent && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 transition-all duration-300">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{components[selectedComponent].title}</h2>
              <p className="mb-4">{components[selectedComponent].description}</p>
              <p className="text-gray-700 mb-4">{components[selectedComponent].additionalInfo}</p>
              <div className="mt-4">
                <a 
                  href={components[selectedComponent].youtubeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white py-2 px-4 rounded flex items-center w-fit"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-indigo-700 text-white p-4">
            <h2 className="text-xl font-bold">PROTOTYPE</h2>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg mb-4 h-96 flex items-center justify-center">
  <img 
    src="prototype.jpg" 
    alt="Wastewater Treatment Prototype Diagram" 
    className="w-full rounded-lg border border-gray-300"
  />
</div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-indigo-700 text-white p-4">
            <h2 className="text-xl font-bold">SUSTAINABLE GOALS</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {sustainableGoals.map((goal, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">{goal.goal}</h3>
                <p className="text-gray-700">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-200 text-gray-800 p-4">
            <h2 className="text-xl font-bold">SUSTAINABILITY ASSESSMENT</h2>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h3 className="font-bold text-lg mb-2">Health and well-being :-</h3>
              <p>Ensure healthy lives and promote well-being for all at all age.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Water and sanitation :-</h3>
              <p>Ensure availability and sustainable management of water and sanitation for all.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-6">
        <div className="text-center">
          <p>IEEE Competition Project - Wastewater Treatment Prototype</p>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} - Developed for Sustainable Water Solutions</p>
        </div>
      </footer>
    </div>
  );
}