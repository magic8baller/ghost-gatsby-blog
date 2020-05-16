import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const icons = [
    {
        id: `fb-link`,
        icon: <FaFacebook className="social-icon facebook-icon" />,
        path: `https://www.facebook.com/susan-turis/`,
    },
    {
        id: `ig-link`,
        icon: <FaInstagram className="social-icon instagram-icon" />,
        path: `https://www.instagram.com/susan-turis/`,
    },
];

export default () => (
    <ul>
        {icons.map((link) => (
            <li key={link.id}>
                <a href={link.url} className="social-link">
                    {link.icon}
                </a>
            </li>
        ))}
    </ul>
);
