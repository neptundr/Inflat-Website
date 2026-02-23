import localFont from "next/font/local";

export const TTMono = localFont({
    src: [
        // { path: "../public/fonts/TT_Mono_300.ttf", weight: "300" },
        { path: "../public/fonts/TT_Mono_700.ttf", weight: "700" },
    ],
    variable: "--font-TT-mono",
    display: "swap",
});

export const TTNormal = localFont({
    src: [
        { path: "../public/fonts/TT_300.ttf", weight: "300" },
        { path: "../public/fonts/TT_400.ttf", weight: "400" },
        { path: "../public/fonts/TT_500.ttf", weight: "500" },
        { path: "../public/fonts/TT_600.ttf", weight: "600" },
        { path: "../public/fonts/TT_700.ttf", weight: "700" },
        { path: "../public/fonts/TT_800.ttf", weight: "800" },
        { path: "../public/fonts/TT_900.ttf", weight: "900" },
    ],
    variable: "--font-TT",
    display: "swap",
});

export const TT_C_Normal = localFont({
    src: [
        { path: "../public/fonts/TT_C_300.ttf", weight: "300" },
        { path: "../public/fonts/TT_C_500.ttf", weight: "500" },
        { path: "../public/fonts/TT_C_700.ttf", weight: "700" },
        { path: "../public/fonts/TT_C_800.ttf", weight: "800" },
    ],
    variable: "--font-TT-C",
    display: "swap",
});
//
// export const TTLight = localFont({
//     src: [
//         { path: "../public/fonts/TT_Light.ttf", weight: "200" },
//         // { path: "../public/fonts/Inter-Medium.woff2", weight: "500" },
//         // { path: "../public/fonts/Inter-Bold.woff2", weight: "700" },
//     ],
//     variable: "--font-light",
//     display: "swap",
// });