import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Navigation } from 'lucide-react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const locations = [
  { name: 'Jesup, GA', coords: [31.6080, -81.8818] as [number, number], isHQ: true },
  { name: 'Baxley, GA', coords: [31.7777, -82.3487] as [number, number], isHQ: false },
  { name: 'Blackshear, GA', coords: [31.3041, -82.2404] as [number, number], isHQ: false },
  { name: 'Brunswick, GA', coords: [31.1499, -81.4915] as [number, number], isHQ: false },
  { name: 'Claxton, GA', coords: [32.1619, -81.9052] as [number, number], isHQ: false },
  { name: 'Douglas, GA', coords: [31.5088, -82.8501] as [number, number], isHQ: false },
  { name: 'Hilton Head, SC', coords: [32.2163, -80.7526] as [number, number], isHQ: false },
  { name: 'Hinesville, GA', coords: [31.8466, -81.5959] as [number, number], isHQ: false },
  { name: 'Jacksonville, FL', coords: [30.3322, -81.6557] as [number, number], isHQ: false },
  { name: 'Kingsland, GA', coords: [30.7999, -81.6897] as [number, number], isHQ: false },
  { name: 'Pooler, GA', coords: [32.1130, -81.2483] as [number, number], isHQ: false },
  { name: 'Saint Marys, GA', coords: [30.7302, -81.5465] as [number, number], isHQ: false },
  { name: 'Savannah, GA', coords: [32.0809, -81.0912] as [number, number], isHQ: false },
  { name: 'St. Simons Island, GA', coords: [31.1505, -81.3854] as [number, number], isHQ: false },
  { name: 'Statesboro, GA', coords: [32.4488, -81.7799] as [number, number], isHQ: false },
  { name: 'Vidalia, GA', coords: [32.2177, -82.4135] as [number, number], isHQ: false },
  { name: 'Waycross, GA', coords: [31.2136, -82.3540] as [number, number], isHQ: false }
];

const createCustomIcon = (isHQ: boolean) => {
  return L.divIcon({
    className: 'bg-transparent border-none', // Override leaflet defaults
    html: `<div class="relative flex items-center justify-center w-full h-full">
            <div class="absolute inset-[-6px] rounded-full ${isHQ ? 'bg-white/40' : 'bg-cyan/40'} animate-ping" style="animation-duration: 2s;"></div>
            <div class="w-4 h-4 rounded-full ${isHQ ? 'bg-white' : 'bg-cyan'} border-2 border-navy shadow-[0_0_15px_rgba(64,145,177,1)] relative z-10"></div>
           </div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

function MapController({ targetPos }: { targetPos: { coords: [number, number], zoom: number } }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(targetPos.coords, targetPos.zoom, {
      duration: 1.5,
      easeLinearity: 0.25
    });
  }, [targetPos, map]);
  return null;
}

export function ReactiveMap() {
  const [mapTarget, setMapTarget] = useState({ coords: [31.6080, -81.8818] as [number, number], zoom: 8 });

  const handleLocationClick = (loc: typeof locations[0]) => {
    setMapTarget({ coords: loc.coords, zoom: 11 });
  };

  return (
    <section id="locations" className="relative h-[800px] bg-navy border-t border-white/5 pointer-events-auto">
      {/* Interactive Leaflet Map */}
      <div className="absolute inset-0 z-0">
        <MapContainer 
          center={locations[0].coords} 
          zoom={8} 
          style={{ width: '100%', height: '100%' }}
          zoomControl={false}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          {locations.map((loc) => (
            <Marker key={loc.name} position={loc.coords} icon={createCustomIcon(loc.isHQ)} />
          ))}
          <MapController targetPos={mapTarget} />
        </MapContainer>

        {/* Subtle overlay to blend into the navy theme around edges, leaving center interactive */}
        <div className="absolute inset-0 bg-navy/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/30 to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-start pt-8 md:pt-24 md:items-start pointer-events-none">
        {/* Floating UI Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-full sm:max-w-[340px] md:max-w-md max-h-[50vh] md:max-h-none overflow-y-auto no-scrollbar bg-navy/95 md:bg-navy/90 md:backdrop-blur-xl border border-cyan/30 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.8)] pointer-events-auto relative z-20"
        >


          <div className="p-4 md:p-8 bg-transparent">
            {/* Headquarters Contact */}
            <div className="mb-5 md:mb-8">
              <h3 className="text-sm md:text-lg font-display font-bold text-white uppercase tracking-widest mb-3 md:mb-4 flex items-center justify-between">
                Headquarters
                <button 
                  onClick={() => handleLocationClick(locations[0])}
                  className="text-[9px] md:text-[10px] text-cyan hover:text-white transition-colors bg-cyan/10 px-2 py-1 rounded"
                >
                  VIEW MAP
                </button>
              </h3>
              <div className="flex items-start text-ghost/80 text-[11px] md:text-sm mb-2 md:mb-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 shrink-0 text-cyan mt-0.5" />
                <span className="leading-tight">
                  <strong>Diamond Roof Restorations</strong><br/>
                  133 W Cherry St Suite 204<br/>
                  Jesup, GA 31545, USA
                </span>
              </div>
              <div className="flex items-start text-ghost/80 text-[11px] md:text-sm">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 shrink-0 text-cyan mt-0.5" />
                <span>(912) 207-6273</span>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white/5 rounded p-3 md:p-5 border border-white/10">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="flex items-center gap-2">
                  <Navigation className="w-3 h-3 md:w-4 md:h-4 text-cyan" />
                  <h4 className="text-[10px] md:text-xs text-white font-bold uppercase tracking-widest">Proudly Serving</h4>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2 text-[9px] md:text-[11px] font-bold tracking-wider uppercase text-ghost/70">
                <button 
                  onClick={() => setMapTarget({ coords: [31.6080, -81.8818], zoom: 7 })}
                  className="bg-cyan/20 border-cyan text-white hover:bg-cyan transition-all px-2 md:px-3 py-1 md:py-1.5 rounded border flex items-center gap-1 group shadow-[0_0_15px_rgba(64,145,177,0.3)]"
                >
                  <Navigation className="w-3 h-3 text-cyan group-hover:text-white transition-colors" />
                  All Service Areas
                </button>
                {locations.filter(l => !l.isHQ).map(loc => (
                  <button 
                    key={loc.name} 
                    onClick={() => handleLocationClick(loc)}
                    className="bg-black/40 hover:bg-cyan/20 hover:text-white hover:border-cyan/50 transition-all px-2 md:px-2 py-1 md:py-1.5 rounded border border-white/5 flex items-center gap-1 group"
                  >
                    <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 text-ghost/30 group-hover:text-cyan transition-colors" />
                    {loc.name.split(',')[0]}
                  </button>
                ))}
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
