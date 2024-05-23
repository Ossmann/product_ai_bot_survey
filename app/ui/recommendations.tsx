'use client';

import Link from 'next/link';
import { use } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

// Array of platforms
const platforms = [
    {
        platformValue: "1",
        imagePath: "/CollectionExplorer.png",
        imageTitle: "Online Collection",
        href: "https://www.fluxguide.com/en/collection-explorer/",
        description: "The collection explorer is the best way to make the treasures hidden in your system accessible to the public.",
        contact: "office@zetcom.com",
        logo: "/Fluxguide-Logo.svg"
    },
    {
        platformValue: "2",
        imagePath: "/fluxguide_lmw.jpg",
        imageTitle: "Guiding",
        href: "https://www.fluxguide.com/en",
        description: "Fluxguide is the world market leader for mobile museum guides.",
        contact: "office@zetcom.com",
        logo: "/zetcomLogo.png"
    },
    {
        platformValue: "3",
        imagePath: "/Curator.jpeg",
        imageTitle: "Curator",
        href: "https://ortelia.com/products/ortelia-curator-exhibition-design-software/",
        description: "Experience the next evolution in exhibition design with Ortelia Curator software that empowers museums to easily curate, plan, archive and share exhibitions.",
        contact: "laz@ortelia.com",
        logo: "/ortelia_logo.jpeg"
    },
    {
        platformValue: "4",
        imagePath: "/MuseumPlus.png",
        imageTitle: "MuseumPlus - Collection Management",
        href: "https://www.zetcom.com/en/museumplus-en/",
        description: "MuseumPlus is the industry standard for Collection Management with state-of-the-art web based curation tools.",
        contact: "office@zetcom.com",
        logo: "/zetcomLogo.png"
    },
    {
        platformValue: "5",
        imagePath: "/AR.jpeg",
        imageTitle: "Spatial Computing",
        href: "https://www.fluxguide.com/en/explore-new-realities-augmented-virtual-and-mixed-reality/",
        description: "Fluxguide is earlier mover with over 12 years experience in AR, now moving into Spatial Computing for museums.",
        contact: "office@fluxguide.com",
        logo: "/Fluxguide-Logo.svg"
    },
    {
        platformValue: "7",
        imagePath: "/MuseumStars.png",
        imageTitle: "Plug and Play",
        href: "https://www.museumstars.com/en/product-english/",
        description: "MuseumStars offers a ready-to-use multimedia guide platform that transforms your cultural space into a digital experience hub.",
        contact: "office@fluxguide.com",
        logo: "/Fluxguide-Logo.svg"
    }
];


    
      
const Recommendations = () => {
    const searchParams = useSearchParams();
    const platformValues = searchParams.getAll('platform');

    // Filter platforms based on the value of the 'platform' parameters
    const filteredPlatforms = platforms.filter(p => platformValues.includes(p.platformValue));

    return (
        <div className="flex justify-center mt-4">
            {filteredPlatforms.map((platform, index) => (
                <div key={index} className='hover:z-40'>
                    <div className="mx-2 transition ease-in-out delay-150 duration-700 hover:scale-110 transform h-80 w-60">
                        {/* Image */}
                        <div className=''>
                        <div className=" border border-orange-500 hover:border-grey-400 rounded-md shadow-[black] shadow-lg hover:shadow-orange-500 group">
                            <Link target="_blank" href={platform.href}>
                                <img
                                    className="object-cover  rounded-sm relative"
                                    src={platform.imagePath}
                                    alt={platform.imageTitle}
                                    // width={200}
                                    // height={200}
                                />
                            
                            {/* <ArrowTopRightOnSquareIcon className="absolute bottom-2 left-2 h-4 w-4 text-orange-500 opacity-0 transition-opacity ease-in-out delay-150 duration-700 group-hover:opacity-100" /> */}
                            </Link>
                        </div>
                        <div className='text-nowrap'>{platform.imageTitle}</div>
                        <div className='text-sm font-light'>{platform.description}</div>
                        <div>
                        </div>
                        <img
                                    className="rounded-sm"
                                    src={platform.logo}
                                    // alt={platform.imageTitle}
                                    width={100}
                                />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Recommendations;