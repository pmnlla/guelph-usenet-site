// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.local(),
        name: "ITC Garamond Book",
        cssVariable: "--font-garamond-big",
        options: {
            variants: [{
                src: ['./public/font/itc-garamond-book-ci.otf'],
                weight: 'normal',
                style: 'normal'
            }]
        }
    },
    {
        provider: fontProviders.local(),
        name: "Sun Serif",
        cssVariable: "--font-sun-serif",
        options: {
            variants: [{
                src: ['./public/font/Sun Serif- Regular.ttf'],
                weight: 'normal',
                style: 'normal'
            }]
        }
    },
        {
        provider: fontProviders.local(),
        name: "Sun Serif Caps",
        cssVariable: "--font-sun-caps",
        options: {
            variants: [{
                src: ['./public/font/Sun Serif Caps- Regular.ttf'],
                weight: 'normal',
                style: 'normal'
            }]
        }
    }
],
    
    vite: {
        plugins: [tailwindcss()]
    }
});