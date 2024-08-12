import React from "react";
import Image from "next/image";

const BlogCard = ({ title, tag, image, url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block mb-4">
            <div className="flex items-center p-4 transition-all duration-300 border border-gray-300 rounded-md shadow-md hover:border-primary-500 hover:shadow-2xl">
                <div className="flex-shrink-0 w-20 h-20 mr-4">
                    <Image width={500} height={500} src={image} alt={title} className="object-cover w-full h-full rounded-md" />
                </div>
                <div>
                    <h5 className="text-lg font-semibold">{title}</h5>
                    {tag && (
                        <div className="mt-1 text-sm text-gray-300">
                            {tag.map((t, index) => (
                                <span key={index} className="mr-2">
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </a>
    );
};

export default BlogCard;
