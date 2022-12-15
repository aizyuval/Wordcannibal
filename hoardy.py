from wordhoard import Antonyms
from wordhoard import Synonyms
from wordhoard import Definitions
from wordhoard import Hypernyms
from wordhoard import Hyponyms 
import sys


arguments = sys.argv


#arguments = ['event', 'example']
for word in arguments:
    synonym = Synonyms(search_string=word) ##arguments[word]
    synonym_results = synonym.find_synonyms()
    if len(synonym_results) > 7:
        synonym_results = synonym_results[:7]
    print(synonym_results)

