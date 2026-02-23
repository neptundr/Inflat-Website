import React from "react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <div
                            className="w-6 h-6 rounded-md flex items-center justify-center"
                            style={{background: "linear-gradient(135deg, #BAFF4E, #8FD920)"}}
                        >
                            <span className="text-[#08080D] font-black text-[10px]">iF</span>
                        </div>
                        <span className="text-white/35 text-sm font-medium">InFlat</span>
                    </div>
                    <div className="flex items-center gap-6">
                        {["Privacy", "Terms", "Contact"].map((link) => (
                            <a key={link} href="#"
                               className="text-xs text-white/30 hover:text-white transition-colors duration-200">
                                {link}
                            </a>
                        ))}
                    </div>
                    <p className="text-xs text-white/15">© 2026 InFlat. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}