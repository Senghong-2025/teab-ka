# HAVMK (ហៅមក)

A modern, bilingual event invitation platform built with Nuxt 4 and Tailwind CSS 4. Create beautiful, customizable invitations for weddings, birthdays, graduations, parties, and more.

## Features

- **Multiple Event Types**: Wedding, Birthday, Graduation, Party, Sport, Host events
- **Bilingual Support**: English and Khmer (km-KH) internationalization
- **Beautiful UI**: Modern design with Tailwind CSS 4 and DaisyUI
- **Guest Management**: Invite and track guests with RSVP functionality
- **Customizable Cards**: Multiple card types with custom color schemes
- **Image Upload**: Cloudinary integration for event photos
- **Authentication**: Firebase authentication for secure access
- **Responsive Design**: Works seamlessly on all devices
- **SEO Optimized**: Built-in meta tags and Open Graph support

## Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com/) with SSR
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/), [Element Plus](https://element-plus.org/)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Authentication**: [Firebase](https://firebase.google.com/)
- **Image Storage**: [Cloudinary](https://cloudinary.com/)
- **Icons**: [Lucide Vue](https://lucide.dev/)
- **Internationalization**: [@nuxtjs/i18n](https://i18n.nuxtjs.org/)
- **Deployment**: Cloudflare Pages

## Setup

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
API_KEY=your_api_key
API_URL=your_api_url
SECRET_KEY=your_secret_key
```

Configure Cloudinary credentials in your Nuxt config or environment.

## Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

Development with local environment:

```bash
npm run dev
```

Development with production environment:

```bash
npm run prod
```

## Building for Production

Build the application:

```bash
npm run build
```

Build for Cloudflare Pages:

```bash
npm run build:prod
```

Deploy to Cloudflare Pages:

```bash
npm run deploy:prod
```

## Project Structure

```
havmk/
├── app/
│   ├── assets/          # Styles and static assets
│   ├── components/      # Vue components
│   ├── composables/     # Composable functions
│   ├── layouts/         # Layout components
│   ├── middleware/      # Route middleware
│   ├── models/          # TypeScript models
│   ├── pages/           # Application pages
│   │   ├── auth/        # Authentication pages
│   │   ├── wedding/     # Wedding invitation pages
│   │   ├── birthday/    # Birthday invitation pages
│   │   ├── graduation/  # Graduation invitation pages
│   │   └── ...
│   ├── plugins/         # Nuxt plugins (Firebase, Axios)
│   └── utils/           # Utility functions
├── i18n/
│   └── locales/         # i18n translations (en.json, kh.json)
├── public/              # Public static files
└── stores/              # Pinia stores
```

## Key Features

### Event Management
- Create custom invitations for various event types
- Manage event details (date, time, venue, dress code)
- Add ceremony and reception venues with Google Maps integration

### Guest Management
- Invite members with customized cards
- Track guest list
- Manage RSVPs

### Customization
- Multiple card templates
- Custom color schemes for cards and text
- Upload event photos via Cloudinary

### Internationalization
- English and Khmer language support
- Localized content for better user experience

## Docker Support

Build and run with Docker:

```bash
docker-compose up
```

## Deployment

The application is configured for deployment on Cloudflare Pages with the following preset:

```bash
npm run build:prod
npm run deploy:prod
```

## License

Private project

## Live Demo

Visit [havmk.pages.dev](https://havmk.pages.dev)
