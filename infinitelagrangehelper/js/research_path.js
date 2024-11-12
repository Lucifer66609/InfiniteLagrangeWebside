document.addEventListener('DOMContentLoaded', function() {
    const ships = {
        Fighter: [
            { id: 'fighter1', name: 'Mistral', picture: 'Ship_pictures/Mistral.jpg', paths: [
                { path: 'Antonios Consortium + Direct-Fire Weapon + Fighter & Corvette', probability: 14.29, otherOutcomes: 'Vitas B: 14.29%, Balancer Anderson SC020: 28.57%, Nebula Chaser Heavy Corvette: 28.57%, Nebula Chaser Pulsar Corvette: 14.29%' },
            ]},
            { id: 'fighter2', name: 'Spore', picture: 'Ship_pictures/Spore.jpg', paths: [
                { path: 'Jupiter Industries + Direct-Fire Weapon + Strategy and Support', probability: 16.67, otherOutcomes: 'B192 Newland: 33.33%, Eris I Cannon Type: 33.33%, Chonamara Chaos Railgun Type: 16.67%' },
                { path: 'Jupiter Industries + Direct-Fire Weapon + Fighter & Corvette', probability: 33.33, otherOutcomes: 'B192 Newland: 66.67%, ' }
            ]}
        ],
        Corvette: [
            { id: 'corvette1', name: 'CV-T800', picture: 'Ship_pictures/CV-T800.jpg', paths: [
                { path: 'Dawn Accord Organisation + Direct-Fire Weapon + Outstanding Firepower', probability: 20, otherOutcomes: 'CAS066 Artillery Type: 40%, KCCPV2.0 Pulse Cannon Type: 40%' },
                { path: 'Dawn Accord Organisation + Direct-Fire Weapon + Strategy and Support', probability: 7.14, otherOutcomes: 'AT021 Interference Type: 14.29%, SC002: 14.29%, CV-11003: 14.29%, FG300 Multi-Role Type: 14.29%, FG300 Recon Type: 14.29%, AC721 Generic Type: 14.29%, ST59: 7.14%' },
                { path: 'Dawn Accord Organisation + Direct-Fire Weapon + Fighter & Corvette', probability: 9.09, otherOutcomes: 'AT021 Pulse Cannon Type: 18.18%, AT021 Interference Type: 18.18%, SC002: 18.18%, CV-11003: 18:18%, CV-M011 Cannon Type: 18.18%' },
            ]},
            { id: 'corvette2', name: 'S-Levy9', picture: 'Ship_pictures/Levy.jpg', paths: [
                { path: 'Jupiter Industries + Projectile Weapon + Outstanding Firepower', probability: 12.82, otherOutcomes: 'Stingry: 25.64%, Mare Serenitatis Anti-Ship Type: 25.64%, Quaoar Torpedo Type: 25.64%, Callisto: Torpedo Type: 5.13, Callisto Anti Ship Type: 5.13%' },
                { path: 'Jupiter Industries + Projectile Weapon + Sustained Combat', probability: 11.11, otherOutcomes: 'Stingray: 22.22%, Mare Serenitatis Anti-Ship Type: 22.22%, Mare Serenitatis Missile Type: 22.22%, Mare Serenitatis Anti-Aircraft Type: 22.22%' },
                { path: 'Jupiter Industries + Projectile Weapon + Fighter & Corvette', probability: 22, otherOutcomes: 'Janbiya Aer410: 40%, Stingray: 40%' },
            ]}
        ],
        Frigatte:[
            { id: 'frigatte1', name: ''}
        ],
        Destroyer: [
            { id: 'destroyer1', name: 'Taurus Assault Destroyer', picture: 'Ship_pictures/Taurus_assault.jpg', paths: [
                { path: 'Noma Shipping Group + Direct-Fire Weapon + Outstanding Firepower', probability: 11.90, otherOutcomes: 'Ruby Railgun Type: 11.90%, Ruby Energy Type: 11.90%, Aldabra Generic Type: 11,90%, Aldabra Armoured Type: 11.90%, Taurus Offensive Type: 11.90%, Chimera Ballistic Type: 11.90%, Chimera Heavy Cannon Type: 11.90%, Spear of Uranos: 4.76%'},
                { path: 'Noma Shipping Group + Direct-Fire Weapon + Sustained Combat', probability: 11.90, otherOutcomes: 'Aldabra Generic Type: 11.90%, Aldabra Armoured Type: 11.90%, Taurus Offensive Type: 11.90%, Taurus Deffensive Type: 11.90%, Chimera Ballistic Type: 11.90%, Chimera Heavy Cannon Type: 11.90, Chimera Defensive Type: 11.90%, Spear of Uranos: 4.76%'},
            ]},
            { id: 'destroyer2', name: 'Ceres Aircraft Destroyer', picture: 'Ship_pictures/Ceres_Aircraft.jpg', paths: [
                { path: 'Jupiter Industries + Strategie and Support', probability: 10.87, otherOutcomes: 'B192 Newland: 10.87%, Janbiya Aer410: 10.87%, Spore A404: 10.87%, Ceres Support Type: 10.87%, Ceres Tactical Type: 10.87%, Eris Cannon Type: 10.87%, Chonamara Chaos Railgun Type: 5.43%, Eternal Heavens: 2.17%'},
            ]},
        ],
        Cruiser: [
            { id: 'cruiser1', name: 'Chimera Ballistic Cruiser', picture: 'Ship_pictures/Chimera_HeavyCruiser.jpg', paths: [
                { path: 'Noma Shipping Group + Direct-Fire Weapon + Outstanding Firepower', probability: 11.90, otherOutcomes: 'Ruby Railgun Type: 11.90%, Ruby Energy Type: 11.90%, Aldabra Generic Type: 11.90%, Aldabra Armoured Type: 11.90%, Taurus Offensive Type: 11.90%, Taurus Assault Type: 11.90% Chimera Heavy Cannon Type: 11.90%, Spear of Uranos: 4.76%'},
                { path: 'Noma Shipping Group + Direct-Fire Weapon + Sustained Combat', probability: 11.90, otherOutcomes: 'Aldabra Generic Type: 11.90%, Aldabra Armoured Type: 11.90%, Taurus Offensive Type: 11.90%, Taurus Assault Type: 11.90%, Taurus Deffensive Type: 11.90%, Chimera Heavy Cannon Type: 11.90%, Chimera Deffensive Type: 11.90%, Spear of Uraons: 4.76%'},
            ]},
            { id: 'cruiser2', name: 'Light Cone Multi Role Cruiser', picture: 'Ship_pictures/Light_Cone_MultiRoleCruiser.jpg', paths: [
                { path: 'Noma Shipping Group + Projectile Weapon', probability: 12.50, otherOutcomes: 'Bullfrog: 25%, RedBeast: 25%, Ruby Defensive Type: 12.50%, Light Cone Anti-Aircraft Type: 12.50%, Light Cone Assault Type: 12.50%'},
            ]},
        ],
        // Add more classes and variants as needed
    };

    const shipClassSelect = document.getElementById('ship-class');
    const shipVariantContainer = document.getElementById('ship-variant-container');
    const shipVariantSelect = document.getElementById('ship-variant');
    const researchTableContainer = document.getElementById('research-table-container');
    const variantName = document.getElementById('variant-name');
    const researchTableBody = document.getElementById('research-table').querySelector('tbody');

    shipClassSelect.addEventListener('change', function() {
        const selectedClass = shipClassSelect.value;
        if (selectedClass) {
            populateShipVariants(selectedClass);
            shipVariantContainer.style.display = 'block';
        } else {
            shipVariantContainer.style.display = 'none';
        }
    });

    function populateShipVariants(selectedClass) {
        shipVariantSelect.innerHTML = '';

        ships[selectedClass].forEach(ship => {
            const option = document.createElement('option');
            option.value = ship.id;
            option.textContent = ship.name;
            shipVariantSelect.appendChild(option);
        });

        shipVariantSelect.addEventListener('change', function() {
            const selectedVariantId = shipVariantSelect.value;
            if (selectedVariantId) {
                displayResearchTable(selectedClass, selectedVariantId);
            } else {
                researchTableContainer.style.display = 'none';
            }
        });
    }

    function displayResearchTable(selectedClass, selectedVariantId) {
        const selectedVariant = ships[selectedClass].find(ship => ship.id === selectedVariantId);
        variantName.textContent = selectedVariant.name;
        researchTableBody.innerHTML = '';

        selectedVariant.paths.forEach(path => {
            const row = document.createElement('tr');
            const pictureCell = document.createElement('td');
            const pathCell = document.createElement('td');
            const probabilityCell = document.createElement('td');
            const otherOutcomesCell = document.createElement('td');

            pictureCell.innerHTML = `<img src="${selectedVariant.picture}" alt="${selectedVariant.name}" width="100">`;
            pathCell.textContent = path.path;
            probabilityCell.textContent = path.probability + '%';
            otherOutcomesCell.textContent = path.otherOutcomes;

            row.appendChild(pictureCell);
            row.appendChild(pathCell);
            row.appendChild(probabilityCell);
            row.appendChild(otherOutcomesCell);
            researchTableBody.appendChild(row);
        });

        researchTableContainer.style.display = 'block';
    }
});