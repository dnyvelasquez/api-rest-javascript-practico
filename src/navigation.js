window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({location});
    if(location.hash.startsWith(`#trends`)) {
        trendPsage();
    } else if(location.hash.startsWith(`#search=`)) {
        searchPage();
    } else if(location.hash.startsWith(`#movie=`)) {
        movieDetailPage();
    } else if(location.hash.startsWith(`#category=`)) {
        categoriesPage();
    } else {
        homePage();
    }
}

function homePage() {
    console.log(`Home!!!`);
    getTrendingMoviesPreview();
    getCategoriesPreview();
}

function categoriesPage() {
    console.log(`Categories!!!`);
}

function movieDetailPage() {
    console.log(`Movie!!!`);
}

function searchPage() {
    console.log(`Serach!!!`);
}

function trendPsage() {
    console.log(`Trends!!!`);
}