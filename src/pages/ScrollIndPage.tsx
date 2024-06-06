import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/appcontext.tsx';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
}

interface AppContextType {
    handleScrollPerc: (percentage: number) => void;
}

const ScrollIndPage: React.FC = () => {
	
    const [items, setItems] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [scrollPercentage, setScrollPercentage] = useState<number>(0);

    const { handleScrollPerc } = useContext(AppContext) as AppContextType;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://dummyjson.com/products?limit=100");
                const data = await response.json();
                if (data && data.products && data.products.length > 0) {
                    setItems(data.products);
                }
                setLoading(false);
            } catch (error: any) {
                setErrorMessage(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const handleScrollPercentage = () => {
            const scrolled = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            setScrollPercentage((scrolled / height) * 100);
        };

        window.addEventListener('scroll', handleScrollPercentage);

        return () => {
            window.removeEventListener('scroll', handleScrollPercentage);
        };
    }, []);

    useEffect(() => {
        const handleScroll = (percentage: number) => {
            handleScrollPerc(percentage);
        };

        handleScroll(scrollPercentage);
    }, [scrollPercentage, handleScrollPerc]);

    return (
        <div className="app-cont scroll-ind-cont">
            <div className="container">
                <header>
                    <h1>Scroll Indicator</h1>
                </header>
                <div className="data-container">
                    {loading ? (
                        <p>Loading...</p>
                    ) : errorMessage ? (
                        <p>Error: {errorMessage}</p>
                    ) : (
                        items.map((item) => (
                            <div className="comp-cont data-item" key={item.id}>
                                {item.title}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ScrollIndPage;
