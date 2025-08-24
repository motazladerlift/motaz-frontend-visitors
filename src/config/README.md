# Site Configuration System

This directory contains configuration files for the website. The main purpose is to centralize all basic site information in one place, making it easier to update and maintain.

## Files

- `siteConfig.js` - Contains all basic site information such as:
  - Site name, description, and tagline
  - Contact information (phone, email, WhatsApp)
  - Address information
  - Business hours
  - Social media links
  - Company information
  - Logo paths
  - Form messages
  - SEO information
  - Navigation links
  - Copyright information

## How to Use

Import the configuration in your component:

```jsx
import siteConfig from '../config/siteConfig';
```

Then use the configuration values in your component:

```jsx
// Example: Using site name
<h1>{siteConfig.siteName}</h1>

// Example: Using contact information
<a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a>

// Example: Using address
<p>{siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}</p>
```

## Benefits

1. **Centralized Management**: All basic site information is stored in one place
2. **Consistency**: Ensures consistent information across the entire site
3. **Easy Updates**: Change information in one place and it updates everywhere
4. **Maintainability**: Makes the codebase easier to maintain and update

## How to Update

To update any site information, simply edit the `siteConfig.js` file. All components that use this configuration will automatically reflect the changes.
