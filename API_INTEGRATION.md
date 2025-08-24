# API Integration Documentation

## Overview
This document describes the API integration for the Motaz Ladderlift frontend application.

## API Endpoints

### Base URL
```
https://motaz-backend-api.onrender.com
```

### Available Endpoints

1. **Pricing Data**
   - Endpoint: `/pricing`
   - Method: `GET`
   - Returns: Pricing information for all services

2. **Site Configuration**
   - Endpoint: `/site-configuration`
   - Method: `GET`
   - Returns: Site configuration data

## Data Structure

### Pricing API Response
```json
{
  "mainServices": [
    {
      "title": "Ladderlift met bediener",
      "price": "€600",
      "period": "/ AUR",
      "features": ["..."],
      "notes": ["..."],
      "category": "main",
      "active": true,
      "sort_order": 1,
      "id": "..."
    }
  ],
  "additionalServices": [
    {
      "title": "VERHUISPAKKET 1",
      "price": "€250",
      "period": "2 UUR",
      "features": ["..."],
      "notes": [],
      "category": "package",
      "active": true,
      "sort_order": 1,
      "id": "..."
    }
  ]
}
```

## Implementation Details

### Environment Variables
Create a `.env.local` file with:
```
VITE_API_URL=https://motaz-backend-api.onrender.com
```

### Hooks Used

1. **usePricing Hook**
   - Location: `src/hooks/usePricing.js`
   - Purpose: Fetches and manages pricing data
   - Features:
     - Automatic data transformation from API format to app format
     - Fallback to default data on API failure
     - Loading and error states

2. **useSiteConfiguration Hook**
   - Location: `src/hooks/useSiteConfiguration.js`
   - Purpose: Fetches and manages site configuration
   - Features:
     - Fallback to default configuration on API failure
     - Loading and error states

### Data Transformation

The API returns data in a different structure than what the app expects. The `transformApiData` function in `usePricing.js` handles this transformation:

- `mainServices` → `ladderlift` object with `basic`, `medium`, `high`, etc.
- `additionalServices` → `packages` and `truck` objects

## Components Updated

1. **PricingSection.jsx**
   - Now uses data from API instead of hardcoded values
   - Supports dynamic pricing updates

2. **AdditionalServices.jsx**
   - Updated to use API data for all services
   - Supports notes from API

3. **PricingCard.jsx**
   - Enhanced to display notes from API

## Testing

To test the API integration:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the pricing page
3. Check browser console for any errors
4. Verify that data is being fetched from API

## Troubleshooting

### Common Issues

1. **Data not updating**
   - Check if `.env.local` file exists
   - Verify API endpoint is accessible
   - Check browser console for errors

2. **Fallback to default data**
   - API might be down or returning errors
   - Check network tab in browser dev tools

3. **CORS issues**
   - API should handle CORS properly
   - Check if API is accessible from browser

## Future Improvements

1. Add caching for API responses
2. Implement retry logic for failed requests
3. Add loading states for better UX
4. Implement real-time updates when API data changes
