    const guides = [
        {
            title: 'Guide 1: Base Expansion',
            content: 'How to quickly expand your base to level 4.',
            description: `
                In Infinite Lagrange, base expansion is crucial for unlocking new features and higher class ships.
                Begin by using Speedup Modules gifted by the game to expedite upgrades.
        
                <h4>Phase 1: Initial Upgrades</h4>
                <p>At the beginning, focus on upgrading essential buildings to lay a strong foundation:</p>
                <ul>
                    <li>Level up the Generic Port to level 2 to increase resource production.</li>
                    <li>Upgrade the Warehouse to level 1 for increased storage capacity.</li>
                    <li>Enhance your production capabilities by leveling up the Joint Production Shipyard to level 2.</li>
                    <li>Initiate Base expansion to reach Base Level 2, unlocking more building options.</li>
                </ul>
        
                <p>While waiting for Base Level 2 expansion:</p>
                <ul>
                    <li>Continue upgrading the Generic Port and activate Automated Upgrades for efficiency.</li>
                    <li>Invest in the Frigate Shipyard to start building your first warships for defense and exploration.</li>
                    <li>Level up the Utility Ship Dockyard to support fleet maintenance and upgrades.</li>
                    <li>Manage resources wisely by focusing on key upgrades like Small X-8 Engineering Type Ships and frigates.</li>
                    <li>Deploy miners strategically to gather resources from nearby Resource Nodes.</li>
                    <li>Use your initial fleet of 6 frigates to eliminate Pirate Fleets threatening your base.</li>
                </ul>
        
                <h4>Phase 2: Base Level 2 to 3</h4>
                <p>As your base grows, optimize production and infrastructure:</p>
                <ul>
                    <li>Expand habitat capabilities with Habitat 1 upgrades.</li>
                    <li>Install the Small Integrated Plant for enhanced resource processing.</li>
                    <li>Upgrade to Generic Port 2 and automate upgrades for sustained growth.</li>
                    <li>Prepare for Base Expansion to level 3 once Generic Port 2 reaches level 5.</li>
                </ul>
        
                <h4>Phase 3: Base Level 3 to 4</h4>
                <p>Advance your base to unlock more advanced technologies and capabilities:</p>
                <ul>
                    <li>Develop trade networks with Trading Center upgrades.</li>
                    <li>Upgrade to Generic Port 3 and initiate Capital Shipyard 1 for larger vessel construction.</li>
                    <li>Prepare for Base Expansion to level 4 to gain mobility and upgrade options for miner ships.</li>
                </ul>
            `,
        },        
        {
            title: 'Guide 2: Resource Handling',
            content: 'Resource Management.',
            description: `
                To upgrade your Base and to build fleets you will need many resources. These resources can be obtained in a few ways:
                <ol>
                    <li>Mining Resources is the best and most consistent way of gaining resources fast and in high quantity.</li>
                    <li>Your base has an active resource generation that you need to level up. You get the Small Integrated plant at level 2. At level 3, you gain the Smelting Plant and the Crystal Synthesis Plant. At base level 4, you gain the D20 Electrolysis Plant.</li>
                    <li>City Bonuses: When your Squad takes over a City, you gain a small hourly bonus from it.</li>
                    <li>Buying Resource Chests at trade posts.</li>
                </ol>
    
                The best way is to relocate your base to a resource-rich area once you reach level 4 and gain the ability to move your base. This way, you can access higher-level resource spots and more resources depending on your starting area. Parallel to this, you should level up the production plants whenever you can, especially during Base Expansion Upgrades.
            `,
        }
        // Add more guides as needed
    ];
    document.addEventListener('DOMContentLoaded', function() {
        const guideContainer = document.getElementById('guide-container');
    
        guides.forEach((guide, index) => {
            const sectionElement = document.createElement('section');
            sectionElement.classList.add('guide');
    
            const titleElement = document.createElement('h3');
            titleElement.classList.add('guide-title');
            titleElement.textContent = guide.title;
            sectionElement.appendChild(titleElement);
    
            const contentElement = document.createElement('div');
            contentElement.classList.add('guide-content');
    
            if (guide.content) {
                contentElement.innerHTML = `<p>${guide.content}</p>`;
            }
    
            if (guide.description) {
                contentElement.innerHTML += guide.description;
            }
    
            if (guide.listItems) {
                contentElement.innerHTML += `<ul>${guide.listItems.map(item => `<li>${item}</li>`).join('')}</ul>`;
            }
    
            sectionElement.appendChild(contentElement);
            guideContainer.appendChild(sectionElement);
    
            // Toggle guide content when title is clicked
            titleElement.addEventListener('click', function() {
                contentElement.classList.toggle('active');
            });
        });
    });
