import { Observable } from '@nativescript/core';
import { Frame } from '@nativescript/core';

export function onNavigatingTo(args) {
    const page = args.object;
    const viewModel = new Observable();

    // Sample data - In a real app, this would come from an API or database
    viewModel.latestNews = [
        { 
            title: "Team Victory Against Rivals", 
            preview: "FC Imperial secured a stunning 3-0 victory in yesterday's match..." 
        },
        { 
            title: "New Player Signing", 
            preview: "We're excited to announce our latest addition to the squad..." 
        }
    ];

    viewModel.nextMatch = {
        homeTeam: "FC Imperial",
        awayTeam: "City Rangers",
        date: "Dec 25, 2023",
        time: "15:00",
        venue: "Imperial Stadium"
    };

    page.bindingContext = viewModel;
}

export function navigateToTeam() {
    Frame.topmost().navigate("pages/team/team-page");
}

export function navigateToNews() {
    Frame.topmost().navigate("pages/news/news-page");
}

export function navigateToGallery() {
    Frame.topmost().navigate("pages/gallery/gallery-page");
}

export function navigateToFixtures() {
    Frame.topmost().navigate("pages/fixtures/fixtures-page");
}

export function navigateToManagement() {
    Frame.topmost().navigate("pages/management/management-page");
}

export function navigateToContact() {
    Frame.topmost().navigate("pages/contact/contact-page");
}

export function onMenu() {
    // Implement menu functionality
}