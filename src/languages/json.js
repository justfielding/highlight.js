/*
Language: JSON
Author: Fielding Johnston <fielding@justfielding.com>
Website: justfielding.com
Description: JSON highlighting for highlight.js
*/

hljs.LANGUAGES.json = function() {
  return {
    defaultMode: {
      keywords: {
        "literal": {'true': 5, 'false': 5, 'null': 5}
      },
      contains: [
        hljs.C_NUMBER_MODE,
        {
          className: 'keyword',
          begin: '(("|\')+([A-Za-z0-9!?.,+\-])+("|\')+):',
          relevance: 0
        },
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE
      ]
    }
  };
}();