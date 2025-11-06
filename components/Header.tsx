import React from 'react';

const Header: React.FC = () => {
    const navLinks = ['About', 'Skills', 'Experience', 'Contact'];
    
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="sticky top-0 z-50 glass-card">
            <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
                <div className="text-xl font-bold gradient-text">
                    Rohan Hiwrale
                </div>
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map(link => (
                        <button 
                            key={link} 
                            onClick={() => scrollToSection(link)}
                            className="text-slate-300 hover:text-white transition-colors duration-300"
                        >
                            {link}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;