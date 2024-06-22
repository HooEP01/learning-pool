const saveToLocalStorage = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.error("Could not save state", e);
    }
}

function loadFromLocalStorage() {
    if (typeof window === 'undefined') {
        return undefined;
    }

    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.error("Could not load state", e);
        return undefined;
    }
}

const preloadedState = loadFromLocalStorage();

export { saveToLocalStorage, preloadedState };