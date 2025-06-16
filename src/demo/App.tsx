import React from 'react';
import { NearByAssistant } from '../components/NearByAssistant/NearByAssistant';
import { NearByAssistantConfig } from '../types';
import { createDemoSearchService } from '../services/demoSearchService';
import '../styles/index.css';

// Test location service that immediately returns a location
const testLocationService = {
  getCurrentLocation: async () => {
    console.log('🌍 Using test location service');
    return Promise.resolve({ lat: 37.7749, lng: -122.4194 }); // San Francisco
  },
  requestPermission: async () => Promise.resolve(true)
};

const demoConfig: NearByAssistantConfig = {
  searchService: createDemoSearchService(),
  locationService: testLocationService, // Use test location for immediate results
  layout: {
    title: 'Find Nearby Places',
    showBackButton: false,
  },
  navigation: {
    onPlaceClick: (place, categoryType) => {
      alert(`Clicked on ${place.name} (${categoryType})`);
    },
    onCallClick: (phoneNumber) => {
      alert(`Calling ${phoneNumber}`);
    },
    onDirectionsClick: (place) => {
      alert(`Getting directions to ${place.name}`);
    },
    onBookingClick: (place) => {
      alert(`Booking appointment at ${place.name}`);
    },
  },
  features: {
    enableBooking: true,
    enableReviews: true,
    enablePhotos: true,
    enableDirections: true,
    enableCalling: true,
    enableFilters: true,
  }
};

function App() {
  return (
    <div className="w-full h-screen">
      <NearByAssistant 
        config={demoConfig}
        onError={(error) => console.error('Plugin Error:', error)}
      />
    </div>
  );
}

export default App;