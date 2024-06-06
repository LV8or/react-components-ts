import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root.tsx";
import HomePage from "../pages/HomePage.tsx";
import AccordionPage from "../pages/AccordionPage.tsx";
import CustomTabsPage from "../pages/CustomTabsPage.tsx";
import GitHubFinderPage from './../pages/GitHubFinderPage.tsx';
import ImageSliderPage from './../pages/ImageSliderPage.tsx';
import LoadMorePage from './../pages/LoadMorePage.tsx';
import NotesPage from './../pages/NotesPage.tsx';
import QRCodePage from './../pages/QRCodePage.tsx';
import RandColorPage from './../pages/RandColorPage.tsx';
import ScrollIndPage from './../pages/ScrollIndPage.tsx';
import ScrollToSectPage from './../pages/ScrollToSectPage.tsx';
import SearchAutoCompletePage from './../pages/SearchAutoCompletePage.tsx';
import StarRatingPage from './../pages/StarRatingPage.tsx';
import TicTacToePage from './../pages/TicTacToePage.tsx';
import UseClickOutsidePage from './../pages/UseClickOutsidePage.tsx';
import UseWinResizePage from './../pages/UseWinResizePage.tsx';

export const router = createBrowserRouter([
    { 
        path: "/", 
        element: <Root/>,
        children: [
            { index: true, element: <HomePage/> },
            { path: "/accordion", element: <AccordionPage/> },
            { path: "/custom-tabs", element: <CustomTabsPage/> },
            { path: "/github-finder", element: <GitHubFinderPage/> },
            { path: "/image-slider", element: <ImageSliderPage/> },
            { path: "/load-more", element: <LoadMorePage/> },
            { path: "/notes", element: <NotesPage/> },
            { path: "/qrcode", element: <QRCodePage/> },
            { path: "/randcolor", element: <RandColorPage/> },
            { path: "/scrollind", element: <ScrollIndPage/> },
            { path: "/scroll-to-sect", element: <ScrollToSectPage/> },
            { path: "/search-auto-complete", element: <SearchAutoCompletePage/> },
            { path: "/star-rating", element: <StarRatingPage/> },
            { path: "/tic-tac-toe", element: <TicTacToePage/> },
            { path: "/use-click-outside", element: <UseClickOutsidePage/> },
            { path: "/use-win-resize", element: <UseWinResizePage/> }
        ]
    },
    
    
]);

