// Search Extension for Chrome
// Written by John Kennedy (jken@microsoft.com) and the CX WebSquad
// Released under MIT License


var lastSearchTerms = "search terms";

function DoSearch(searchUrl)
{
    
    localStorage.setItem('lastTerm',document.getElementById('string').value);
    chrome.tabs.getSelected(null,function(tab) {
      chrome.tabs.update(tab.id, {'url': searchUrl});
        });
        
}


document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('string').value = localStorage.getItem('lastTerm');
  document.getElementById('string').select();
  document.getElementById('feedbackForm').hidden = true;

  lastSearchTerms = document.getElementById('string').value; 


  if (lastSearchTerms=="")
  {
     document.getElementById('feedback').hidden = true;
  }
  else
  {
     document.getElementById('feedback').hidden = false;
  }

  var link = document.getElementById('click_Docs');
    
    link.addEventListener('click', function() {

       DoSearch("https://docs.microsoft.com/en-us/search/index?search=windows+app+developer+" + document.getElementById('string').value);
    });

  var link = document.getElementById('click_StackOverflow');
    
    link.addEventListener('click', function() {

       DoSearch("https://stackoverflow.com/search?q=" + document.getElementById('string').value);
    });

    var link = document.getElementById('click_Channel9');
    
    link.addEventListener('click', function() {

       DoSearch("https://channel9.msdn.com/Search?term=" + document.getElementById('string').value);
    });

  var link = document.getElementById('click_API');
    
    link.addEventListener('click', function() {

      DoSearch("http://www.google.com/search?q=site:docs.microsoft.com/en-us/uwp/api/windows \"" + document.getElementById('string').value) + "\"";
    });

  var link = document.getElementById('click_Samples');
    
    link.addEventListener('click', function() {

       DoSearch("https://github.com/Microsoft/Windows-universal-samples/search?utf8=✓&q=" + document.getElementById('string').value);
    });

  var link = document.getElementById('click_Bing');
    
    link.addEventListener('click', function() {

       DoSearch("http://www.bing.com/search?q=" + document.getElementById('string').value);
    });
 
 var link = document.getElementById('click_Google');
    
    link.addEventListener('click', function() {

       DoSearch("http://www.google.com/search?q=" + document.getElementById('string').value);
    });

 var link = document.getElementById('click_Feedback');
    
    link.addEventListener('click', function() {
      document.getElementById('feedbackForm').hidden = false;
      document.getElementById('search').value = localStorage.getItem('lastTerm');
      document.getElementById('result').select();
      document.getElementById('search').focus();
    });
});