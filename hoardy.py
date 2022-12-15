from wordhoard import Antonyms
from wordhoard import Synonyms
from wordhoard import Definitions
from wordhoard import Hypernyms
from wordhoard import Hyponyms 
import sys



#arg1 = sys.argv[1]

arguments = sys.argv


#arguments = ['event', 'example']
for word in arguments:
    synonym = Synonyms(search_string=word) ##arguments[word]
    synonym_results = synonym.find_synonyms()
    if len(synonym_results) > 7:
        synonym_results = synonym_results[:7]
    print(synonym_results)

 
 
 ## none
	##arguments[word] = synonym_results
 
## send arguments to server




#


##opposite -> search for defenition, get words
#definition = Definitions(search_string='angry')
#definition_results = definition.find_definitions()
#print("this is the defenitions",definition_results)
##compare defenitions..




##Its a type of ##adj?
###hyponym = Hyponyms(search_string='')
###hyponym_results = hyponym.find_hyponyms()
##print("this is the specifiers",hyponym_results)


##hyponym = Hyponyms(search_string='event')
##hyponym_results = hyponym.find_hyponyms()
##print("this is the specifiers",hyponym_results)


##its less specific than...
##hyponym = Hyponyms(search_string='angry')
##hyponym_results = hyponym.find_hyponyms()
##print("this is the defenitions",hyponym_results)