# Research Analysis of Litkarta.ru

This document provides a comprehensive analysis of the website "Новая карта русской литературы" (litkarta.ru). The research covers the site's interactive map, technical architecture, and user experience (UX) patterns. The findings are intended to inform the development of a similar map-based platform, prettyparasites.ai.

## 1. Interactive Map Interface

The central feature of Litkarta.ru is its interactive map, which serves as the primary tool for navigating the site's content. The map is implemented using a combination of technologies, reflecting its development in the mid-2000s. The site uses a main interactive map and a smaller, static overview map.

### Main Map

The main interactive map is an Adobe Flash application (.swf file). This technology, while now obsolete, was a common choice for rich interactive web content at the time of the site's creation. The Flash map displays a stylized representation of Russia and the world, with clickable points representing cities and regions. When a user clicks on a point, they are taken to a page dedicated to that location, which then lists authors, literary institutions, and events associated with it. The map is not a modern tiled web map like Google Maps or Mapbox, but rather a single interactive vector graphic.

### Fallback and Static Maps

For users without the Flash plugin, the site provides a fallback mechanism. This consists of a static image of the map with a client-side image map (`<map>` HTML tag) that defines clickable areas (hotspots). These hotspots correspond to the locations on the Flash map and provide the same navigational functionality. This dual-system ensures basic accessibility, although the user experience with the static map is less dynamic than the Flash version.

### Geographical Content Organization

Content on Litkarta.ru is organized hierarchically by geography. The top level of the hierarchy is the world, which is then divided into countries. Russia is the most detailed country, with a further breakdown into regions and cities. Each city page serves as a hub for literary information related to that specific location, including:

*   **Writers**: A list of authors who live or have lived in the city.
*   **Institutions**: Literary magazines, publishing houses, libraries, and other organizations.
*   **Events**: Readings, festivals, and other literary happenings.
*   **Texts**: Prose and poetry about the city.

This geographical organization allows users to explore the literary landscape of Russia and the world in a spatially intuitive way.

