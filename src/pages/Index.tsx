import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Augsburg | Lamaso Barbershop</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Lamaso Barbershop in Augsburg für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Augsburg, Lamaso Barbershop"
        />
        <link rel="canonical" href="https://lamaso-barbershop.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Lamaso Barbershop | Premium Barbershop Augsburg" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Augsburg."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lamaso-barbershop.de" />
        <meta property="og:image" content="https://lamaso-barbershop.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lamaso Barbershop | Premium Barbershop Augsburg" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://lamaso-barbershop.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Lamaso Barbershop",
            "image": "https://lamaso-barbershop.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Viktoriastraße 2",
              "addressLocality": "Augsburg",
              "postalCode": "86150",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.3689",
              "longitude": "10.8915"
            },
            "url": "https://lamaso-barbershop.de",
            "telephone": "+49 821 44947909",
            "openingHours": "Mo-Sa 08:30-20:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/lamasobarbershop",
              "https://www.instagram.com/lamasobarbershop"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

