<div id="test"></div>
		
# Finished!

Flex doesn't require server or database configuration since it's client-side. 
This means if you are seeing this page, you are done and can start setting up
your website!

-----------------------------------------------------------------------------

## Site Template

The site template inside the `default.html` defines the primary navigation, 
header, and footer of your site.

	|-styles
	|--site.css
	|-default.html


**Example HTML**

	<div id="root"> 
		<!--The page is generated here-->
	</div>

-----------------------------------------------------------------------------

## Folder Template

Each folder uses  a `template.html` file to define the sidebar navigation 
and layout for pages inside it.   

	|-static
	|--folder1
	|---page1.md
	|---page2.md
	|---template.html	 
	|--folder2
	|---page1.md
	|---page2.md
	|---template.html	 
	|-styles
	|--site.css
	|-default.html

**Example HTML**

	<div>
		{content}
	</div>

-----------------------------------------------------------------------------

## Subfolder Template

Subfolders have their own `template.html` file for sites that have complex
taxonomies.

	|-static
	|--folder1
	|-- subfolder
	|------pageA.md
	|------pageB.md
	|-----template.html
	|---page1.md
	|---page2.md
	|---template.html	 
	|--folder2
	|---page1.md
	|---page2.md
	|---template.html	 
	|-styles
	|--site.css
	|-default.html 

**Example HTML**

	<div>
		{content}
	</div>


-----------------------------------------------------------------------------

## JavaScript Files

JavaScript code for a page is maintained in a separate file with the same
filename.

	|-static
	|--folder1
	|---page1.md
	|---page1.js
	|---page2.md
	|---page2.js
	|---template.html	 
	|--folder2
	|---page1.md
	|---page2.md
	|---template.html	 
	|-styles
	|--site.css
	|-default.html
	
-----------------------------------------------------------------------------

## Linking to Pages

Exclude the pages folder and the extension in link urls. This makes the URL 
friendly.

	/static/folder/page1.md --> /folder1/page1