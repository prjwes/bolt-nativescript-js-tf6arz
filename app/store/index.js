import { Observable } from '@nativescript/core';

class Store extends Observable {
    constructor() {
        super();
        this.userData = null;
        this.isAdmin = false;
        this.isSecretary = false;
    }

    setUser(userData) {
        this.userData = userData;
        this.isAdmin = userData?.role === 'admin';
        this.isSecretary = userData?.role === 'secretary';
        this.notifyPropertyChange('userData', userData);
    }

    canUploadContent() {
        return this.isAdmin || this.isSecretary;
    }
}

export const store = new Store();

export function initializeStore() {
    // Initialize store with any saved data
    // This would typically involve loading user data from storage
}