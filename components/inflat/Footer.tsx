import React from "react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-8">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-normal">
                    {/*<div className="flex items-center gap-2">*/}
                    {/*    <div*/}
                    {/*        className="w-6 h-6 rounded-md flex items-center justify-center"*/}
                    {/*        style={{background: "linear-gradient(135deg, #BAFF4E, #8FD920)"}}*/}
                    {/*    >*/}
                    {/*        <span className="text-[#08080D] font-black text-[10px]">iF</span>*/}
                    {/*    </div>*/}
                    {/*    <span className="text-white/35 text-sm font-medium">InFlat</span>*/}
                    {/*</div>*/}
                    <div className="flex items-center gap-6">
                        <span
                           className="text-sm text-white/30">
                            Got questions? Tell us: support@inflat.app
                        </span>
                    </div>
                    <p className="text-sm text-white/30">© {new Date().getFullYear()} InFlat. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}