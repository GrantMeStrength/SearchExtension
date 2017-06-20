# SearchExtension
Improve the ability to find UWP related programming documentation from a Chrome and Edge web extension

## WebExtensions

WebExtensions are extra features that you can add to your web browser. They're supported by Chrome, Firefox, Opera and Edge. Safari on the Mac also supports extensions. For more details on WebExtensions, see the [MDN](https://developer.mozilla.org/en-US/Add-ons/WebExtensions) documentation.

As you might expect, writing WebExtensions is done using web-friendly technologies - specifically HTML, CSS and JavaScript. If you can write a webpage, you can make a WebExtension.

## This particular WebExtension

This WebExtension was written for [Windows UWP](https://docs.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide) app developers, and adds a dedicated search button to help find UWP related coding reference, topics and code samples. There's also a mechanism to provide feedback directly to the Windows UWP documentation team. 

All it does really is craft search queries using known keywords and search engine entry points - but you still might find it useful as a tool, and an example of a simple WebExtension.

## Installing WebExtensions

This extension is provide as a collection of files so you can tinker with them, add your own features and see how to they work. It does mean that installing it into your Web Browser is a little fiddly.

### Chrome

1. Go to *Preferences*
2. Click on the *Extensions* button in the top left. 
3. Make sure *Developer mode* (top right) is highlighted.
4. Click on *Load unpacked extension..*
5. Highlght the folder in the Git repo you cloned called *Chrome*, and click *Select*.
6. The extension should now load: you'll see a colored circle in the Web Browser title bar if it's working.
7. Click the colored circle icon to launch the extension.


