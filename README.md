# Ocntools -- Ocean Command Line Tools
Tools to create and edit Ocean documents

This is just a place to park command-line node tools for creating and editing Ocean documents

Some I'd like to start with:


### top level
* new -- create new blank Ocean document with prompts for meta data
* convert -- convert from various formats into Ocean doc
* clean -- auto correct whitespace in ocean document document
* translate -- create translation document with temporary translation text provided by Google

### editing level
* splitlines - parse paragraphs and split lines to prevent lines from being too long
* id_sentences - use nlp to wrap sentences in a <div> with id like par_id:sent#
* id_words - wrap each word in a <span> with id like par_id:sent_id:word#

### misc
* standardize_pars - replace all par tags with <div class='par'> with content being in a <div class='english'>
