import { useState, useCallback, useRef, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, OverlayViewF, OverlayView } from '@react-google-maps/api';
import { motion, AnimatePresence } from 'framer-motion';
import { mapPins, categoryColors, categoryLabels, type MapPin, type PinCategory } from '../data/mapPins';
import { darkMapStyle } from '../data/mapStyle';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const defaultCenter = { lat: 30, lng: 0 };
const defaultZoom = 3;

function PinMarker({ pin, onClick }: { pin: MapPin; onClick: (pin: MapPin) => void }) {
  const color = categoryColors[pin.category];

  return (
    <OverlayViewF
      position={{ lat: pin.lat, lng: pin.lng }}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.3 }}
        onClick={() => onClick(pin)}
        className="relative -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
        title={pin.name}
      >
        <div
          className="w-4 h-4 rounded-full border-2 border-white/30"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 12px ${color}80, 0 0 24px ${color}40`,
          }}
        />
        <div
          className="absolute -inset-2 rounded-full animate-ping opacity-30"
          style={{ backgroundColor: color }}
        />
      </motion.button>
    </OverlayViewF>
  );
}

function PinInfoCard({ pin, onClose }: { pin: MapPin; onClose: () => void }) {
  const color = categoryColors[pin.category];
  const label = categoryLabels[pin.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      className="glass-panel p-4 min-w-[280px] max-w-[320px]"
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
            style={{ backgroundColor: `${color}20`, color }}
          >
            {label}
          </span>
          <h3 className="text-white font-semibold mt-2">{pin.name}</h3>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-white transition-colors p-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <p className="text-sm text-gray-400 mb-2">{pin.description}</p>
      <p className="text-xs text-gray-500 flex items-center gap-1">
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {pin.location}
      </p>
    </motion.div>
  );
}

export default function MapView({ sidebarOpen }: { sidebarOpen: boolean }) {
  const [selectedPin, setSelectedPin] = useState<MapPin | null>(null);
  const [activeFilter, setActiveFilter] = useState<PinCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const mapRef = useRef<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const filteredPins = mapPins.filter((pin) => {
    const matchesFilter = !activeFilter || pin.category === activeFilter;
    const matchesSearch =
      !searchQuery ||
      pin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pin.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filters: { key: PinCategory; label: string; icon: string }[] = [
    { key: 'education', label: 'AI Education', icon: '🎓' },
    { key: 'meetup', label: 'Meetups', icon: '🤝' },
    { key: 'people', label: 'People', icon: '👤' },
    { key: 'gig', label: 'Hire / Gigs', icon: '💼' },
    { key: 'event', label: 'Events', icon: '🎉' },
  ];

  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-bloom-black">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-2 border-bloom-teal border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400 text-sm">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={defaultCenter}
        zoom={defaultZoom}
        onLoad={onLoad}
        options={{
          styles: darkMapStyle,
          disableDefaultUI: true,
          zoomControl: true,
          zoomControlOptions: { position: google.maps.ControlPosition.RIGHT_BOTTOM },
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          backgroundColor: '#0a0a0f',
        }}
        onClick={() => setSelectedPin(null)}
      >
        {filteredPins.map((pin) => (
          <PinMarker key={pin.id} pin={pin} onClick={setSelectedPin} />
        ))}

        {selectedPin && (
          <OverlayViewF
            position={{ lat: selectedPin.lat, lng: selectedPin.lng }}
            mapPaneName={OverlayView.FLOAT_PANE}
          >
            <div className="relative -translate-x-1/2 -translate-y-full mb-4">
              <PinInfoCard pin={selectedPin} onClose={() => setSelectedPin(null)} />
            </div>
          </OverlayViewF>
        )}
      </GoogleMap>

      {/* Search and filters overlay */}
      <div
        className="absolute top-4 z-10 flex flex-col gap-3 transition-all duration-300"
        style={{ left: sidebarOpen ? '260px' : '16px', right: '16px' }}
      >
        {/* Search bar */}
        <div className="glass-panel flex items-center gap-2 px-4 py-2 max-w-md">
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search locations, people, events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none text-sm text-gray-300 placeholder-gray-600 flex-1"
          />
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(activeFilter === filter.key ? null : filter.key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-bloom-teal/20 text-bloom-teal border border-bloom-teal/30'
                  : 'glass-panel text-gray-400 hover:text-white'
              }`}
            >
              <span>{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom action buttons */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        <button className="btn-primary flex items-center gap-2 text-sm">
          <span>+</span> Post a Meetup
        </button>
        <button className="btn-secondary flex items-center gap-2 text-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          Find People Nearby
        </button>
      </div>
    </div>
  );
}
