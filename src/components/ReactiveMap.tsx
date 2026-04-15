import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Search, Navigation } from 'lucide-react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const locations = [
  { name: 'Jesup, GA', coords: [31.6080, -81.8818] as [number, number], isHQ: true },
  { name: 'Baxley, GA', coords: [31.7777, -82.3487] as [number, number], isHQ: false },
  { name: 'Blackshear, GA', coords: [31.3041, -82.2404] as [number, number], isHQ: false },
  { name: 'Brunswick, GA', coords: [31.1499, -81.4915] as [number, number], isHQ: false },
  { name: 'Hilton Head, SC', coords: [32.2163, -80.7526] as [number, number], isHQ: false },
  { name: 'Hinesville, GA', coords: [31.8466, -81.5959] as [number, number], isHQ: false },
  { name: 'Jacksonville, FL', coords: [30.3322, -81.6557] as [number, number], isHQ: false },
  { name: 'Pooler, GA', coords: [32.1130, -81.2483] as [number, number], isHQ: false }
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
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [isMatch, setIsMatch] = useState<boolean>(false);
  const [mapTarget, setMapTarget] = useState({ coords: [31.6080, -81.8818] as [number, number], zoom: 8 });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);

    if (val.length > 2) {
      setIsSearching(true);
      setTimeout(() => {
        setIsSearching(false);
        const found = locations.find(loc => loc.name.toLowerCase().includes(val.toLowerCase()));
        if (found) {
          setIsMatch(true);
          setSearchResult(`Yes! We proudly serve ${found.name}.`);
          setMapTarget({ coords: found.coords, zoom: 11 });
        } else {
          setIsMatch(false);
          setSearchResult(`We may serve your area! Contact us to confirm.`);
        }
      }, 500);
    } else {
      setSearchResult(null);
      setIsMatch(false);
    }
  };

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

      <div className="container mx-auto px-6 relative z-10 h-full flex items-center pointer-events-none">
        {/* Floating UI Panel */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-md bg-navy/90 backdrop-blur-xl border border-cyan/30 rounded-lg shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden pointer-events-auto relative z-20"
        >
          <div className="bg-white/5 p-6 md:p-8 text-white border-b border-white/10">
            <h2 className="text-2xl font-display font-bold mb-2 uppercase tracking-tight">Service Area Check</h2>
            <p className="text-white/70 text-sm mb-6">Enter your city to see if we service your area.</p>
            
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="e.g. Brunswick, GA"
                className="w-full bg-black/30 border border-white/10 rounded px-12 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all text-base tracking-wide"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
              
              {isSearching && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-5 h-5 border-2 border-cyan/30 border-t-cyan rounded-full"
                  />
                </div>
              )}
            </div>

            {searchResult && !isSearching && (
              <motion.div 
                initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-3 rounded font-bold text-sm text-center border ${isMatch ? 'bg-cyan/20 border-cyan text-white' : 'bg-white/10 border-white/20 text-ghost'}`}
              >
                {searchResult}
              </motion.div>
            )}
          </div>

          <div className="p-6 md:p-8 bg-transparent">
            {/* Headquarters Contact */}
            <div className="mb-8">
              <h3 className="text-lg font-display font-bold text-white uppercase tracking-widest mb-4 flex items-center justify-between">
                Headquarters
                <button 
                  onClick={() => handleLocationClick(locations[0])}
                  className="text-[10px] text-cyan hover:text-white transition-colors bg-cyan/10 px-2 py-1 rounded"
                >
                  VIEW MAP
                </button>
              </h3>
              <div className="flex items-start text-ghost/80 text-sm mb-3">
                <MapPin className="w-5 h-5 mr-3 shrink-0 text-cyan mt-0.5" />
                <span>
                  <strong>Diamond Roof Restorations</strong><br/>
                  133 W Cherry St Suite 204<br/>
                  Jesup, GA 31545, USA
                </span>
              </div>
              <div className="flex items-start text-ghost/80 text-sm">
                <Phone className="w-5 h-5 mr-3 shrink-0 text-cyan mt-0.5" />
                <span>(888) 555-ROOF</span>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white/5 rounded p-5 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-cyan" />
                  <h4 className="text-xs text-white font-bold uppercase tracking-widest">Proudly Serving</h4>
                </div>
                <button 
                  onClick={() => setMapTarget({ coords: [31.6080, -81.8818], zoom: 8 })}
                  className="text-[10px] text-ghost/50 hover:text-white transition-colors"
                >
                  RESET VIEW
                </button>
              </div>
              <div className="flex flex-wrap gap-2 text-[11px] font-bold tracking-wider uppercase text-ghost/70">
                {locations.filter(l => !l.isHQ).map(loc => (
                  <button 
                    key={loc.name} 
                    onClick={() => handleLocationClick(loc)}
                    className="bg-black/40 hover:bg-cyan/20 hover:text-white hover:border-cyan/50 transition-all px-2 py-1.5 rounded border border-white/5 flex items-center gap-1 group"
                  >
                    <MapPin className="w-3 h-3 text-ghost/30 group-hover:text-cyan transition-colors" />
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
