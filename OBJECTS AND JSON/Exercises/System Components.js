function buildDatabaseFromComponents(input) {
    let catalogue = new Map();
    input
        .forEach(s => {
            let [system, component, subcomponent] = s
                .split(" | ").filter(w => w != "");

            if (!catalogue.has(system)) {
                catalogue.set(system, new Map());
            }
            if (!catalogue.get(system).has(component)) {
                catalogue.get(system).set(component, new Set());
            }
            if (!catalogue.get(system).get(component).has(subcomponent)) {
                catalogue.get(system).get(component).add(subcomponent);
            }
        });

    print(catalogue);

    function sortSystemComparator(sysA, sysB, catalogue) {
        let aComponents = catalogue.get(sysA).size;
        let bComponents = catalogue.get(sysB).size;
        if (aComponents > bComponents) return -1;
        if (aComponents < bComponents) return 1;

        return sysA.toLowerCase().localeCompare(sysB.toLocaleLowerCase());
    }

    function print(catalogue) {
        let systems = [...catalogue.keys()].sort((a, b) => sortSystemComparator(a, b, catalogue));

        for (let system of systems) {
            console.log(system);

            let sortedComponents = [...catalogue.get(system).keys()]
                .sort((a, b) => catalogue.get(system).get(b).length - catalogue.get(system).get(a).length);

            for (let component of sortedComponents) {
                console.log(`|||${component}`);
                let subcomponents = catalogue.get(system).get(component);
                for (let subcomponent of subcomponents) {
                    console.log(`||||||${subcomponent}`);
                }
            }
        }
    }
}

buildDatabaseFromComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
);