![Litkarta Homepage](https://private-us-east-1.manuscdn.com/sessionFile/XfAkz48wEQvepg6XYbh8EF/sandbox/2H6mRTF1u9jyvozn955Yvf-images_1773361575852_na1fn_L2hvbWUvdWJ1bnR1L2xpdGthcnRhX2hvbWVwYWdl.webp?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWGZBa3o0OHdFUXZlcGc2WFliaDhFRi9zYW5kYm94LzJINm1SVEYxdTlqeXZvem45NTVZdmYtaW1hZ2VzXzE3NzMzNjE1NzU4NTJfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwyeHBkR3RoY25SaFgyaHZiV1Z3WVdkbC53ZWJwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kiRSl2NVjQ3zRBOvBXx7Cb7wpiXG-LYOYqWH2Hq2aavHJCM8K8M1c6jKVoUX3UnCGUWbd~Kv8ogUCVtGUNYfbXMIlvihK-vEep7tHuwmD7FMCc0rQsZzPAJsQ3Ue3xFua5cga7kYZklmbgI7T2Rm-ss3uajiUNSb-CESJkgz~z11MpKURthGnds1fl9KYyq~PrZx248fhr4Xw29PfnmZGoLc62uNaU9vLkyr2OQcBuk~jb-ADXoGEqqaFJ1Q3Tqn5ICkUO~sP4iisMJPngQA~axlSA-9rEIPgtxy3oTVk3sgMRGkpTTOms6jPEXKGVJq4PjRyv76s8r1f5ehjhkjAA__)
*Figure 1: The homepage of litkarta.ru, showing the main Flash map and surrounding navigation.*

## 2. Technical Architecture

The technical architecture of Litkarta.ru is characteristic of a website built in the mid-2000s. It relies on a server-side scripting language (PHP) and a traditional relational database, with a front-end that is not based on modern JavaScript frameworks.

### Front-End

*   **Mapping Library**: The primary interactive map is a custom-built Adobe Flash application. The fallback is a static GIF image with an HTML image map. No modern mapping libraries like Leaflet, Mapbox, or Google Maps API are used.
*   **JavaScript**: The site uses minimal, vanilla JavaScript for basic functionality, such as cookie handling and the Flash detection script. There is no evidence of modern JavaScript frameworks like React, Angular, or Vue.js. The site does not use jQuery either.
*   **CSS**: The site's styling is handled by a single CSS file, `litmap00.css`. The styles are not organized using a modern methodology like BEM or SMACSS, but rather a collection of global styles and specific selectors.

### Back-End

*   **Server-Side Language**: The use of `.php` file extensions in URLs and the structure of the RSS feed indicate that the back-end is powered by PHP. The site appears to use a custom-built CMS or a collection of PHP scripts rather than a well-known framework like Laravel or Symfony.
*   **Database**: While not directly visible, the dynamic generation of pages with content from a large repository of authors, texts, and locations strongly suggests the use of a relational database, likely MySQL, which was commonly paired with PHP.
*   **URL Structure**: The URL structure is hierarchical and human-readable, following a pattern of `/country/city/section/`. For example, `/russia/moscow/persons/` lists the authors in Moscow. This is a common and effective pattern for SEO and user navigation.

### Content Delivery

*   **Character Encoding**: The website uses the `windows-1251` character encoding, which is common for older Russian websites. This can cause rendering issues in modern browsers that default to UTF-8, but the site correctly declares the encoding in the HTTP headers and HTML meta tags.
*   **Data Formats**: The site uses RSS feeds (in XML format) to provide updates on news, events, and new texts. This was a popular method for content syndication at the time of the site's creation.

## 3. User Experience (UX) Patterns

The user experience of Litkarta.ru is shaped by its geographical navigation model and its information-rich content. The primary UX patterns are centered around browsing and discovery, rather than search.

### Browsing and Discovery

The main way users interact with the site is by browsing the map. This encourages a form of serendipitous discovery, where users might explore a city or region they are curious about and find new authors or literary works. The site supports this browsing behavior with the following features:

*   **Geographical Navigation**: The map is the primary entry point to the content. Users can click on a city to drill down into the literary scene of that location.
*   **Hierarchical Structure**: The clear hierarchy of World > Country > City > Section (Authors, Events, etc.) provides a predictable and easy-to-understand navigation path.
*   **Cross-linking**: Within author and institution pages, there are links to other related content, allowing users to move laterally through the site and discover new connections.

### Filtering and Search

While browsing is the primary mode of interaction, the site does offer some filtering and search capabilities:

*   **Alphabetical Filtering**: The "Kartoteka" (card catalog) section allows users to browse all authors and institutions alphabetically. This is a crucial feature for users who are looking for a specific person or organization.
*   **Filtering by Activity**: Within a city's "persons" page, users can filter authors by their activity (e.g., poet, prose writer, critic). This allows for a more focused exploration of the literary scene.
*   **Site-wide Search**: A basic search function is available, but it is not the most prominent feature of the site. The search results page is a simple list of links, and it does not offer advanced filtering or sorting options.

![Moscow Persons Listing](https://private-us-east-1.manuscdn.com/sessionFile/XfAkz48wEQvepg6XYbh8EF/sandbox/2H6mRTF1u9jyvozn955Yvf-images_1773361575852_na1fn_L2hvbWUvdWJ1bnR1L2xpdGthcnRhX21vc2Nvd19wZXJzb25z.webp?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWGZBa3o0OHdFUXZlcGc2WFliaDhFRi9zYW5kYm94LzJINm1SVEYxdTlqeXZvem45NTVZdmYtaW1hZ2VzXzE3NzMzNjE1NzU4NTJfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwyeHBkR3RoY25SaFgyMXZjMk52ZDE5d1pYSnpiMjV6LndlYnAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JqSKIs5C4eUQn5naqlI2cZ5jk7QYL70cxQLh2zuzzab4E-6eWcwqRKd~JfWBle3UrMEWslrQF2BvOkoE2bfoz34F7J1r7iPR9~ZpfJlL-dbc~Y3jZSA-4lzlgj2f6OeHWS6iD2yZFzpvdUQsiUXVGKK4ohh8eb1jLz-hj-J8eYvlRIkKH2HzxDU1Zbl0Az6kZTmYnx1GVZidFUqjCLjtdph9LCBJvlaXZ~Wn01Rw-Ifp1bI5JC6okB4l7SD2owTkv5rEuE3NNyqqptMZvTH2VE1J7r~DRK1rXMmeFipLoOgrDceOyNwqN2AAzAxfUVcHcN5Ry1NTkh8RMwP3U6OuOg__)
*Figure 2: The author listing for Moscow, showing alphabetical and activity-based filtering options.*

## 4. UI Layout

The user interface of Litkarta.ru is functional and information-dense, but it reflects the design trends of the mid-2000s. The layout is a classic three-column design, with a header, main content area, and footer.

*   **Header**: The header contains the site logo, main navigation links (About, Editors, Partners), and a search bar.
*   **Left Column**: The left column contains the main navigation menu, which includes links to the main sections of the site: "Страны и регионы" (Countries and Regions), "Литературные проекты" (Literary Projects), and "Студия" (Studio). It also features a list of Russian cities for quick access.
*   **Main Content Area**: This is where the primary content of the page is displayed. On the homepage, this area is dominated by the interactive Flash map. On other pages, it contains lists of authors, articles, or other information.
*   **Right Column**: The right column is used for secondary information, such as a list of recent updates, featured authors, and links to other sections of the site.
*   **Footer**: The footer contains copyright information, contact details, and links to social media.

![Moscow City Page](https://private-us-east-1.manuscdn.com/sessionFile/XfAkz48wEQvepg6XYbh8EF/sandbox/2H6mRTF1u9jyvozn955Yvf-images_1773361575852_na1fn_L2hvbWUvdWJ1bnR1L2xpdGthcnRhX21vc2Nvd19jaXR5.webp?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWGZBa3o0OHdFUXZlcGc2WFliaDhFRi9zYW5kYm94LzJINm1SVEYxdTlqeXZvem45NTVZdmYtaW1hZ2VzXzE3NzMzNjE1NzU4NTJfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwyeHBkR3RoY25SaFgyMXZjMk52ZDE5amFYUjUud2VicCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WnnI2p2YO7jPi1mFamy94B6aW9tWNcN~xw4OIy2yv1V7sLfHvXC9ZBZ4lbFGY6Z0rCJEA1dfgzXgpM9eczi4NkzH4V3mkxQbt4iM8MCOXIGvkwN5Xs0NmxeLOGOnVsrFIclLNoqzQLw~0TmYfzqiYgJgbMwIlPPryYJrm-M22~oh-s6YKPpPY-0p5G-gjBbFAALENADO~VvCD2uxdQhTK1Ij8C1jMT7hQteQp7bTQo-aBWPFTdh2r5uQzNHDy6ibwvKJQoShFvm3~UJwEzZIXaIyvjk0KwWWmBnm7e11hEV2zubqHGIIjxZ4cVzv~izNEtZ2HGV-pY0LMu3PqiBjvA__)
*Figure 3: The page for the city of Moscow, showing the three-column layout and the city-specific submenu.*

## Conclusion

Litkarta.ru is a valuable resource for anyone interested in contemporary Russian literature. Its unique map-based interface provides an engaging way to explore the geographical distribution of literary activity. However, the site's technology is outdated, and a modern implementation could significantly improve the user experience. For the development of prettyparasites.ai, the key takeaways are:

*   A map-based interface is a powerful tool for organizing and presenting geographically-referenced content.
*   A clear hierarchical structure and intuitive navigation are essential for a good user experience.
*   Modern mapping technologies (like Leaflet or Mapbox) and a responsive design are crucial for a contemporary web platform.
*   A robust search and filtering system is necessary to complement the browsing experience.

By building on the conceptual strengths of Litkarta.ru while leveraging modern web technologies, prettyparasites.ai has the potential to become a leading platform in its niche.

## References

[1] Новая карта русской литературы. [https://www.litkarta.ru/](https://www.litkarta.ru/)
