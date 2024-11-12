document.addEventListener('DOMContentLoaded', function() {
    const ships = {
        Fighter: [
            { id: 'fighter1', name: 'Sandrake Atmospheric Interceptor', commandPoints:0, maxCount: 10 },
            { id: 'fighter2', name: 'Spore A404-Light Fighter', commandPoints:0, maxCount: 10 },
        ],
        Corvette: [
            { id: 'corvette1', name: 'CV-T800 Pulsar Corvette', commandPoints:0, maxCount: 15 },
            { id: 'corvette2', name: 'Nebular Chaser Heavy Corvette', commandPoints:0, maxCount: 10 },
            { id: 'corvette3', name: 'Nebular Chaser Pulsar Corvett', commandPoints:0, maxCount: 10 },
        ],
        Frigate: [
            { id: 'frigate1', name: 'FG300 Multi-Role-Frigate', commandPoints: 3, maxCount: 15},
            { id: 'frigate2', name: 'FG300 Armored Frigate', commandPoints: 3, maxCount: 15},
            { id: 'frigate3', name: 'FG300 Recon Frigate', commandPoints: 3, maxCount: 15},
        ],
        Destroyer: [
            { id: 'destroyer1', name: 'AC721 Heavy Logistics Destroyer', commandPoints: 8, maxCount: 15},
            { id: 'destroyer2', name: 'AC721 Heavy Missile Destroyer', commandPoints: 8, maxCount: 15},
            { id: 'destroyer3', name: 'AC721 Heavy Ion Cannon Destroyer', commandPoints: 8, maxCount: 15},
            { id: 'destroyer4', name: 'AC721 Heavy Dual-Purpose Assault Ship', commandPoints: 8, maxCount: 15},
        ],
        Cruiser: [
            { id: 'cruiser1', name: 'CAS066 Generic Cruiser', commandPoints: 18, maxCount: 12},
            { id: 'cruiser2', name: 'CAS066 Artillery Cruiser', commandPoints: 18, maxCount: 12},
            { id: 'cruiser3', name: 'CAS066 Aircraft Cruiser', commandPoints: 18, maxCount: 12},
            { id: 'cruiser4', name: 'CAS066 Auxiliar Cruiser', commandPoints: 18, maxCount: 12},
        ],
        Battlecruiser: [
            { id: 'battlecruiser1', name: 'Spear of Uranus Heavy Battlecruiser', commandPoints: 35, maxCount: 6},
            { id: 'battlecruiser2', name: 'Constantin the Great Multi-Role Battlecruiser', commandPoints: 35, maxCount: 6},
        ],
        AuxiliarShip: [
            { id: 'auxiliarship1', name: 'Ediacaran Heavy Firepower Auxiliar Ship', commandPoints: 40, maxCount: 1},
        ],
        Carrier: [
            { id: 'carrier1', name: 'Solar Whale Armed Tactical Carrier', commandPoints: 45, maxCount: 5},
        ],
        Battleship: [
            { id: 'battleship1', name: 'Warspite Assault Battleship', commandPoints: 45, maxCount: 3},
        ],
        // Add more classes and variants as needed
    };

    const shipClassSelect = document.getElementById('ship-class');
    const shipVariantContainer = document.getElementById('ship-variant-container');
    const shipVariantSelect = document.getElementById('ship-variant');
    const shipQuantityInput = document.getElementById('ship-quantity');
    const addShipButton = document.getElementById('add-ship');
    const fleetContainer = document.getElementById('fleet-container');
    const maxCommandPointsInput = document.getElementById('maxCommandPoints');
    const totalCommandPointsDisplay = document.getElementById('totalCommandPoints');
    let totalCommandPoints = 0;
    const fleet = [];

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
        const defaultOption = document.createElement('option');
        defaultOption.textContent = 'Select a variant';
        defaultOption.value = '';
        shipVariantSelect.appendChild(defaultOption);
        ships[selectedClass].forEach(ship => {
            const option = document.createElement('option');
            option.value = ship.id;
            option.textContent = `${ship.name} (${ship.commandPoints} CP, Max: ${ship.maxCount})`;
            shipVariantSelect.appendChild(option);
        });
    }

    addShipButton.addEventListener('click', function() {
        const selectedClass = shipClassSelect.value;
        const selectedVariantId = shipVariantSelect.value;
        const selectedQuantity = parseInt(shipQuantityInput.value);
        if (!selectedClass || !selectedVariantId || isNaN(selectedQuantity) || selectedQuantity <= 0) {
            alert('Please select a valid ship variant and quantity.');
            return;
        }

        const shipVariant = ships[selectedClass].find(ship => ship.id === selectedVariantId);
        const commandPoints = shipVariant.commandPoints * selectedQuantity;
        const maxCommandPoints = Math.min(parseInt(maxCommandPointsInput.value), 420);
        maxCommandPointsInput.value = maxCommandPoints; // Ensure the max CP input doesn't exceed 420
        const fleetVariant = fleet.find(ship => ship.id === selectedVariantId);

        if (totalCommandPoints + commandPoints > maxCommandPoints) {
            alert('Exceeds maximum command points');
            return;
        }

        if (fleetVariant) {
            if (fleetVariant.quantity + selectedQuantity > shipVariant.maxCount) {
                alert(`Cannot exceed max count of ${shipVariant.maxCount} for this ship`);
                return;
            }
            fleetVariant.quantity += selectedQuantity;
        } else {
            if (selectedQuantity > shipVariant.maxCount) {
                alert(`Cannot exceed max count of ${shipVariant.maxCount} for this ship`);
                return;
            }
            fleet.push({ ...shipVariant, quantity: selectedQuantity });
        }

        totalCommandPoints += commandPoints;
        updateFleetDisplay();
        updateCommandPoints();
    });

    function updateFleetDisplay() {
        fleetContainer.innerHTML = '';
        fleet.forEach(ship => {
            const fleetShipElement = document.createElement('div');
            fleetShipElement.classList.add('fleet-ship');
            fleetShipElement.setAttribute('data-command-points', ship.commandPoints);
            fleetShipElement.textContent = `${ship.name} (${ship.commandPoints} CP) x ${ship.quantity}`;
            fleetShipElement.addEventListener('click', () => removeFromFleet(ship));
            fleetContainer.appendChild(fleetShipElement);
        });
    }

    function updateCommandPoints() {
        totalCommandPointsDisplay.innerText = 'Total Command Points: ' + totalCommandPoints;
    }

    function removeFromFleet(ship) {
        const index = fleet.findIndex(fleetShip => fleetShip.id === ship.id);
        if (index !== -1) {
            totalCommandPoints -= ship.commandPoints * ship.quantity;
            fleet.splice(index, 1);
            updateFleetDisplay();
            updateCommandPoints();
        }
    }
});
