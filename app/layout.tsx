import React, { ReactNode } from "react";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}