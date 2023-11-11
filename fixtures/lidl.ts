// import {test as base} from "@playwright/test";
// import LidlCookies from "../tests/Lidl/commons/lidlCookies";
// import LidlSearchBar from "../tests/Lidl/psear/searchBar";

// //Searh results pages 
// //Common methods for SRP
// import LidlSearchResultsPage from "../tests/lidl/psear/searchResultsPage";
// //1 SK Search results page
// import SKsearchResultsPage from "../tests/Lidl/psear/SKsearchResultsPage";


// // export const testBase = base.expect<{SearchBar: SearchBar}
// type LidlPages = {
//   lidlCookiesPage: LidlCookies;
  
//   lidlSearchBarPage: LidlSearchBar;
//   lidlSearchResultsPage: LidlSearchResultsPage;
//   SKsearchResultsPage: SKsearchResultsPage;

// }

// export const test = base.extend<LidlPages>({

//       lidlCookiesPage: async ({page}, use) => {
//         const lidlCookies = new LidlCookies(page); 
//         await use (lidlCookies);
//       }, 

//       lidlSearchBarPage:async ({page},use) => {
//         const lidlSearchBar = new LidlSearchBar(page);
//         await use (lidlSearchBar);
//       },

//       lidlSearchResultsPage:async ({ page}, use) => {
//         const lidlSearchResultsPage = new LidlSearchResultsPage(page);
//         await use (lidlSearchResultsPage);
//       },
//       SKsearchResultsPage:async ({ page}, use) => {
//         const lidlSearchResultsPage = new LidlSearchResultsPage(page);
//         await use (lidlSearchResultsPage);
//       }
// }); 


// // export const test = base.expect<{
// //   searchBar: SearchBar; 
// //   searchResultsPage: SearchResultsPage;
// //   cookies: Cookies;

// // }> ({
// //   searchBar: async ({page}, use) => {
// //      await use (new SearchBar(page));
// //   },
// //   searchResultsPage: async ({page}, use) => {
// //     await use (new SearchResultsPage(page));
// //   },
// //   cookies: async ({page}, use) => {
// //     await use (new Cookies(page));
// //   }

// // });