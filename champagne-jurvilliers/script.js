// Contenu directement intégré dans le script
const content = {
  "brand": "Jurvilliers",
  "tagline": "Excellence et tradition depuis Popo Jurjur",
  
  "hero": {
    "title": "Champagne Jurvilliers",
    "subtitle": "Excellence et tradition depuis 1995",
    "description": "Découvrez nos champagnes d'exception, élaborés avec passion et savoir-faire dans la région champenoise."
  },
  
  "gamme": {
    "title": "Notre Gamme",
    "products": [
      {
        "name": "Brut Classique",
        "vintage": "Millésime 2019",
        "description": "Notre champagne phare, frais et délicat avec des notes de pomme verte et d'amande."
      },
      {
        "name": "Prestige Millésimé",
        "vintage": "Millésime 2018",
        "description": "Un champagne d'exception, complexe et élégant avec des notes de fruits secs et miel."
      },
      {
        "name": "Rosé de Saignée",
        "vintage": "Millésime 2020",
        "description": "Une belle robe saumonée, notes délicates de fruits rouges et fleurs blanches."
      }
    ]
  },
  
  "contact": {
    "title": "Nous Trouver",
    "location": {
      "heading": "Localisation",
      "lines": [
        "Champagne Jurvilliers",
        "123 Route de Palmou",
        "51160 Ay",
        "Région Champagne-Ardenne, France"
      ]
    },
    "hours": {
      "heading": "Horaires",
      "lines": [
        "Lundi - Vendredi : 9h00 - 17h00",
        "Samedi : 10h00 - 13h00",
        "Dimanche : Fermé"
      ]
    },
    "contact_info": {
      "heading": "Contact",
      "lines": [
        "Téléphone : +33 (0)3 26 XX XX XX",
        "Email : contact@jurvilliers.fr"
      ]
    }
  },
  
  "footer": {
    "copyright": "© 2024 Champagne Jurvilliers. Tous droits réservés.",
    "legal": "À consommer avec modération"
  }
};

// Charger et injecter le contenu
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Navigation
        if (document.querySelector('.logo')) {
            document.querySelector('.logo').textContent = content.brand;
        }
        
        // Section Accueil
        if (document.querySelector('.hero h1')) {
            document.querySelector('.hero h1').textContent = content.hero.title;
            document.querySelector('.hero .subtitle').textContent = content.hero.subtitle;
            document.querySelector('.hero .description').textContent = content.hero.description;
        }
        
        // Section Gamme
        if (document.querySelector('.gamme h2')) {
            document.querySelector('.gamme h2').textContent = content.gamme.title;
        }
        const productsContainer = document.querySelector('.products');
        if (productsContainer) {
            productsContainer.innerHTML = content.gamme.products.map(product => `
                <div class="product-card">
                    <h3>${product.name}</h3>
                    <p class="vintage">${product.vintage}</p>
                    <p class="description">${product.description}</p>
                </div>
            `).join('');
        }
        
        // Section Contact
        if (document.querySelector('.contact h2')) {
            document.querySelector('.contact h2').textContent = content.contact.title;
        }
        const contactInfoContainer = document.querySelector('.contact-info');
        if (contactInfoContainer) {
            contactInfoContainer.innerHTML = `
                <div class="info-item">
                    <h3>${content.contact.location.heading}</h3>
                    ${content.contact.location.lines.map(line => `<p>${line}</p>`).join('')}
                </div>
                <div class="info-item">
                    <h3>${content.contact.hours.heading}</h3>
                    ${content.contact.hours.lines.map(line => `<p>${line}</p>`).join('')}
                </div>
                <div class="info-item">
                    <h3>${content.contact.contact_info.heading}</h3>
                    ${content.contact.contact_info.lines.map(line => `<p>${line}</p>`).join('')}
                </div>
            `;
        }
        
        // Footer
        if (document.querySelector('.footer p')) {
            document.querySelector('.footer p').textContent = content.footer.copyright;
        }
        if (document.querySelector('.footer .legal')) {
            document.querySelector('.footer .legal').textContent = content.footer.legal;
        }
        
        console.log('✓ Contenu chargé avec succès');
        
    } catch (error) {
        console.error('✗ Erreur lors du chargement du contenu:', error);
    }
});
