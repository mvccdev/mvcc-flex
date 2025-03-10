(function() {

	// ======================================================
	// Declarations
	// ======================================================  
	//`
	// Define our constants.
	//
	const _root_div  = document.getElementById("root");
	const _root_path = "/static";

	// ======================================================
	// _flex_init
	// ======================================================
	//
	// Encapsulation of the main code to generate the page.
	//
	async function _flex_init(_path, _default_home = "/main/home")
	{		
		//
		// Replace empty paths with the default home page.
		//
		_path = _path == "/" ? _default_home : _path;

		//
		// Define the object containing the paths.
		//
		const _paths = _flex_get_paths(_root_path + _path);
			
		//
		// Define the object containing the code.
		//
		const _code = await _flex_get_code(_paths);
	
		//
		// Add the HTML to the page.
		//
		_flex_add_html(_code.html_code);

		//
		// Create a new script element with the code.
		//
		_flex_add_js(_code.js_code);		 
	}

	// ======================================================
	// _flex_get_path()
	// ======================================================
	//
	// Return an object containing the paths to the files.
	//
	function _flex_get_paths(_path)
	{
		//
		// Define the root folder from the path.
		//
		const _root = _path.match(/^.*\//)[0];

		//
		// Define a time stamp to prevent caching.
		//
		const _time_stamp = new Date().getTime();

		//
		// Return an object containing the paths.
		//
		return {
			html_path	: _root + "template.html",
			md_path		: _path + ".md?" + _time_stamp,
			js_path		: _path + ".js?" + _time_stamp			
		}
	}

	// ======================================================
	// _flex_get_code()
	// ======================================================
	//
	// Return an object containing the Markdown and script.
	//
	async function _flex_get_code(_paths)
	{
		//
		// Fetch the template, Markdown, and JavaScript files.
		//
		const _html_text = await(await fetch(_paths.html_path)).text() || "{content}";
		const _md_text   = await(await fetch(_paths.md_path)).text() || "";
		const _js_text   = await(await fetch(_paths.js_path)).text() || "";
		const _generated = marked.parse(_md_text);

		//
		// Return an object containing the code.
		//
		return {
			html_code: 	_html_text.replace("{content}", `${_generated}`),
			js_code: 	_js_text
		}
	}

	// ======================================================
	// _flex_add_html()
	// ======================================================
	//
	// Replace the root element with the HTML.
	//
	function _flex_add_html(_code)
	{
		//
		// Check to make sure the file exists.
		//
		if(_flex_is_missing_file(_code) == false) 
		{
			_root_div.innerHTML = _code;		 
		} 
	}

	// ======================================================
	// _flex_add_js()
	// ======================================================
	//
	// Append the script to below the root element.
	//
	function _flex_add_js(_code)
	{
		//
		// Check to make sure the file exists.
		//
		if(_flex_is_missing_file(_code) == false)
		{
			let _script = document.createElement('script');
			
			//
			// Defines the script source.
			//
			_script.textContent  = _code;
		
			//
			// Insert the script element.
			//
			_root_div.appendChild(_script);
		}
	}

	// ======================================================
	// _flex_is_missing_page()
	// ======================================================
	//
	// Return true if the file contents is invalid.
	//	
	function _flex_is_missing_file(_file) 
	{
		//
		// Check for default.html code or a blank.
		//
		return _file.includes(`<html>`) || _file == "";
	}

	//
	// Do the thing.
	//
	_flex_init(location.pathname, "/main/home");
})();
