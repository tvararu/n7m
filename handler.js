'use strict';

const docs = `n7m(1)                           NUMERONYMISE                            n7m(1)

NAME
    numeronymise: turn words into their number based acronyms.

SYNOPSIS
    /<word>

DESCRIPTION
    provide n7m with a word and it will convert it into its equivalent
    numeronymised acronym.

EXAMPLES
    GET /accessibility
       a11y
    GET /internationalisation
       i18n

SEE ALSO
    http://github.com/tvararu/n7m
    https://en.wikipedia.org/wiki/Numeronym
`;

function numeronymise(word) {
  return word ? word[0] + (word.length - 2) + word[word.length - 1] : docs;
}

module.exports.main = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: numeronymise(event.pathParameters && event.pathParameters.word),
  };

  callback(null, response);
};
