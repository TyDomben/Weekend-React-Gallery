Required Architecture:
To practice passing values as props in React, you must build your gallery app using multiple components: App, GalleryList, and GalleryItem.

App: Represents the overall application or site.

The App must have a data-testid="app" attribute
GalleryList: Represents the gallery of images.

The GalleryList must have a data-testid="galleryList" attribute
GalleryItem - represents a single image in the gallery.

Each GalleryItem must have a data-testid="galleryItem" attribute
Each GalleryItem must display the title.
Each GalleryItem must toggle between showing the image and the description when clicked:
When clicking on a GalleryItem, the description shows and the image hides, and vice versa upon clicking again.
The element that a user clicks to toggle must have the data-testid="toggle" attribute.
A GalleryItem's image must be an img tag.
The element that contains a GalleryItem's description text must have the data-testid="description" attribute.
Each GalleryItem must have a way to like a post when clicking on an element with data-testid="like"